@extends('layout')
@section('title', 'homepage')

@section('css')
<link rel="stylesheet" href="{{ URL::asset('css/pages/home.css') }}">
@stop
@section('js')
<script src="https://cdn.jsdelivr.net/parallax.js/1.4.2/parallax.min.js"></script>
<script src="{{ URL::asset('js/pages/home.js') }}"></script>
@stop

@section('content')
<!-- NEW PARRALLAX -->
<div id="row-1" class="row">
    <div class="col fill-bg" style="z-index:-10;">
        <div class="row parallax" style="background-image: url({{ URL::asset('img/backgrounds/ice-cream-bg-600.png') }}); 
                background-position:50% -10%; top:0; background-size:103% 150%; ">
        </div>
        <div class="row parallax-effect effect-white"></div>
        <div id="home-content-1" class="row justify-content-center">
            <h2 id="home1-title">{{ __('home_intro_1') }}</h2>
        </div>
    </div>
</div>


<!-- NEW ROW -->
@component('pages.homepage.row_2')
<strong>Unable to load selector-content</strong>
@endcomponent

<!-- NEW PARRALLAX -->
<div id="row-3" class="row">
    <div class="col fill-bg" style="z-index:-9;">
        <div class="row parallax" style="background-image: url({{ URL::asset('img/backgrounds/home-bg-2.png') }});">
        </div>
        <div class="row parallax-effect effect-white"></div>
    </div>
</div>

<!-- NEW ROW -->
<div id="row-4" class="row content-box">
    <div id="row-4-bg" class="col-md-4" style="background-image: url({{ URL::asset('img/home/yogourt-glace-1.jpg') }});">
    </div>
    <div class="col-md-6">
        <br />
        <h2>Des options santés!</h2>
        <p>Yogourt, creme glace sans gras, vege?</p>
        <p>Mettre une grille des fruits disponible?</p>
    </div>
</div>

<!-- NEW PARRALLAX -->
<div id="row-5" class="row">
    <div class="col fill-bg" style="z-index:-9;">
        <div class="row parallax" style="background-image: url({{ URL::asset('img/backgrounds/home-bg-3.png') }});">
        </div>
        <div class="row parallax-effect effect-white"></div>
    </div>
</div>


<!-- NEW ROW -->
<div id="row-6" class="row content-box">
    <div class="col justify-content-center">
    </div>
</div>


<!-- NEW PARRALLAX -->
<div id="row-7" class="row">
    <div class="col fill-bg" style="z-index:-9;">
        <div class="row parallax" style="background-image: url({{ URL::asset('img/backgrounds/home-bg-4.png') }});">
        </div>
        <div class="row parallax-effect effect-white"></div>
    </div>
</div>
@stop