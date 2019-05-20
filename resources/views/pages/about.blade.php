@extends('../layout')
@section('title', 'homepage')

@section('css')
<!-- Add the slick-theme.css if you want default styling -->
<link rel="stylesheet" href="{{ URL::asset('css/pages/about.css') }}">

@stop

@section('js')
<script src="{{ URL::asset('js/pages/about.js') }}"></script>
@stop

@section('content')
<div class="row" id="about-r1">
  <div class="col">
    <div class="row justify-content-center" style="padding-top: 80px;">
      <div class="col-10">
        <h2>Mère et fille s’unissent pour créer Biscuits & Crème</h2>
        <p>
          Au goût du jour et situé dans le secteur de Saint-Janvier,
          elles arrivent avec plusieurs nouveaux produits apprêtés de façons créatives et ingénieuses, mais toujours délicieuses.
        </p>
        <h4><strong>C'est la destination à ne pas manquer cet été!</strong></h4>
      </div>
    </div>
  </div>
</div>

<div id="about-banner-1" class="row img-parallax" style="height: 220px; background-image:url({{ URL::asset('img/backgrounds/about-banner.jpg') }});" data-image="{{ URL::asset('img/backgrounds/about-banner.jpg') }}" data-cover-ratio="0.3">
</div>

@component('pages.about.row_2')
<strong>Unable to load selected content</strong>
@endcomponent

@component('pages.about.row_3')
<strong>Unable to load selected content</strong>
@endcomponent

@stop