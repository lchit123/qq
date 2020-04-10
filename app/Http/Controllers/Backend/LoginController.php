<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AdminModel;

class LoginController extends Controller
{
    //登录页
    public function login()
    {
        return view("backend.login.login");
    }
    //登录
    public function loginDo(Request $request)
    {
        $data = $request->except("_token");
        if(empty($data['email'])){
            echo "邮箱不能为空,正在为您跳转登录页面.........";
            header("refresh:5,url=/admin/login");exit;
        }
        if(empty($data['password'])){
            echo "密码不能为空,正在为您跳转登录页面.........";
            header("refresh:5,url=/admin/login");exit;
        }
        $info = AdminModel::where(['email'=>$data['email']])->first();
        if(empty($info)){
            echo "账户密码有误,正在为您跳转登录页面.........";
            header("refresh:5,url=/admin/login");exit;
        }else{
            if($info['password']!=md5($data['password'])){
                echo "账户密码有误,正在为您跳转登录页面.........";
                header("refresh:5,url=/admin/login");exit;
            }else{
                session(["admin"=>$info]);
                return redirect("/admin");
            }
        }
    }

    //注册页
    public function reg()
    {
        return view("backend.login.reg");
    }
    //注册
    public function regDo(Request $request)
    {
        $data = $request->except("_token");
        if(empty($data['email'])){
            echo "邮箱不能为空,正在为您跳转注册页面.........";
            header("refresh:5,url=/admin/reg");exit;
        }
        if(empty($data['password'])){
            echo "密码不能为空,正在为您跳转注册页面.........";
            header("refresh:5,url=/admin/reg");exit;
        }
        if(empty($data['status'])){
            echo "未同意协议,正在为您跳转注册页面.........";
            header("refresh:5,url=/admin/reg");exit;
        }
        if($data['password']!=$data['password1']){
            echo "密码与确认密码不一致,正在为您跳转注册页面.........";
            header("refresh:5,url=/admin/reg");exit;
        }
        unset($data['password1']);
        $data['password']=md5($data['password']);
        $res = AdminModel::create($data);;
        if($res){
            session(['admin'=>$data]);
            return redirect("/admin");
        }else{
            return redirect("/admin/reg");
        }
    }
}
