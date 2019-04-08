<div id="footer" class="row">
    <div class="col-md-4">
        <div class="row justify-content-center title-row">
            <div>
                <h5>Notre addresse</h5>
            </div>
        </div>
        <div class="row justify-content-center">
            <div>
                <p>{{ __('addr1') }}<br/>{{ __('addr2') }}</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <h5>Heures d'ouverture</h5>
        </div>
        <div class="row justify-content-center">
            <div>
                @component('components.hours')
                    <strong>Unable to load table</strong>
                @endcomponent
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <div class="row justify-content-center">
            <h5 style="padding-right: 8vw; margin-top: 10px;">Autre</h5>
        </div>
        <div class="row justify-content-left" style="padding-left:3vw;">
            <ul style="list-style-type:none;padding:0px;line-height: 1.5;text-align: center;">
                <li><a href="#">Organiser un evenements</a></li>
                <li><a href="#">Cartes cadeau & Coupons</a></li>
                <li><a href="#">Vous avez une suggestion?</a></li>
                <li><a href="#">Passer une commande</a></li>
                <li><a href="#">Postuler pour un emplois</a></li>
                <li><a href="#">Nos ingredients (allergies)</a></li>
            </ul>
        </div>
    </div>
    <div class="col-md-4">
        <div class="row justify-content-start">
            <div id="social-icons" style="margin-top: 10px;">
                <h3>FOLLOW US</h3>
                @component('components.social', ["no-color" => true])
                    <strong>Unable to load social icons</strong>
                @endcomponent
            </div>
            <br />
        </div>
        <br/>
        <div class="row justify-content-start">
            <form id="newsletter">
                <h3>NEWSLETTER</h3>
                <p>Give us your email, and we shall send regular updates for new stuff and events.</p>
                <input type="email" placeholder="Email" required="true"/><br/>
                <input type="submit" value="Envoyer"/>
            </form>
        </div>
    </div>

</div>