<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{

}
abstract class ProductStatus
{
    
    const active = "active";
    const inactive = "inactive";


    public static function all(){
        return array(ProductStatus::active, ProductStatus::inactive);
    }
    public static function random(){
        return array_rand (ProductStatus::all());
    }

}