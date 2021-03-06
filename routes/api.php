<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/v1/series', 'AbiosApiController@seriesList');
Route::get('/v1/tournaments', 'AbiosApiController@tournamentsList');
Route::get('/v1/series/{id}', 'AbiosApiController@seriesSingle');
Route::get('/v1/tournament/{id}', 'AbiosApiController@tournamentSingle');
