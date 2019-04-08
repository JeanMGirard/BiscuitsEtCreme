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
<div class="row">
    <div class="col fill-bg" style="z-index:-10;">
        <div class="row parallax" 
             style="background-image: url({{ URL::asset('img/backgrounds/ice-cream-bg-600.png') }}); 
                background-position:50% -10%; position:fixed; top:0; background-size:103% 150%; ">
        </div>
        <div class="row parallax-effect effect-white"></div>
        <div id="home-content-1" class="row justify-content-center">
            <h2 id="home1-title">{{ __('home_intro_1') }}</h2>
        </div>
    </div>
</div>


<!-- NEW ROW -->
<div class="row content-box" style="height:100vh;background:white;">

</div> 

<!-- NEW PARRALLAX -->
<div class="row" style="height:500px;">
    <div class="col fill-bg"  style="z-index:-9;">
        <div class="row parallax" 
             style="background-image: url({{ URL::asset('img/backgrounds/bouchees-bg-600.png') }});">
        </div>
        <div class="row parallax-effect effect-white"></div>
    </div>
</div>

<!-- NEW ROW -->
<div class="row content-box" style="min-height:80vh;background:white;">
    <div class="col justify-content-center">
        <div class="row">
            <div class="col-6">
                <div id="grid-biscuits">
                    <table>
                        <tr>
                            <td></td><td></td><td></td><td></td><td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td></td>
                        </tr>
                        <tr>
                        <td></td><td></td><td></td><td></td><td></td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="col-6">
                <h2>Nos Pates</h2>
            </div>
        </div>
        
    </div>
</div> 

<!-- NEW PARRALLAX -->
<div class="row" style="height:500px;">
    <div class="col fill-bg"  style="z-index:-9;">
        <div class="row parallax" 
             style="background-image: url({{ URL::asset('img/backgrounds/biscuits-bg-600.png') }});">
        </div>
        <div class="row parallax-effect effect-white"></div>
    </div>
</div>


<!-- NEW ROW -->
<div class="row content-box" style="min-height:80vh;background:white;">
    <div class="col justify-content-center">
    </div>
</div> 


<!-- NEW PARRALLAX -->
<div class="row" style="height:200px;">
    <div class="col fill-bg"  style="z-index:-9;">
        <div class="row parallax" 
             style="background-image: url({{ URL::asset('img/backgrounds/biscuits-bg-600.png') }});">
        </div>
        <div class="row parallax-effect effect-white"></div>
    </div>
</div>
@stop
