<?php

namespace App\Modules\Abios;

use GuzzleHttp\Client;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;

class AbiosApi
{
    /**
     * AbiosGaming API URL
     *
     * @var string
     */
    private static string $apiUrl = 'https://api.abiosgaming.com/v2/';

    /**
     * OAuth Client Id from AbiosGaming API
     *
     * @var string
     */
    private string $clientId;

    /**
     * OAuth Client Secret from AbiosGaming API
     *
     * @var string
     */
    private string $clientSecret;

    /**
     * The authentication token used to access all other endpoints.
     *
     * @var string
     */
    private ?string $access_token = null;
    private ?int $expires = null;

    /**
     * Guzzle Client
     *
     * @var Client
     */
    private Client $guzzleClient;
    private int $lastRequest;

    public function __construct()
    {
        $clientId     = env('ABIOS_CLIENT');
        $clientSecret = env('ABIOS_SECRET');

        if (empty($clientId)) {
            throw new InvalidArgumentException('You need to pass an OAuth Client ID.');
        }

        if (empty($clientSecret)) {
            throw new InvalidArgumentException('You need to pass an OAuth Client Secret.');
        }

        $this->clientId      = $clientId;
        $this->clientSecret  = $clientSecret;
        $this->lastRequest   = time();

        $this->guzzleClient = new Client([
            'base_uri' => $this->getApiUrl()
        ]);
    }

    /**
     * Get API URL
     *
     * @return string
     */
    public function getApiUrl()
    {
        return self::$apiUrl;
    }

    /**
     * Get client id
     *
     * @return string
     */
    public function getClientId()
    {
        return $this->clientId;
    }

    /**
     * Get client secret
     *
     * @return string
     */
    public function getClientSecret()
    {
        return $this->clientSecret;
    }

    /**
     * Get Guzzle Client
     *
     * @return Client
     */
    public function getGuzzleClient()
    {
        return $this->guzzleClient;
    }

    /**
     * Get authentication token used to access all other endpoints.
     *
     * @return string
     */
    public function getAccessToken()
    {
        return $this->access_token;
    }

    public function formatDate($timestamp)
    {
        return date('Y-m-d\TH:i:s\Z', $timestamp);
    }

    /**
     * Get request access token
     */
    private function initAccessToken()
    {
        $response = $this->request('oauth/access_token', [
            'client_id'     => $this->clientId,
            'client_secret' => $this->clientSecret,
            'grant_type'    => 'client_credentials'
        ], 'POST');

        if (is_array($response) && isset($response['access_token'])) {
            $this->access_token = $response['access_token'];
            $this->expires      = time() + $response['expires_in'];
        }

        Log::channel('abios')
           ->info("ABIOS ACCESS TOKEN RECEIVED: {$response['access_token']} | EXPIRES IN: {$response['expires_in']}");
    }

    /**
     * @param $url
     * @param  array  $args
     * @param  string  $method
     *
     * @return mixed
     */
    public function request($url, array $args = [], $method = 'GET')
    {
        // If no Token or Expired and not a GET-token request

        if ($url !== 'oauth/access_token' && ( ! $this->access_token || ($this->expires && ($this->expires - time()) < 100))) {
            Log::channel('abios')->info("RENOVATING ACCESS TOKEN");
            $this->initAccessToken();
        }

        $timePassedFromLastRequest = time() - $this->lastRequest;


        $this->lastRequest = time();
        $request           = new ApiRequest($this, $url);

        if ($url !== 'oauth/access_token') {
            $request->setArgs([
                'access_token' => $this->access_token
            ]);
        }

        if (count($args)) {
            $request->setArgs($args);
        }

        return $request->send($method);
    }
}
