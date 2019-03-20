<div id="footer" class="row">
    <div class="col-md-4">
        <div class="row justify-content-right">
        </div>
    </div>
    <div class="col-md-4">
        <div class="row justify-content-center">
            <h5>Heures d'ouverture</h5>
        </div>
        <div class="row justify-content-center">
            @component('components.hours')
                <strong>Unable to load table</strong>
            @endcomponent
        </div>
    </div>
    <div class="col-md-4">
        <div class="row justify-content-left">
            <div id="social-icons">
                <h3>FOLLOW US</h3>
                @component('components.social', ["no-color" => true])
                    <strong>Unable to load social icons</strong>
                @endcomponent
            </div>
            <br />
        </div>
        <br/>
        <div class="row justify-content-left">
            <form>
                <h3>NEWSLETTER</h3>
                <p>Give us your email, and we shall send regular updates for new stuff and events.</p>
                <input type="email"/><br/>
                <input type="submit" value="SUBSCRIBE"/>
            </form>
        </div>
    </div>

</div>