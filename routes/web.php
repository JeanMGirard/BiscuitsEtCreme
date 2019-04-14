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
Route::get('/admin', 'AdminController@index');

Route::get('/about-us',         function () {   return view('pages.about');    })->name('rte_about');
Route::get('/a-propos',         function () {   return view('pages.about');    })->name('rte_about_fr');

Route::get('/products',         function () {   return view('pages.products');    })->name('rte_products');
Route::get('/produits',         function () {   return view('pages.products');    })->name('rte_products_fr');

Route::get('/shop',             function () {   return view('pages.shop');    })->name('rte_shop');
Route::get('/magasiner',        function () {   return view('pages.shop');    })->name('rte_shop_fr');

Route::get('/contact-us',       function () {   return view('pages.contact');    })->name('rte_contact');
Route::get('/contactez-nous',   function () {   return view('pages.contact');    })->name('rte_contact_fr');

Route::get('/our-menu', function () {
    return response()->file("app/public/menu/menu.en.pdf", [
        'Content-Type' => 'application/pdf'
    ]);
})->name('rte_menu');
Route::get('/menu',     function () {
    return response()->file(__DIR__ . "/../storage/app/public/menu/menu.fr.pdf", [
        'Content-Type' => 'application/pdf'
    ]);
})->name('rte_menu_fr');





Route::get('lang/{locale}', function ($locale) {
    session(['locale' => $locale]);
    return redirect()->back();
})->name('rte_language');

Route::get('/404',  function () { return view('404');   })->name('rte_404');
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


Route::get('/category/{id}', 'CategoryController@show');
