<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/',                 function () {   return view('home');    })->name('rte_home');

Route::get('/about-us',         function () {   return view('pages.about');    })->name('rte_about');
Route::get('/a-propos',         function () {   return view('pages.about');    })->name('rte_about_fr');

Route::get('/products',         function () {   return view('pages.products');    })->name('rte_products');
Route::get('/produits',         function () {   return view('pages.products');    })->name('rte_products_fr');

Route::get('/shop',             function () {   return view('pages.shop');    })->name('rte_shop');
Route::get('/magasiner',        function () {   return view('pages.shop');    })->name('rte_shop_fr');

Route::get('/customers',        function () {   return view('pages.shop');    })->name('rte_users');
Route::get('/clients',          function () {   return view('pages.shop');    })->name('rte_users_fr');

Route::get('/contact-us',       function () {   return view('pages.contact');    })->name('rte_contact');
Route::get('/contactez-nous',   function () {   return view('pages.contact');    })->name('rte_contact_fr');



Route::get('lang/{locale}', function ($locale) {
    session(['locale' => $locale]);
    return redirect()->back();
})->name('rte_language');

Route::get('/404',  function () { return view('404');   })->name('rte_404');
