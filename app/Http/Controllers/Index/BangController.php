<?php

namespace App\Http\Controllers\Index;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BangController extends Controller
{
    //排行榜页
    public function index(){
        return view("/index/bang");
    }
}
