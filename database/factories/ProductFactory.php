<?php

use Faker\Generator as Faker;
use App\ProductStatus;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->text($maxNbChars = 40),
        'status' => ProductStatus::random(),
        'description' => $faker->text($maxNbChars = 200),
       // 'category_id' 
    ];
});
$factory->state(App\Product::class, 'active', [
    'status' => ProductStatus::active,
]);
$factory->state(App\Product::class, 'inactive', [
    'status' => ProductStatus::inactive,
]);
