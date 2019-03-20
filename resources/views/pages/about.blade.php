@extends('../layout')
@section('title', 'homepage')

@section('css')
<link rel="stylesheet" href="{{ URL::asset('css/pages/contact.css') }}">
@stop

@section('content')
<div class="row justify-content-end"  style="background: white; padding-top: 60px;">
  <div class="col-5">
    <article>
      <br/>
      <h4>Une équipe attentionnée</h4>
      <p>Procedente igitur mox tempore cum adventicium nihil inveniretur, relicta ora maritima in Lycaoniam adnexam Isauriae se contulerunt ibique densis intersaepientes itinera praetenturis provincialium et viatorum opibus pascebantur.</p>
    </article>
  </div>
  <div class="col-2"></div>
</div>
<div class="row justify-content-end"  style="background: white; padding-top: 20px;">
  <div class="col-5">
    <article>
      <br/>
      <h4>Des produits uniques!</h4>
      <p>Procedente igitur mox tempore cum adventicium nihil inveniretur, relicta ora maritima in Lycaoniam adnexam Isauriae se contulerunt ibique densis intersaepientes itinera praetenturis provincialium et viatorum opibus pascebantur.</p>
    </article>
  </div>
  <div class="col-2"></div>
</div>
<div class="row justify-content-end"  style="background: white; padding-top: 20px; padding-bottom: 60px;">
  <div class="col-5">
    <article>
      <br/>
      <h4>Des prix abordables!</h4>
      <p>Procedente igitur mox tempore cum adventicium nihil inveniretur, relicta ora maritima in Lycaoniam adnexam Isauriae se contulerunt ibique densis intersaepientes itinera praetenturis provincialium et viatorum opibus pascebantur.</p>
    </article>
  </div>
  <div class="col-2"></div>
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
    <div class="col-2"></div>
    <div class="col-5">
      <article>
        <br/>
        <h4>Évènements, fêtes et bien plus!</h4>
        <p>Procedente igitur mox tempore cum adventicium nihil inveniretur, relicta ora maritima in Lycaoniam adnexam Isauriae se contulerunt ibique densis intersaepientes itinera praetenturis provincialium et viatorum opibus pascebantur.</p>
      </article>
    </div>
  </div>
</div>
@stop