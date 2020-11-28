<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Modules\Abios\AbiosApi;
use Dotenv\Exception\ValidationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class AbiosApiController extends Controller
{

    /**
     * @var AbiosApi
     */
    private AbiosApi $api;

    public function __construct(AbiosApi $api)
    {
        $this->api = $api;
    }

    public function seriesList(Request $request)
    {

        $endpoint = 'series';

        $this->validate($request, [
            'game' => 'int|in:1,2,5',
            'page' => 'int',
            'starts_after' => 'int',
            'starts_before' => 'int',
        ]);

        $payload = [];
        $payload['games'] = [1,2,5];
        
        if ($request->game) {
            $payload['games'] = [$request->game];
        }

        $payload['page'] = $request->page ?? 1;
        $payload['starts_after'] = $this->api->formatDate($request->starts_after ?? now()->startOfDay()->timestamp);
        $payload['starts_before'] = $this->api->formatDate($request->starts_before ?? now()->endOfDay()->timestamp);


      //  $payload['with'] = ['tournament'];

        $cacheKey = md5($endpoint.serialize($payload));

        return Cache::remember($cacheKey, 600, fn() => $this->api->request($endpoint, $payload));

    }

    public function seriesSingle($id)
    {
        if (! (int) $id) {
            throw new ValidationException('Wrong id');
        }

        $endpoint = "series/$id";

        $payload['with'] = ['comp_perf', 'casters'];

        $cacheKey = md5($endpoint.serialize($payload));
        return Cache::remember($cacheKey, 600, fn() => $this->api->request($endpoint, $payload));
    }
}
