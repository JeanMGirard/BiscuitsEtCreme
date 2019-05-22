

@extends('../layout')
@section('title', 'homepage')

@section('css')
<link rel="stylesheet" href="{{ URL::asset('css/pages/contact.css') }}">
@stop

@section('content')
<!--div class="row content-box justify-content-center" style="min-height:100vh;background:white; padding-top:40px; box-sizing:content-box; height:fit-content;">
  <div class="col" style=" box-sizing:content-box;">




  </div>
</div-->

@component('pages.contact-us.row_1')
<strong>Unable to load selected content</strong>
@endcomponent

@component('pages.contact-us.row_2')
<strong>Unable to load selected content</strong>
@endcomponent

@component('pages.contact-us.row_3')
<strong>Unable to load selected content</strong>
@endcomponent

@stop

@section('js')

@stop
