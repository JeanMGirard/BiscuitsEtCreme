<!DOCTYPE html>
<html class="no-js" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>B&C | @yield('title')</title>

      <link rel="shortcut icon" type="image/x-icon" href="{{ URL::asset('favicon.png') }}">
      <!--link rel="manifest" href="{{ URL::asset('site.webmanifest') }}"-->

      <link rel="stylesheet" href="{{ URL::asset('vendor/css/bootstrap.min.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/owl.carousel.min.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/animate.min.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/magnific-popup.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/meanmenu.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/flaticon.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/fontawesome-all.min.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/slick.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/dripicons.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/themify-icons.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/default.css') }}">
      <!--link rel="stylesheet" href="{{ URL::asset('vendor/css/style.css') }}"-->
      <link rel="stylesheet" href="{{ URL::asset('css/style.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
      <link rel="stylesheet" href="{{ URL::asset('vendor/css/responsive.css') }}">
    </head>
    <body>
      <!--[if lte IE 9]>
          <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
      <![endif]-->

        @component('components.header')
            <strong>Whoops!</strong> Something went wrong!
        @endcomponent

        @yield('content')

        @component('components.footer')
            <strong>Whoops!</strong> Something went wrong!
        @endcomponent

        <!-- JS here -->
        <script src="{{ URL::asset('vendor/js/vendor/modernizr-3.5.0.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/vendor/jquery-1.12.4.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/waypoints.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/waypoints.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/jquery.counterup.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/jquery.countdown.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/bootstrap.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/owl.carousel.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/isotope.pkgd.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/jquery.meanmenu.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/slick.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/ajax-form.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/wow.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/jquery.scrollUp.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/imagesloaded.pkgd.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/jquery.magnific-popup.min.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/plugins.js') }}"></script>
        <script src="{{ URL::asset('vendor/js/main.js') }}"></script>
    </body>
</html>
