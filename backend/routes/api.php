<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DesignController;
use App\Http\Controllers\Auth\AuthController;




Route::group(['middleware' => 'guest:api'], function () {
    Route::get('/designs', [DesignController::class, 'show']);
    Route::get('/DisplayDesign', [DesignController::class, 'display']);

    Route::post('/register', [AuthController::class, 'register']);

    Route::post('/login', [AuthController::class, 'login']);
});

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::delete('designs/{id}', 'App\Http\Controllers\DesignController@destroy');

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);
});
