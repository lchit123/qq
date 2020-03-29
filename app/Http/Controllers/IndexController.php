<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use QRcode;
use App\Models\CategoryModel;
class IndexController extends Controller
{
    /**首页*/
    public function index(){
        //获取顶级分类
        $catetop = CategoryModel::where(["parend_id"=>0])->get();
        $this->qrcode();
        return view("/index/index",['catetop'=>$catetop]);
    }
    public function qrcode(){
        include './phpqrcode.php';
        $uid = uniqid();
        $url = "http://fuleshop.plove.xyz/image?uid=".$uid;
        $filename = "1.png";
        $obj = new QRcode();
        session(["image"=>"/images/1.png"]);
        $obj->png($url,$filename);
    }
    public function image(){
        $uid=$_GET['uid'];
        $appid="wx6ba488e185b54715";
        $appsecret="1bd93a56b35bcf5fd8eae80c0a76dd4e";
        $uri=urlencode("http://fuleshop.lqove.xyz/login");
        $url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=$uri&response_type=code&scope=snsapi_userinfo&state=$uid#wechat_re";
        header('Location:'.$url);
    }
    /**详情**/
    public  function datal()
    {
        return view("index/datal");
    }

}
