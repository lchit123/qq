<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use QRcode;
use App\Models\CategoryModel;
//use App\Models\NovelModel;
//use App\Models\NovelTypeModel;
class IndexController extends Controller{
    /**首页*/
    public function index(){
        dd(12);
        //获取顶级分类
//        $catetop = CategoryModel::where(["parend_id"=>0])->get()->toarray();
        $catetop = [
            ["cate_id"=>1,"cate_name"=>"创世","status"=>0,"partend_id"=>0],
            ["cate_id"=>2,"cate_name"=>"云起","status"=>0,"partend_id"=>0],
            ["cate_id"=>3,"cate_name"=>"图书","status"=>0,"partend_id"=>0]
        ];
        $this->qrcode();
        return view("/index/index",['catetop'=>$catetop]);
    }
    public function qrcode(){
        include './phpqrcode.php';
        $uid = uniqid();
        $url = "http://zzy.chatroom.13366737021.top/image?uid=".$uid;
        $filename = "1.png";
        $obj = new QRcode();
        session(["image"=>"/images/1.png"]);
        $obj->png($url,$filename);
    }
    public function image(){
        $uid=$_GET['uid'];
        $appid="wx6ba488e185b54715";
        $appsecret="1bd93a56b35bcf5fd8eae80c0a76dd4e";
        $uri=urlencode("http://zzy.chatroom.13366737021.top/login");
        $url ="https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=$uri&response_type=code&scope=snsapi_userinfo&state=$uid#wechat_re";
        header('Location:'.$url);
    }
    /**详情**/
    public  function detail($id)
    {
        //获取头部导航分类信息
        $noveltypeinfo=NovelTypeModel::where(["parend_id"=>0])->get();
        //获取单条详情信息
        $info = NovelModel::where(["novel_id"=>$id])->first();
        return view("/index/detail",['info'=>$info,"noveltypeinfo"=>$noveltypeinfo]);
    }
    /**分类详情页**/
    public function novelType($id){
        dd($id);
    }

}
