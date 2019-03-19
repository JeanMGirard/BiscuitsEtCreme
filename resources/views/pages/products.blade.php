@extends('../layout')
@section('title', 'homepage')

@section('css')
<link rel="stylesheet" href="{{ URL::asset('css/pages/products.css') }}">
@stop

@section('content')

<style>
     body, html { overflow-y: hidden; height: 100vh;}
</style>

<div class="row" style="max-height:100vh; height:95vh; min-height:95vh;">
     <div class="col-md fill-bg" 
         style="background-image: url({{ URL::asset('img/backgrounds/biscuits-bg-600.png') }});">
         <div class="info-hover">
               <div class="container info-hower-inact " style="text-align:center;">
                    <h4>{{ __('prod_cookie_dough') }}</h4>
               </div>
               <div class="container info-hower-act">
                    <h4>{{ __('prod_cookie_dough') }}</h4>
               </div>
          </div>
    </div>
    

    <div class="col-md fill-bg" 
         style="background-image: url({{ URL::asset('img/backgrounds/ice-cream-bg-600.png') }});">
         <div class="info-hover">
               <div class="container info-hower-inact">
                    <h4>{{ __('prod_ice_cream') }}</h4>
               </div>
               <div class="container info-hower-act">
                    <h4>{{ __('prod_ice_cream') }}</h4>
               </div>
          </div>
    </div>

    <div class="col-md fill-bg" 
         style="background-image: url({{ URL::asset('img/backgrounds/tarte-bg-600.png') }});">
         <div class="info-hover">
               <div class="container info-hower-inact">
                    <h4>{{ __('prod_cakes_and_pies') }}</h4>
               </div>
               <div class="container info-hower-act">
                    <h4>{{ __('prod_cakes_and_pies') }}</h4>
               </div>
          </div>
    </div>
    
  </div>
@stop
