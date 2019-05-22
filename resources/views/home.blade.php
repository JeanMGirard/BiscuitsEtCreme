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
@component('pages.homepage.row_1')
<strong>Unable to load selector-content</strong>
@endcomponent

<!-- NEW ROW -->
@component('pages.homepage.row_2')
<strong>Unable to load selector-content</strong>
@endcomponent


<!-- NEW PARRALLAX -->
@component('pages.homepage.row_3')
<strong>Unable to load selector-content</strong>
@endcomponent

@stop