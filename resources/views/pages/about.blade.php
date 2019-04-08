@extends('../layout')
@section('title', 'homepage')

@section('css')
<link rel="stylesheet" href="{{ URL::asset('css/pages/about.css') }}">
@stop

@section('content')
<div class="row" id="about-r1">
  <div class="col">
    <div class="row justify-content-center"  style="padding-top: 80px;">
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

<div class="row img-parallax" style="background:blue; height: 220px;" 
  data-image="{{ URL::asset('img/backgrounds/exterior-bg-400.png') }}"
  data-cover-ratio="0.3">
</div>

<div class="row" style="background: white;">
  <div class="col">
    <div class="row justify-content-center about-cbox"  style="padding-top: 60px;">
      <div class="col-3">
        <div class="row justify-content-end">
          <img src="{{ URL::asset('img/about/article-1.jpg') }}" 
              title="{{ __('about_p1t') }}" 
              alt="{{ __('about_p1_tags') }}">
        </div>
      </div>
      <div class="col-5">
        <article>
          <h4>{{ __('about_p1t') }}</h4>
          <p>{{ __('about_p1c') }}</p>
        </article>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row justify-content-center about-cbox"  style="padding-top: 20px;">
      <div class="col-3">
        <div class="row justify-content-end">
          <img src="{{ URL::asset('img/about/article-2.jpg') }}" 
              title="{{ __('about_p2t') }}" 
              alt="{{ __('about_p2_tags') }}">
        </div>
      </div>
      <div class="col-5">
        <article>
          <h4>{{ __('about_p2t') }}</h4>
          <p>{{ __('about_p2c') }}</p>
        </article>
      </div>
      <div class="col-2"></div>
    </div>
    <div class="row justify-content-center about-cbox"  style="padding-top: 20px; padding-bottom: 60px;">
      <div class="col-3">
        <div class="row justify-content-end">
          <img src="{{ URL::asset('img/about/article-3.jpg') }}" 
              title="{{ __('about_p3t') }}" 
              alt="{{ __('about_p3_tags') }}">
        </div>
      </div>
      <div class="col-5">
        <article>
          <h4>{{ __('about_p3t') }}</h4>
          <p>{{ __('about_p3c') }}</p>
          <br/><br/>
        </article>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</div>

<div class="row" style="padding: 20px 5px 20px 5px; border:1px solid gray;">
  <div class="col-12 justify-content-center">
    @component('components.socials.facebook-reviews')
      <strong>Unable to load reviews</strong>
    @endcomponent
  </div>
</div>

<div class="row">
  <div class="row justify-content-start"  style="background: white; padding-top: 20px; padding-bottom: 60px;">
    <div class="col-10">
      <article>
        <br/>
        <h4>{{ __('about_t1t') }}</h4>
        <p>{{ __('about_t1c') }}</p>
      </article>
    </div>
  </div>
</div>
@stop