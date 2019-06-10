@extends('../layout')
@section('title', 'homepage')

@section('css')
<!-- Add the slick-theme.css if you want default styling -->
<link rel="stylesheet" href="{{ URL::asset('css/pages/about.css') }}">
<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
@stop

@section('js')
<script src="{{ URL::asset('js/pages/about.js') }}"></script>
@stop

@section('content')

@component('pages.about.row_1')
<strong>Unable to load selected content</strong>
@endcomponent

@component('pages.about.row_2')
<strong>Unable to load selected content</strong>
@endcomponent

@component('pages.about.row_3')
<strong>Unable to load selected content</strong>
@endcomponent

@stop