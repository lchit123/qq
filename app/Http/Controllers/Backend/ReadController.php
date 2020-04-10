<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ReadModel;
use App\Models\AuthorModel;
use App\Models\CategoryModel;
use App\Models\LabelModel;
use App\Tools\Common;
class ReadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $readInfo = ReadModel::join("author","read.author_id","=","author.author_id")
            ->join("category","read.cate_id","=","category.cate_id")->get();

        foreach ($readInfo as $key => $value) {
            $labelInfo = LabelModel::whereIn("label_id",explode(",",$value['label_id']))->get();
            $label_name="";
            foreach ($labelInfo as $k => $v) {
                $label_name .= $v['label_name'].",";
                $readInfo[$key]['label_name']=rtrim($label_name,",");
            }
        }
        return view("/backend/read/index",['readInfo'=>$readInfo]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //获取分类数据
        $cateInfo = CategoryModel::get();
        $cateInfo = $this->getTree($cateInfo);
        //获取作者数据
        $authorInfo = AuthorModel::get();
        //获取标签数据
        $labelInfo = LabelModel::get();
        return view("/backend/read/create",[
            'cateInfo'=>$cateInfo,
            'authorInfo'=>$authorInfo,
            "labelInfo"=>$labelInfo
        ]);
    }
    public function getTree($cateInfo,$parend_id=0,$level=0)
    {

        static $list = [];
        foreach ($cateInfo as $key => $value) {
            if( $value['parend_id'] == $parend_id )
            {
                $value['level'] = $level;
                $list[]=$value;
                unset($cateInfo[$key]);
                $this->getTree( $cateInfo, $value['cate_id'],$level+1);
            }
        }
        return $list;
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
        if(!empty($data['label_id'])){
            $data['label_id']=implode($data['label_id'],",");
        }
        if ($request->hasFile('read_img')) {
            $data['read_img'] = $this->upload("read_img","/images/read");
        }
        if ($request->hasFile('home_img')) {
            $data['home_img'] = $this->upload("home_img","/images/read");
        }
        $res = ReadModel::create($data);
        if($res){
            return redirect("/read/index");
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
        //获取分类数据
        $cateInfo = CategoryModel::get();
        $cateInfo = $this->getTree($cateInfo);
        //获取作者数据
        $authorInfo = AuthorModel::get();
        //获取标签数据
        $labelInfo = LabelModel::get();
        $readInfo = ReadModel::where(["read_id"=>$id])->first();
        $readInfo['label_id']=explode(",",$readInfo['label_id']);
        return view("/backend/read/edit",[
            'cateInfo'=>$cateInfo,
            'authorInfo'=>$authorInfo,
            "labelInfo"=>$labelInfo,
            "readInfo"=>$readInfo
        ]);
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
        if(!empty($data['label_id'])){
            $data['label_id']=implode($data['label_id'],",");
        }
        if ($request->hasFile('read_img')) {
            $data['read_img'] = $this->upload("read_img","/images/read");
        }
        if ($request->hasFile('home_img')) {
            $data['home_img'] = $this->upload("home_img","/images/read");
        }
        $res = ReadModel::where(["read_id"=>$id])->update($data);
        if($res){
            return redirect("/read/index");
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
        //
    }
    //唯一性验证
    public function readName(Request $request)
    {
        $read_id=$request->read_id;
        $read_name=$request->read_name;
        if(empty($read_id)){
            $where=['read_name'=>$read_name];
        }else{
            $where=[['read_name',"=",$read_name],["read_id","<>",$read_id]];
        }
        $count = ReadModel::where($where)->count();
        if($count>=1){
            return 1;
        }else{
            return 0;
        }
    }
}
