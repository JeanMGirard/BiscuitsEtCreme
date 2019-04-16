<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    /**
     * The model's default values for attributes.
     *
     * @var array
     */
    protected $attributes = [
        'delayed' => false,
    ];

   /* public static function all(){
        return App\Product::where('number', 'FR 900')->first();
    }*/
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