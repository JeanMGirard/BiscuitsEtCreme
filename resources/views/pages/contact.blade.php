@php ($gmap_url = "https://www.google.com/maps/place/Biscuits+%26+cr%C3%A8me/@45.6998248,-73.9265654,15.71z/data=!4m12!1m6!3m5!1s0x4cc927d6c9c9f7b3:0x95f24ef08d057b40!2sMILLE+%26+UN+CUPCAKE!8m2!3d45.6656844!4d-73.8673409!3m4!1s0x0:0x3aff58349a921729!8m2!3d45.7024667!4d-73.9244217")
@php ($gmap_height = 350)
@php ($gmap_width = 400)

@extends('../layout')
@section('title', 'homepage')

@section('css')
<link rel="stylesheet" href="{{ URL::asset('css/pages/contact.css') }}">
@stop

@section('content')
<div class="row content-box justify-content-center" 
     style="min-height:100vh;background:white; padding-top:40px; box-sizing:content-box; height:fit-content;">
    <div class="col" style=" box-sizing:content-box;">

      <div class="row justify-content-center">
        <div id="contactUs-box" class="col-7">
          @component('components.social')
              <strong>Unable to load table</strong>
          @endcomponent


          <div id="contactUs" style="padding-left:20px;">
            <h3>Nos coordonnees</h3>
            <br/>
            <table>
              <tr>
                <td><h6><b>Telephone</b></h6></td>
                <td><p>xxx-xxx-xxxx</p></td>
              </tr>
              <tr>
                <td><h6><b>Email</b></h6></td>
                <td><p><a href="mailto:contact@biscuitsetcreme.ca">contact@biscuitsetcreme.ca</a></p></td>
              </tr>
              <tr>
                <td><h6><b>En Personne</b></h6><br/> </td>
                <td><p>13619 Boulevard Curé-Labelle<br/>Mirabel, QC J7J 1K3</p></td>
              </tr>
              <tr>
                <td><h6><b>Heures d'ouverture</b></h6><br/> </td>
                <td style="padding-left:-5px;">
                @component('components.hours')
                    <strong>Unable to load table</strong>
                @endcomponent
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="col-md-5">
            <div id="map" style="height:{{ $gmap_height }}px;width:{{ $gmap_width }}px;">
                <iframe width="100%" height="{{ $gmap_height }}" 
                    src="https://maps.google.com/maps?width=100%&amp;height={{ $gmap_height }}&amp;hl=en&amp;coord=45.6998248,-73.9265654&amp;q=13619%20Boulevard%20Cur%C3%A9-Labelle%2C%20Mirabel%2C%20QC%20J7J%201K3+(Biscuits%20%26%20Cr%C3%A8me)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" 
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                    <a href="https://www.maps.ie/map-my-route/">Create a route on google maps</a>
                </iframe>
            </div>
            <br />
        </div>
      </div>
      
      <div class="row justify-content-center">
        <div id="sendMessage" class="col-md-12 col-lg-11">
          <h2>Contactez-nous</h2>
          <p>Vous avez une suggestion ou un commentaire?</p>
          <form>
            <input type="text" placeholder="(optionel) Votre nom"/><br/>
            <input type="email" placeholder="(optionel) Votre email"/>
            <textarea rows="5" cols="60" name="description"></textarea><br>
            <input class="button" type="submit" value="Envoyer"/>
          </form>
        </div>
      </div>

    </div>
</div> 
@stop

@section('js')

@stop