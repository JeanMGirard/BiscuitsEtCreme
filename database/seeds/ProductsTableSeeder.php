<?php

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Category;
use App\Product;



class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       /* DB::table('categories')->insert([
            'name' => Str::random(10),
        ]);*/
        factory(App\Category::class, 20)->create()->each(function ($ctg) {
            $ctg->save();
        });
        factory(App\Product::class, 100)->create()->each(function ($product) {
            $product->save();
        });
    }
}
