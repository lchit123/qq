<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    public $table="category1";
    protected $primaryKey="cate_id";
    protected $fillable = ['cate_name',"status"];
    protected $dateFormat = false;
}

