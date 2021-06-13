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

    // // Route::post('password/email', 'App\Http\Controllers\App\Http\Controllers\Auth\ForgotPasswordController@sendResetLinkEmail');
    // Route::post('password/reset', 'App\Http\Controllers\Auth\ResetPasswordController@reset');

    // Route::post('email/verify/{user}', 'App\Http\Controllers\Auth\VerificationController@verify')->name('verification.verify');
    // Route::post('email/resend', 'App\Http\Controllers\Auth\VerificationController@resend');

    // Route::post('oauth/{driver}', 'App\Http\Controllers\Auth\OAuthController@redirectToProvider');
    // Route::get('oauth/{driver}/callback', 'App\Http\Controllers\Auth\OAuthController@handleProviderCallback')->name('oauth.callback');
});

Route::group(['middleware' => 'auth:sanctum'], function () {

    Route::delete('designs/{id}', 'App\Http\Controllers\DesignController@destroy');

    Route::get('/me', function(Request $request) {
        return auth()->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);

    // Route::post('logout', 'App\Http\Controllers\Auth\LoginController@logout');

    // Route::get('user', 'App\Http\Controllers\Auth\UserController@current');

    // Route::patch('settings/profile', 'Settings\ProfileController@update');
    // Route::patch('settings/password', 'Settings\PasswordController@update');
});

Route::group(['middleware' => 'is_admin:api'], function () {
});
