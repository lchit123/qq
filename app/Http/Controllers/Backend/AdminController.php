<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AdminModel;
class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $info = AdminModel::get();
        return view("/backend/admin/index",['info'=>$info]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        return view("/backend/admin/create");
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->except("_token");
        if(empty($data['admin_name'])){
            echo "管理员名称不能为空,正在为你跳转......";
            header("refresh:5,url=/admin/create");exit;
        }
        if(empty($data['admin_email'])){
            echo "管理员邮箱不能为空,正在为你跳转......";
            header("refresh:5,url=/admin/create");exit;
        }
        if(empty($data['admin_tel'])){
            echo "管理员手机号不能为空,正在为你跳转......";
            header("refresh:5,url=/admin/create");exit;
        }
        if(empty($data['admin_password'])){
            echo "管理员密码不能为空,正在为你跳转......";
            header("refresh:5,url=/admin/create");exit;
        }
        if ($request->hasFile('admin_img')) {
            $data['admin_img'] = $this->upload("admin_img","/images/admin");
        }
        $data['admin_password']=md5($data['admin_password']);
        $res = AdminModel::create($data);
        if($res){
            return redirect("/admin/index");
        }
    }
    //图片上传
    public function upload($fileName,$nameFile){
        if (request()->file($fileName)->isValid()) {
            $photo = request()->file($fileName);
            $code = rand(10000000,99999999);
            $img = $code.".jpg";
            $store_result = $photo->storeAs($nameFile,$img);
        }
        return $store_result;
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view("backend.admin.create");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $info =AdminModel::where(['admin_id'=>$id])->first();
        return view("/backend/admin/edit",['info'=>$info]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->except("_token");
        if(empty($data['admin_name'])){
            echo "管理员名称不能为空,正在为你跳转......";
            header("refresh:5,url=/admin/edit");exit;
        }
        if(empty($data['admin_email'])){
            echo "管理员邮箱不能为空,正在为你跳转......";
            header("refresh:5,url=/admin/edit");exit;
        }
        if(empty($data['admin_tel'])){
            echo "管理员手机号不能为空,正在为你跳转......";
            header("refresh:5,url=/admin/edit");exit;
        }
        if ($request->hasFile('admin_img')) {
            $data['admin_img'] = $this->upload("admin_img","/images/admin");
        }
        $res = AdminModel::where(['admin_id'=>$id])->update($data);
        if($res){
            return redirect("/admin/index");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

}
