<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;
class UserController extends Controller
{
    /**
     * 登录
     */
    public function login()
    {
         return view("/user/login");
    }


    public function loginss(Request $request){
        $data = $request->except("_token");
        $dd=UserModel::get();
        $info = UserModel::where(["account"=>$data['account']])->first();

    }
    public function logins(){
        $code = $_GET['code'];
        $appid="wx6ba488e185b54715";
        $appsecret="1bd93a56b35bcf5fd8eae80c0a76dd4e";
        $tokenurl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=$appid&secret=$appsecret&code=$code&grant_type=authorization_code";
        $res = file_get_contents($tokenurl);
        $token = json_decode($res,true)['access_token'];
        $openid = json_decode($res,true)['openid'];
        $user_url ="https://api.weixin.qq.com/sns/userinfo?access_token=$token&openid=$openid&lang=zh_CN";
        $userInfo = file_get_contents($user_url);
        $user = json_decode($userInfo,true);
        print_r($user);
    }
    public function aouth(){
        include './phpqrcode.php';
        $uid = uniqid();
        $url="http://zzy.chatroom.13366737021.top//oauth.php?uid=".$uid;
        $obj = new \QRcode();
        $obj->png($url,'/1.png');

    }
    //扫码登陆
    public function oauth(){
        $uid =$_GET['uid'];
        $appid="wx6ba488e185b54715";
        $appsecret="1bd93a56b35bcf5fd8eae80c0a76dd4e";
        $uri=urlencode("http://zzy.chatroom.13366737021.top/logins");
        $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=$appid&redirect_uri=$uri&response_type=code&scope=snsapi_userinfo&state=$uid#wechat_redirect";
        header("location:$url");
    }

   //注册
    public function reg()
    {
        return view("/user/reg");
    }

    public function regDo(Request $request)
    {
        $data = $request->except("_toke");
        $res = UserModel::create($data);
        if($res) {
            return redirect("/user/login");
        }
    }


}
