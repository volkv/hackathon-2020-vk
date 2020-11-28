<?php

namespace App\Modules\Abios;

use App\Modules\Abios\AbiosApi;
use GuzzleHttp\Exception\ClientException;
use Illuminate\Support\Facades\Log;
use InvalidArgumentException;
use Psr\Http\Message\ResponseInterface;

class ApiRequest
{
    /**
     * API Object Holder
     *
     * @var Object Api
     */
    private $api;

    /**
     * Final built URL for a request.
     *
     * @var string
     */
    private $url;

    /**
     * Individual components of the request url.
     *
     * @var array
     */
    private $args = [];

    /**
     * Main Constructor
     *
     * Request constructor.
     *
     * @param  AbiosApi  $api
     * @param $url
     */
    public function __construct(AbiosApi $api, $url = null)
    {
        $this->api = $api;
        $this->url = $url;
    }

    /**
     * @param  string  $method
     *
     * @return mixed
     */
    public function send($method = 'GET')
    {
        $start = now();

        try {
            $method = strtoupper($method);

            if ($method === 'GET') {
                $result = $this->get();
            } elseif ($method === 'POST') {
                $result = $this->post();
            } else {
                throw new InvalidArgumentException('Wrong method specified.');
            }
        } catch (ClientException $e) {
            if ( ! $e->getCode() == 410) {
                echo $e->getMessage();

                return [];
            }

            $result = $e->getResponse();
        }

        if ( ! in_array($result->getStatusCode(), [200, 410])) {
            $respCode = $result->getStatusCode();
            $respBody = $result->getBody();
            throw new \InvalidArgumentException('AbiosGaming API returned '.$respCode.' '.$respBody.' for '.$this->url);
        }

        $time = now()->diffInMilliseconds($start);
        Log::channel('abios')->debug("ABIOS: $method Request to {$this->url} | {$time} ms");

        return json_decode($result->getBody()->getContents(), true);
    }

    /**
     * Performs a GET request to the remote API.
     *
     * @return ResponseInterface
     */
    private function get()
    {
        $url = $this->build_query_url();

        return $this->api->getGuzzleClient()->get($this->url, ['query' => $url]);
    }

    /**
     * @param  bool  $url
     *
     * @return null|string
     */
    private function build_query_url($url = false)
    {
        $query = '';

        if ($url) {
            $query = $this->url;
        }

        if (count($this->args)) {
            $query .= '?';

            foreach ($this->args as $name => $value) {
                if (is_array($value)) {
                    $query .= $this->_build_query_url($name, $value);
                } else {
                    $query .= '&'.$name.'='.$value;
                }
            }
        }

        return $query;
    }

    /**
     * Build query url
     *
     * @param $name
     * @param $args
     *
     * @return string
     */
    private function _build_query_url($name, $args)
    {
        $_q = '';

        foreach ($args as $value) {
            if (is_array($value)) {
                $_q .= $this->_build_query_url($name, $value);
            } else {
                $_q .= '&'.$name.'[]='.$value;
            }
        }

        return $_q;
    }

    /**
     * Performs a POST request to the remote API.
     *
     * @return ResponseInterface
     */
    private function post()
    {
        return $this->api->getGuzzleClient()->post($this->url, ['form_params' => $this->args]);
    }

    /**
     * Set arguments to request.
     *
     * @param  array  $args  All extra parameters for the API request.
     */
    public function setArgs($args = [])
    {
        $this->args = array_merge($this->args, $args);
    }

    /**
     * Clear param arsg
     */
    public function clearArgs()
    {
        $this->args = [];
    }

    /**
     * Set Method URL
     *
     * @param $url
     */
    public function setUrl($url)
    {
        $this->url = $url;
    }
}
