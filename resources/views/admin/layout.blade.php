<!DOCTYPE html>
<html class="no-js" lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="description" content="">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>B&C Admin | @yield('title')</title>
      <link rel="shortcut icon" type="image/x-icon" href="{{ URL::asset('favicon.png') }}">
    </head>
    <body>
        <div id="content" class="container">
            @yield('content')
        </div>
    </body>
</html>
