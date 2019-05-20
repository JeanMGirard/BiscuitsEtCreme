<link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Anton|Fredericka+the+Great&display=swap" rel="stylesheet">

<div id="imgrd-1-1" class="col-10 container">
    <img src="{{ URL::asset('img/home/grid-1-1.1.jpg') }}" alt="Snow" style="width:31%; " />
    <img src="{{ URL::asset('img/home/grid-1-1.2.jpg') }}" alt="Snow" style="width:31%; margin-left:3%; margin-right:3%;" />
    <img src="{{ URL::asset('img/home/grid-1-1.3.jpg') }}" alt="Snow" style="width:31%;" />

    <div class="mask"></div>

    <div class="textbox" style="left: 0;">
        <h3>Garnitures</h3>
        <p>Découvrez nos saveurs!</p>
    </div>

    <div class="textbox" style="left: 35%;">
        <h3>Pates a biscuits</h3>
        <p>La saveur est au rendez-vous!!</p>
    </div>

    <div class="textbox" style="left: 69%;">
        <h3>Promotions</h3>
        <p>La saveur est au rendez-vous!</p>
    </div>

</div>

<style>
    #imgrd-1-1 {
        padding: 0;
        margin-top: 40px;
        color: whitesmoke;

    }

    #imgrd-1-1 img {
        height: 300px;
        cursor: pointer;
    }

    #imgrd-1-1 .textbox {
        width: 31%;
        position: absolute;
        top: 10%;
        cursor: pointer;
    }

    #imgrd-1-1 h3 {
        font-family: 'Fredericka the Great', cursive;
        font-size: 30px;
    }

    #imgrd-1-1 p {
        padding-top: 40px;
        font-family: 'Anton', sans-serif;
        font-size: 26px;
        width: 80%;
        margin-left: 10%;

    }
</style>


<div id="imgrd-1-2" class="col-10 container">
    <img src="{{ URL::asset('img/home/grid-1-2.1.jpg') }}" alt="Snow" style="width:100%;" />
    <div class="mask"></div>
    <div class="textbox">
        <h3>La saveur est au rendez-vous!</h3>
        <p>La saveur est au rendez-vous! La saveur est au rendez-vous! La saveur est au rendez-vous!</p>
        <a class="button-style" href="{{ route(__('rte_products')) }}">Nos produits</a>
    </div>
</div>


<style>
    #imgrd-1-2 {
        display: inline-block;
        position: relative;
        width: 90%;
        height: 440px;
        min-height: 540px;
        margin-top: 30px;
        /*   background-size: 100% 100%;
        background-position: 50 50;*/
        text-align: left;
        border: 1px solid lightgray;
        padding: 0;
    }


    #imgrd-1-2>.mask {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-image: -webkit-radial-gradient(farthest-corner, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1%, rgba(255, 255, 255, 0.15) 68%, rgba(255, 255, 255, 0.35) 96%, rgba(255, 255, 255, 1) 100%);
        background-image: -moz-radial-gradient(farthest-corner, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1%, rgba(255, 255, 255, 0.15) 68%, rgba(255, 255, 255, 0.35) 96%, rgba(255, 255, 255, 1) 100%);
        background-image: radial-gradient(farthest-corner, rgba(255, 255, 255, 0.04) 0, rgba(255, 255, 255, 0.04) 1%, rgba(255, 255, 255, 0.15) 68%, rgba(255, 255, 255, 0.35) 96%, rgba(255, 255, 255, 1) 100%);
        background-position: 50% 50%;
        -webkit-background-origin: padding-box;
        background-origin: padding-box;
        -webkit-background-clip: border-box;
        background-clip: border-box;
        -webkit-background-size: auto auto;
        background-size: auto auto;
    }

    #imgrd-1-2>img {
        height: 100%;
        width: 100%;
    }

    #imgrd-1-2 .textbox {
        position: absolute;
        top: 40%;
        left: 10%;
        max-width: 260px;
        transform: translate(-10%, -40%);
    }

    #imgrd-1-2 h3 {
        font-family: 'Fredericka the Great', cursive;
        font-weight: bold;
        font-size: 40px;
        color: rgba(4, 0, 142, 1);
    }

    #imgrd-1-2 p {
        font-size: 20px;
        color: white;
        font-family: 'Alfa Slab One', cursive;
        line-height: 80%;
    }

    #imgrd-1-2 a.button-style {
        display: block;
        padding: 14px;
        background-color: white;
        width: 100%;
        color: rgba(4, 0, 142, 1);
        text-decoration: none;
        font-family: 'Alfa Slab One', cursive;
        font-size: 22px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
    }

    #imgrd-1-2 a:hover {}

    /*
    #imgrd-1-2>div {
        display: inline-block;
        width: 200px;
    }*/
</style>


<div id="imgrd-1-3" class="col-10 container">
    <img src="{{ URL::asset('img/home/google-map.jpg') }}" alt="google map" style="width:100%;" />
    <div class="mask"></div>
    <div class="textbox">
        <a class="button-style" href="https://goo.gl/maps/ezBjXdjLmcSuYs5f7" target="_blank">Nous trouver</a>
    </div>
</div>


<style>
    #imgrd-1-3 {
        padding: 0;
        margin-top: 90px;
        margin-bottom: 60px;
    }

    #imgrd-1-3 img {
        width: 100%;
        border: 2px solid lightgray;
    }

    #imgrd-1-3 .textbox {
        position: absolute;
        top: 20%;
        left: 0;
        width: 100%;
    }

    #imgrd-1-3 a.button-style {
        display: block;
        padding: 2px 3px 6x 6px;

        width: 30%;
        margin-left: 35%;

        background-color: white;
        color: rgba(4, 0, 142, 1);
        text-decoration: none;
        font-family: 'Alfa Slab One', cursive;
        font-size: 22px;
        -webkit-border-radius: 6px;
        border-radius: 6px;
        border: 3px solid darkblue;
    }
</style>