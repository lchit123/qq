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

Route::get('/detail/{id}',"IndexController@detail");//详情页
Route::get('/novelType/{id}',"IndexController@novelType");//分类详情页


Route::get('/reg',"UserController@reg");//注册页面
Route::post('/reg',"UserController@regDo");//注册执行
Route::get('/login',"UserController@login");//登录页面
Route::post('/login',"UserController@loginDo");//登录执行

Route::post('/getcode',"UserController@getcode");//获取验证码
Route::post('/phonenum',"UserController@phonenum");//手机号唯一




Route::get('/user/aouth',"UserController@aouth");
Route::get('/user/oauth',"UserController@oauth");//自动触发 扫码登录

Route::get('/qrcode',"IndexController@qrcode");//生成二维码
Route::get('/image',"IndexController@image");//生成二维码
