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

Route::get('/', function () {
    return view('welcome');
});


//首页
Route::get('/',"IndexController@index");
//微信
Route::get('/login',"UserController@login");
Route::post('/user/ loginss',"UserController@ loginss");
Route::get('/aouth',"UserController@aouth");
Route::get('/oauth',"UserController@oauth");
//注册
Route::get('/user/reg',"UserController@reg");
Route::post('/user/regDo',"UserController@regDo");
