<?php

use Illuminate\Http\Client\Response;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('uoms', function (Request $request) {
    return Response([
        "status" => "success",
        "data" => ["FEET", "POUNDS", "GALLONS", "KG", "M", "SHP"]
    ]);
});

Route::get('currencies', function (Request $request) {
    return Response([
        "status" => "success",
        "data" => ["USD", "IDR", "SGD", "HKD"]
    ]);
});

Route::get('charges', function (Request $request) {
    return Response([
        "status" => "success",
        "data" => ["Something"]
    ]);
});
