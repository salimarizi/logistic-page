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

Route::get('vendors', function (Request $request) {
    return Response([
        "status" => "success",
        "data" => [[
            "id" => "V001",
            "assigned" => "Amarit & Associated Logistics Co Ltd",
            "attn" => "John Smith",
            "quotation_no" => "ABC-123-01",
            "address" => "Marubeni-Itochu Tublars Asia Pte Ltd (2 Shenton Way, SGX Centre 1, #07-01 (S) (068804)"
        ]]
    ]);
});

Route::get('invoices', function (Request $request) {
    return Response([
        "status" => "success",
        "data" => ["MITO", "ADVAN"]
    ]);
});

Route::get('customers', function (Request $request) {
    return Response([
        "status" => "success",
        "data" => [[
            "id" => "C001",
            "contact" => "ADNOC-ONSHORE",
            "po_numbers" => [
                "A123XXHTA0192",
                "A123XXHTA0193",
                "A123XXHTA0195"
            ]
        ]]
    ]);
});
