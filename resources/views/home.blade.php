@extends('layout')
@section('title', 'homepage')

@section('css')
<link rel="stylesheet" href="{{ URL::asset('css/pages/home.css') }}">
@stop

@section('content')
<div class="row fill-bg" 
     style="background-image: url({{ URL::asset('img/backgrounds/ice-cream-bg-600.png') }}); background-position:50% 10%; ">
    <div class="col" style="height:100%; background:rgba(255,255,255, 0.5);">

    </div>
</div>
@stop
