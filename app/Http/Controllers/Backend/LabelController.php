<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\LabelModel;

class LabelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $labelInfo = LabelModel::get();
        return view("/backend/label/index",['labelInfo'=>$labelInfo]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view("/backend/label/create");
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
        //判断标签名称是否为空
        if(empty($data['label_name'])){
            dd("标签名称不能为空");
        }
        $count = LabelModel::where(["label_name"=>$data['label_name']])->count();
        //判断标签名称是否存在
        if($count>=1){
            dd("标签名称已存在");
        }
        $res = LabelModel::create($data);
        if($res){
            return redirect("/label/index");
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
        return view("/backend/label/show");
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //根据ID查询一条数据
        $labelInfo = LabelModel::where(["label_id"=>$id])->first();
        return view("/backend/label/edit",['labelInfo'=>$labelInfo]);
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
        //判断标签名称是否为空
        if(empty($data['label_name'])){
            dd("标签名称不能为空");
        }
        $res = LabelModel::where(['label_id'=>$id])->update($data);
        if($res){
            return redirect("/label/index");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illsuminate\Http\Response
     */
    public function destroy($id)
    {
        $res = LinkModel::destroy($id);
        if($res){
            return redirect("/link/index");
        }
    }
    //唯一性验证
    public function labelName(Request $request)
    {
        $label_id=$request->label_id;
        $label_name=$request->label_name;
        if(empty($label_id)){
            $where=['label_name'=>$label_name];
        }else{
            $where=[['label_name',"=",$label_name],["label_id","<>",$label_id]];
        }
        $count = LabelModel::where($where)->count();
        if($count>=1){
            return 1;
        }else{
            return 0;
        }
    }
}
