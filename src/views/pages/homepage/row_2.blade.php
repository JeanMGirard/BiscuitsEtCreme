
<link href="https://fonts.googleapis.com/css?family=Alfa+Slab+One|Anton|Montserrat|Fredericka+the+Great&display=swap" rel="stylesheet"/>

<div id="row-2" class="row content-box" style="text-align: center;">
    <div id="imgrd-1-1" class="col-sm-12 col-md-10 container">

        <div class="mask"></div>

        <div id="img-1-1-1" class="textbox">
            <img src=" {{ URL::asset('img/home/grid-1-1.1.jpg') }}" alt="Snow" />
            <h3>Garnitures</h3>
            <p>Découvrez nos saveurs!</p>
        </div>

        <div id="img-1-1-2"  class="textbox">
            <img src="{{ URL::asset('img/home/grid-1-1.2.jpg') }}" alt="Snow" />
            <h3>Pates a biscuits</h3>
            <p>La saveur est au rendez-vous!!</p>
        </div>

        <div id="img-1-1-3" class="textbox">
            <img src="{{ URL::asset('img/home/grid-1-1.3.jpg') }}" alt="Snow" />
            <h3>Promotions</h3>
            <p>La saveur est au rendez-vous!</p>
        </div>

    </div>

    <div id="imgrd-1-2" class="col-sm-12 col-md-10 container">
        <img src="{{ URL::asset('img/home/grid-1-2.1.jpg') }}" alt="Snow" style="width:100%;" />
        <div class="mask"></div>
        <div class="textbox">
            <h3>La saveur est au rendez-vous!</h3>
            <p>La saveur est au rendez-vous! La saveur est au rendez-vous! La saveur est au rendez-vous!</p>
            <a class="button-style" href="{{ route(__('rte_products')) }}">Nos produits</a>
        </div>
    </div>

    <div id="imgrd-1-3" class="col-sm-12 col-md-10 container">
        <img src="{{ URL::asset('img/home/google-map.jpg') }}" alt="google map" style="width:100%;" />
        <div id="find-us-mask" class="mask"></div>
        <div class="textbox">
            <a id="find-us-link" class="button-style" href="https://goo.gl/maps/ezBjXdjLmcSuYs5f7" target="_blank">Nous trouver</a>
        </div>
    </div>
</div>

<style>
    #imgrd-1-1 {
        padding: 0;
        margin-top: 30px;
        margin-bottom: 30px;
        color: whitesmoke;
        height: 280px;
    }

    #imgrd-1-1 .textbox {
        height: 100%;
        width: 30%;
        position: absolute;
        top: 10%;
        cursor: pointer;
        text-align: center;
        opacity: 0.9;
        overflow: hidden;
    }
    #img-1-1-1{ left: 0; }
    #img-1-1-2{ left: 35%; }
    #img-1-1-3{ left: 70%; }

    #imgrd-1-1 div.textbox:hover {
        opacity: 1;
    }

    #imgrd-1-1 .textbox img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        cursor: pointer;
        border: 1px solid lightgray;
        border-radius: 5px;
    }


    #imgrd-1-1 h3 {
        position: relative;
        display: inline-block;
        z-index: 100;

        margin-top: 20px;
        font-family: 'Fredericka the Great', cursive;
        font-size: 30px;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);


    }

    #imgrd-1-1 p {
        position: relative;
        display: inline-block;
        z-index: 100;

        padding-top: 40px;
        font-family: 'Anton', sans-serif;
        font-size: 26px;
        width: 80%;
        margin-left: 10%;

    }

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

        color: white;
        font-family: 'Montserrat', cursive;
        font-weight: bold;
        font-size: 20px;
        line-height: 100%;
        text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
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

    #imgrd-1-3 {
        height: 240px;
        padding: 0;
        margin-top: 90px;
        margin-bottom: 60px;
    }

    #imgrd-1-3 img {
        width: 100%;
        height: 100%;
        border: 2px solid lightgray;
    }

    #imgrd-1-3 .textbox {
        position: absolute;
        top: 20%;
        left: 0;
        width: 100%;
    }

    /* #imgrd-1-3 .mask {
        background: black;
        opacity: 0.1;
        width: 100%;
        height: 50px;

    }

    #find-us-mask:hover {
        opacity: 1;
    }*/

    #imgrd-1-3 a.button-style {
        display: block;
        padding: 2px 3px 6px 6px;

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


    @media only screen and (max-width: 850px) {
        #imgrd-1-1 {     height:    200px;   }
        #imgrd-1-1 h3 {  font-size: 24px;    }
        #imgrd-1-1 p {   font-size: 20px;    }
        #imgrd-1-2 {     width:     100%;    }
    }
    @media only screen and (max-width: 769px) {
        /* forced by col-sm-12.. */
        #imgrd-1-1{
            margin: 0;
            padding: 0;
        }
        #imgrd-1-1 div.textbox{top: 3px;}
        #imgrd-1-1 div.textbox{
            width: 33%;
            border: 1px solid black;
        }
        #img-1-1-1{ left: 0; }
        #img-1-1-2{ left: 33.5%; }
        #img-1-1-3{ left: 67%; }
        #imgrd-1-2{margin-top: 4px;}
        #imgrd-1-3{
            height: 300px;
            margin-top: 20px;
            margin-bottom: 20px;
        }
    }
    @media only screen and (max-width: 600px) {
        #imgrd-1-1{ height: 600px;}
        #imgrd-1-1 div.textbox{
            position: relative;
            width: 100%;
            height:31%;
            margin-bottom: 3px;
            left: 0;
        }
        #img-1-1-3{ left: 0; }
        #imgrd-1-1 div.textbox img{height: 200px; }
        #imgrd-1-1 h3{ font-size:34px;}
        #imgrd-1-1 p{ margin-left: 0;  }
        #imgrd-1-3 a.button-style {
            width: 60%;
            margin-left: 20%;
        }
    }
    @media only screen and (max-width: 400px) {
        #imgrd-1-3 a.button-style {
            width: 80%;
            margin-left: 10%;
        }
    }

</style>