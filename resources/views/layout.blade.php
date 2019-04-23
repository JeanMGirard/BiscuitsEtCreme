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

        <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
        <link rel="stylesheet" href="{{ URL::asset('css/vendor.css') }}">
        <link rel="stylesheet" href="{{ URL::asset('css/app.css') }}">
        @yield('css')
        @component('components.analytics.facebook-pixel')
            Unable to load Pixel component
        @endcomponent
    </head>
    <body>
      <!--[if lte IE 9]>
          <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
      <![endif]-->

        @component('components.header')
            <strong>Unable to load header</strong>
        @endcomponent

        <div id="content" class="container">
            @yield('content')

            @component('components.footer', ['no-color' => true])
                <strong>Unable to load footer</strong>
            @endcomponent
        </div>

        

        <!-- JS here -->
        <script src="{{ URL::asset('js/app.js') }}"></script>
        @yield('js')
    </body>
</html>
