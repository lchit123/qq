<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserModel;
use QRcode;
class UserController extends Controller
{
    public function aouth(){
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

    /**登录页面**/
    public function login(){
        $img = session('image');
        return view("/user/login",['img'=>$img]);
    }
    /**登录执行**/
    public function loginDo(Request $request){
        $data = $request->except("_token");
        if(empty($data['phonenum'])){
            echo   "手机号不能为空,正在为你跳转注册页面";
            header("Refresh:5; URL =/login");die;
        }
        if(empty($data['password'])){
            echo   "密码不能为空,正在为你跳转注册页面";
            header("Refresh:5; URL =/login");die;
        }
        //根据手机号获取一条
        $info = UserModel::where(["phonenum"=>$data['phonenum']])->first();
        if(!empty($info)){
            if($data['password']!=$info['password']){
                echo   "账号或密码错误,正在为你跳转登录页面";
                header("Refresh:5; URL =/login");die;
            }else{
                session(["login"=>$info]);
                return redirect("/");
            }
        }else{
            echo   "账号或密码错误,正在为你跳转登录页面";
            header("Refresh:5; URL =/login");die;
        }
    }
    /**注册页面**/
    public function reg()
    {
        return view("/user/reg");
    }
    /**注册执行**/
    public function regDo(Request $request)
    {
        $data = $request->except("_toke");
        if(empty($data['phonenum'])){
            echo   "手机号不能为空,正在为你跳转注册页面";
            header("Refresh:5; URL =/reg");die;
        }
        if(empty($data['password'])){
            echo   "密码不能为空,正在为你跳转注册页面";
            header("Refresh:5; URL =/reg");die;
        }
        if(empty($data['code'])){
            echo   "验证码不能为空,正在为你跳转注册页面";
            header("Refresh:5; URL =/reg");die;
        }
        $code = session("getcode");
        if($data['code']!=$code){
            echo   "验证码不正确,正在为你跳转注册页面";
            header("Refresh:5; URL =/reg");die;
        }
        unset($data['code']);
        $res=UserModel::create($data);
        if($res) {
            return redirect("/login");
        }
    }
    //手机号唯一
    public function phonenum(Request $request){
        $phonenum = $request->phonenum;
        $count = UserModel::where(["phonenum"=>$phonenum])->count();
        if($count>=1){
            return 0;
        }else{
            return 1;
        }
    }
    //获取验证码
    public function getcode(Request $request)
    {
        $phonenum = $request->phonenum;
        if(empty($phonenum)){
            return "手机号不能为空";
        }
        $getcode = rand(1000,9999);
        session(['getcode'=>$getcode]);
        return $getcode;
    }
}
