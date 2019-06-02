@php ($gmap_url = "https://www.google.com/maps/place/Biscuits+%26+cr%C3%A8me/@45.6998248,-73.9265654,15.71z/data=!4m12!1m6!3m5!1s0x4cc927d6c9c9f7b3:0x95f24ef08d057b40!2sMILLE+%26+UN+CUPCAKE!8m2!3d45.6656844!4d-73.8673409!3m4!1s0x0:0x3aff58349a921729!8m2!3d45.7024667!4d-73.9244217")
@php ($gmap_height = 350)
@php ($gmap_width = 400)

<div id="row-1" class="row justify-content-center">
    <div id="coordonnes" class="col-md-6">
        <h3>Nos coordonnees</h3>
        <table>
            <tr>
                <td><h6><b>Telephone</b></h6></td>
                <td><p>{{ __('contact_phone') }}</p></td>
            </tr>
            <tr>
                <td><h6><b>Email</b></h6></td>
                <td><p><a href="mailto:{{ __('contact_email') }}">{{ __('contact_email') }}</a></p></td>
            </tr>
            <tr>
                <td><h6><b>En Personne</b></h6><br /></td>
                <td><p>{{ __('addr1') }}<br />{{ __('addr2') }}</p></td>
            </tr>
            <tr>
                <td><h6><b>Heures d'ouverture</b></h6><br /></td>
                <td style="padding-left:-5px;">
                    @component('components.hours')
                    <strong>Unable to load table</strong>
                    @endcomponent
                </td>
            </tr>
        </table>
    </div>
    <div id="map" class="col-lg-4 col-md-6">
        <iframe width="100%" height="{{ $gmap_height }}" 
            src="https://maps.google.com/maps?width=100%&amp;height={{ $gmap_height }}&amp;hl=en&amp;coord=45.6998248,-73.9265654&amp;q=13619%20Boulevard%20Cur%C3%A9-Labelle%2C%20Mirabel%2C%20QC%20J7J%201K3+(Biscuits%20%26%20Cr%C3%A8me)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" 
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                <a href="https://www.maps.ie/map-my-route/">Create a route on google maps</a>
        </iframe>
    </div>
</div>


<style>
    #row-1>div {
        padding-top: 70px;
    } 
    #row-1 #coordonnes{
        text-align: center;
        padding-right: 0 !important;
    }
    #row-1 #coordonnes h3{
        margin-bottom: 10px;
    }
    #row-1 #coordonnes table{
        display: inline-block;
    }
    #row-1 #coordonnes table td{
        padding-left: 20px;
        padding-right: 20px;
    }


    #row-1 #map{
        text-align: left;
        overflow:hidden;
    }
    #row-1 #map iframe{
        display: inline-block;
        border: 2px solid rgb(140, 140, 140);
    }


    @media only screen and (max-width: 940px) {
        #row-1 #coordonnes table td{
            padding-left: 10px;
            padding-right: 10px;
        }
    }
    @media only screen and (max-width: 400px) {
        #row-1 #coordonnes table td{
            padding-left: 2px;
            padding-right: 2px;
            font-size: 0.9em;
        }
    }

</style>




<?php
goto fin;
?>



<!--div id="contactUs-box" class="col-7">
        @component('components.social')
        <strong>Unable to load table</strong>
        @endcomponent


        <div id="contactUs" style="padding-left:20px;">
            <h3>Nos coordonnees</h3>
            <br />
            <table>
                <tr>
                    <td>
                        <h6><b>Telephone</b></h6>
                    </td>
                    <td>
                        <p>{{ __('contact_phone') }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6><b>Email</b></h6>
                    </td>
                    <td>
                        <p><a href="mailto:{{ __('contact_email') }}">{{ __('contact_email') }}</a></p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6><b>En Personne</b></h6><br />
                    </td>
                    <td>
                        <p>{{ __('addr1') }}<br />{{ __('addr2') }}</p>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h6><b>Heures d'ouverture</b></h6><br />
                    </td>
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
            <iframe width="100%" height="{{ $gmap_height }}" src="https://maps.google.com/maps?width=100%&amp;height={{ $gmap_height }}&amp;hl=en&amp;coord=45.6998248,-73.9265654&amp;q=13619%20Boulevard%20Cur%C3%A9-Labelle%2C%20Mirabel%2C%20QC%20J7J%201K3+(Biscuits%20%26%20Cr%C3%A8me)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                <a href="https://www.maps.ie/map-my-route/">Create a route on google maps</a>
            </iframe>
        </div>
        <br />
    </div>
</div>

<?php
fin:
?>