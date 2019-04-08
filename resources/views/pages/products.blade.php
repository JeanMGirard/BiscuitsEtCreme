@extends('../layout')
@section('title', 'homepage')

@section('css')
<link rel="stylesheet" href="{{ URL::asset('css/pages/products.css') }}">
@stop
@section('js')
<script src="{{ URL::asset('js/pages/products.js') }}"></script>
@stop

@section('content')

<style>
     body, html { overflow-y: hidden; height: 100vh;}
</style>

<div class="row" style="max-height:100vh; height:95vh; min-height:95vh;">
     <div id="selector-1" class="col-md fill-bg" 
         style="background-image: url({{ URL::asset('img/backgrounds/biscuits-bg-600.png') }});">
         <div class="info-hover">
               <div class="container info-hover-inact " style="text-align:center;">
                    <h4 class="prod-ctg-ttl">{{ __('prod_cookie_dough') }}</h4>
               </div>
               <div class="container info-hover-act">
                    <h4 class="prod-ctg-ttl">{{ __('prod_cookie_dough') }}</h4>
               </div>
          </div>
    </div>
    
    <div id="selector-2" class="col-md fill-bg" 
         style="background-image: url({{ URL::asset('img/backgrounds/ice-cream-bg-600.png') }});">
         <div class="info-hover">
               <div class="container info-hover-inact">
                    <h4 class="prod-ctg-ttl">{{ __('prod_ice_cream') }}</h4>
               </div>
               <div class="container info-hover-act">
                    <h4 class="prod-ctg-ttl">{{ __('prod_ice_cream') }}</h4>
               </div>
          </div>
    </div>

    <div id="selector-3" class="col-md fill-bg" 
         style="background-image: url({{ URL::asset('img/backgrounds/tarte-bg-600.png') }});">
         <div class="info-hover">
               <div class="container info-hover-inact">
                    <h4 class="prod-ctg-ttl">{{ __('prod_cakes_and_pies') }}</h4>
               </div>
               <div class="container info-hover-act">
                    <h4 class="prod-ctg-ttl">{{ __('prod_cakes_and_pies') }}</h4>
               </div>
          </div>
    </div>

    <div id="selected-content" class="container">
          <div id="unselect-button">X</div>
          <div id="selector-1-content" class="selector-content col-10 justify-content-center">
               @component('pages.product-pages.cookiedough')
                    <strong>Unable to load selector-content</strong>
               @endcomponent
          </div>
          <div id="selector-2-content" class="selector-content col-10 justify-content-center">
               @component('pages.product-pages.icecream')
                    <strong>Unable to load selector-content</strong>
               @endcomponent
          </div>
          <div id="selector-3-content" class="selector-content col-10 justify-content-center">
               @component('pages.product-pages.cakes')
                    <strong>Unable to load selector-content</strong>
               @endcomponent
          </div>
    </div>
</div>
@stop
