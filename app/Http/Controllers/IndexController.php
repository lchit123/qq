<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function index()
    {
        return view("/index/index");
    }

    public function wx(){

        $uid=uniqid();
        $url="http://zzy.chatroom.13366737021.top/imag?uid=".$uid;
        $obj->png($url, './1.png');
        $obj = new QRcode();
    }


}


