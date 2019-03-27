<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', 'AdminController@index');
Route::get('category/{id}', 'CategoryController@show');
Route::get('/email-not-verified',    function () {   
    return view('home');    })->name('verification.notice');