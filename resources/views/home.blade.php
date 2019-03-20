@extends('layout')
@section('title', 'homepage')

@section('css')
<link rel="stylesheet" href="{{ URL::asset('css/pages/home.css') }}">
@stop

@section('content')
<div class="row">
    <div class="col fill-bg" 
        style="background-image: url({{ URL::asset('img/backgrounds/ice-cream-bg-600.png') }}); 
                background-position:50% 10%; ">
        <div class="row" style="height:100%; background:rgba(255,255,255, 0.5);"></div>
    </div>
</div>
<div class="row content-box" style="height:100vh;background:white;">

</div> 
<div class="row" style="height:500px;">
    <div class="col fill-bg" 
        style="background-image: url({{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}); 
                background-position:50% 50%; background-size: 200% 200%;">
        <div class="row" style="height:100%; background:rgba(255,255,255, 0.5);"></div>
    </div>
</div>
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
<div class="row" style="height:500px;">
    <div class="col fill-bg" 
        style="background-image: url({{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}); 
                background-position:50% 50%; background-size: 200% 200%;">
        <div class="row" style="height:100%; background:rgba(255,255,255, 0.5);"></div>
    </div>
</div>
<div class="row content-box" style="min-height:80vh;background:white;">
    <div class="col justify-content-center">
    </div>
</div> 
<div class="row" style="height:200px;">
    <div class="col fill-bg" 
        style="background-image: url({{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}); 
                background-position:50% 50%; background-size: 200% 200%;">
        <div class="row" style="height:100%; background:rgba(255,255,255, 0.5);"></div>
    </div>
</div>
@stop
