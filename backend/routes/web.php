<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Auth\RegisterController;


// Auth::routes();

Route::post('/login', 'App\Http\Controllers\Auth\LoginController@login');
Route::post('/register', [RegisterController::class, 'register']);