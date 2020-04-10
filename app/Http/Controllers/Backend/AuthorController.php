<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AuthorModel;
use App\Models\UsersModel;
class AuthorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $authorInfo = AuthorModel::get();
        return view("/backend/author/index",[
            "authorInfo"=>$authorInfo
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("/backend/author/create");
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
        if(empty($data['author_nickname'])){
            dd("作者名称不能为空");
        }
        if ($request->hasFile('author_img')) {
            $data['author_img'] = $this->upload("author_img","/images/author");
        }
        $res = AuthorModel::create($data);
        if($res){
            return redirect("/author/index");
        }
    }
    //图片上传
    public function upload($fileName,$nameFile){
        if (request()->file($fileName)->isValid()) {
            $photo = request()->file($fileName);
            $code = rand(111111,999999);
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
        return view("/backend/author/show");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $info = AuthorModel::where(["author_id"=>$id])->first();
        return view("/backend/author/edit",['info'=>$info]);
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
        if(empty($data['author_nickname'])){
            dd("作者名称不能为空");
        }
        if ($request->hasFile('author_img')) {
            $data['author_img'] = $this->upload("author_img","/images/author");
        }
        $res = AuthorModel::where(["author_id"=>$id])->update($data);
        if($res){
            return redirect("/author/index");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = AuthorModel::destroy($id);
        if($res){
            return redirect("/author/index");
        }
    }
    //唯一性验证
    public function authorName(Request $request)
    {
        $author_id=$request->author_id;
        $author_nickname=$request->author_nickname;
        if(empty($cate_id)){
            $where=['author_nickname'=>$author_nickname];
        }else{
            $where=[['author_nickname',"=",$author_nickname],["author_id","<>",$author_id]];
        }
        $count = AuthorModel::where($where)->count();
        if($count>=1){
            return 1;
        }else{
            return 0;
        }
    }
    //唯一性验证
    public function status(Request $request)
    {
        $author_name=$request->author_name;

        $authorInfo = AuthorModel::where(['author_name'=>$author_name])->update(['status'=>1]);
        $usersInfo = UsersModel::where(['username'=>$author_name])->update(['status'=>1]);
        if($authorInfo && $usersInfo){
            return 1;
        }else{
            AuthorModel::where(['author_name'=>$author_name])->update(['status'=>0]);
            UsersModel::where(['username'=>$author_name])->update(['status'=>0]);
            return 2;
        }
    }
}
