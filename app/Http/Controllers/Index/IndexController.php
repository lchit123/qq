<?php

namespace App\Http\Controllers\Index;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CategoryModel;
use App\Models\ReadModel;
use App\Models\LabelModel;
use Illuminate\Support\Facades\Redis;
class IndexController extends Controller
{
    //首页
    public function index()
    {   //获取登录用户名信息
        $users = session("users");
        //获取分类导航数据
        $cateInfo = CategoryModel::where(['parend_id'=>0,"nav_is_show"=>1])->limit(15)->get()->toArray();
        //首页轮播图
        $homeInfo = ReadModel::join("author","read.author_id","=","author.author_id")
            ->where(['is_show_home'=>1])->orderBy("search_volume","desc")->limit(6)->get();
        //精品推荐
        $jpInfo = ReadModel::join("author","read.author_id","=","author.author_id")
            ->where(['is_jingpin'=>1])->limit(12)->get();
        return view("/index/index",[
            'cateInfo'=>$cateInfo,
            'homeInfo'=>$homeInfo,
            'jpInfo'=>$jpInfo
        ]);

        return view("/index/index/index");
    }
    //详情页
    public function detail($id)
    {
        //分类导航栏数据
        $cateInfo = CategoryModel::where(['nav_is_show'=>1])->limit(15)->get();

        $info = ReadModel::join("author","read.author_id","=","author.author_id")
            ->join("category","read.cate_id","=","category.cate_id")
            ->where(['read_id'=>$id])
            ->select('read.*','category.cate_name','category.parend_id','author.author_nickname')
            ->first();
        $top= CategoryModel::where(["cate_id"=>$info['parend_id']])->first();
        $info['top']=$top['cate_name'];
        $info['top_id']=$top['cate_id'];
        $label_id = explode(",",$info['label_id']);
        $labelInfo = LabelModel::whereIn("label_id",$label_id)->get();
        $labelName="";
        foreach ($labelInfo as $key => $value) {
            $labelName .= $value['label_name']." 、";
        }
        $labelName = rtrim($labelName," 、");
        return view("/index/detail",[
            'info'=>$info,
            'labelName'=>$labelName,
            "cateInfo"=>$cateInfo
        ]);
    }
    //原书库
    public function library()
    {
        return view("/index/library");
    }
    //搜索页面
    public function search()
    {
        return view("/index/search");
    }
    //获取顶级分类
    public function toplevel($cateInfo){
        $arr=[];
        $cateInfo= CategoryModel::where("cate_id",$cateInfo['cate_id'])->first();
        $cateInfo1= CategoryModel::where("cate_id",$cateInfo['parend_id'])->first();
        $arr['level0']=$cateInfo1['cate_name'];
        $arr["level1"]=$cateInfo['cate_name'];
        return $arr;
    }
}
