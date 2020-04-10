<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LinkModel;

class LinkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //获取链接全部数据
        $linkInfo = LinkModel::get();
        return view("/backend/link/index",['linkInfo'=>$linkInfo]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("/backend/link/create");
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
        if(empty($data['link_name']) || empty($data['link_url'])){
            dd("不能为空");
        }
        $res = LinkModel::create($data);
        if($res){
            return redirect("/link/index");
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return view("/backend/link/show");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //根据id查询一条数据
        $info=LinkModel::where(['link_id'=>$id])->first();
        return view("/backend/link/edit",['info'=>$info]);
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
        if(empty($data['link_name']) || empty($data['link_url'])){
            dd("不能为空");
        }
        $res = LinkModel::where(['link_id'=>$id])->update($data);
        if($res){
            return redirect("/link/index");
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
        $res = LinkModel::destroy($id);
        if($res){
            return redirect("/link/index");
        }
    }
    //唯一性验证
    public function linkName(Request $request)
    {
        $link_id=$request->link_id;
        $link_name=$request->link_name;
        if(empty($link_id)){
            $where=['link_name'=>$link_name];
        }else{
            $where=[['link_name',"=",$link_name],["link_id","<>",$link_id]];
        }
        $count = LinkModel::where($where)->count();
        if($count>=1){
            return 1;
        }else{
            return 0;
        }
    }
}
