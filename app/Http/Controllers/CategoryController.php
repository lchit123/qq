<?php

namespace App\Http\Controllers\Index;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CategoryModel;
use App\Models\ReadModel;

class CategoryController extends Controller
{
    //分类
    public function index($id){
        //分类导航栏数据
        $cateInfo = CategoryModel::where(['nav_is_show'=>1])->limit(15)->get();

        //根据是否展示和父类id查询子类
        $cateIdWhere=['is_show'=>1,"parend_id"=>$id];
        $cateId =CategoryModel::where($cateIdWhere)->get();
        //获取当前id的所有子类id
        $cate_id = $this->getCateId($id);
        //将字符串转换成数组
        $cate_id = explode(",",$cate_id);
        //根据所有子类id 是否展示轮播图 查询5条数据
        $readSlide = ReadModel::where(['is_show'=>1])->whereIn('cate_id',$cate_id)->limit(5)->get();

        $info= CategoryModel::where(['cate_id'=>$id])->first();
        return view("/index/cate",[
            'info'=>$info,
            'cateInfo'=>$cateInfo,
            "readSlide"=>$readSlide
        ]);
    }
    public function getCateId($id){
        $cate_id = '';
        $cateInfo = CategoryModel::where(['parend_id'=>$id])->get();
        foreach ($cateInfo as $key => $value) {
            $cate_id .= $value['cate_id'].",";
        }
        $cate_id=rtrim($cate_id,",");
        return $cate_id;
    }
}
