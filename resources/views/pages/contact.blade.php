@extends('../layout')
@section('title', 'homepage')

@section('css')
<link rel="stylesheet" href="{{ URL::asset('css/pages/contact.css') }}">
@stop

@section('content')
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link" href="#a">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#b">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#c">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">Disabled</a>
  </li>
</ul>
@stop
