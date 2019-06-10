<div id="row-1" class="row">
    <h2 id="row-1-intro">{{ __('home_intro_1') }}</h2>

    <div class="col fill-bg" style="z-index:-10;">
        <div class="row parallax" style="">
        </div>
        <div class="row parallax-effect effect-white"></div>
        <div class="scroll-down"></div>
    </div>
    <!--div id="home-content-1" class="col-12 justify-content-center">
        <h2 id="home1-title">{{ __('home_intro_1') }}</h2>
    </div-->
</div>

<style>
    #row-1{
        text-align: center;
    }
    #row-1-intro{
        position: absolute;
        display: inline-block;
        width: 100%;
        top: 300px;
        opacity: 0;
        z-index:100;
        font-family: 'Lobster', cursive;
        font-size: 60px;
        color: rgb(50,50,50);
        -webkit-transform: rotateZ(1.5deg);
        transform: rotateZ(1.5deg);
    }
    body.loaded #row-1-intro{
        top: 220px;
        opacity: 1;
        -webkit-transition: top 1s cubic-bezier(0.42, 0, 0.385, 0.995),
        opacity 1000ms cubic-bezier(0.42, 0, 0.385, 0.995);
        -moz-transition: top 1s cubic-bezier(0.42, 0, 0.385, 0.995),
        opacity 1000ms cubic-bezier(0.42, 0, 0.385, 0.995);
        -o-transition: top 1s cubic-bezier(0.42, 0, 0.385, 0.995),
        opacity 1000ms cubic-bezier(0.42, 0, 0.385, 0.995);
        transition: top 1s cubic-bezier(0.42, 0, 0.385, 0.995),
        opacity 1000ms cubic-bezier(0.42, 0, 0.385, 0.995);
    }
    #row-1 .parallax { 
        background-image: url({{ URL::asset('img/backgrounds/ice-cream-bg-600.png') }}); 
        background-position:50% -10%; top:0; 
        background-size:103% 150%; 
    }
    #row-1 .scroll-down {
        position: absolute;
        left: 50%;
        bottom: 50px;
        display: block;
        text-align: center;
        font-size: 20px;
        z-index: 100;
        text-decoration: none;
        text-shadow: 0;
        width: 60px;
        height: 60px;
        border-bottom: 4px solid black;
        border-right: 4px solid black;
        z-index: 9;
        left: 50%;
        cursor: pointer;
        -webkit-transform: translate(-50%, 0%) rotate(45deg);
        -moz-transform: translate(-50%, 0%) rotate(45deg);
        transform: translate(-50%, 0%) rotate(45deg);
        -webkit-animation: fade_move_down 4s ease-in-out infinite;
        -moz-animation:    fade_move_down 4s ease-in-out infinite;
        animation:         fade_move_down 4s ease-in-out infinite;
    }


    /*animated scroll arrow animation*/
    @-webkit-keyframes fade_move_down {
        0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
    }
    @-moz-keyframes fade_move_down {
        0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
    }
    @keyframes fade_move_down {
        0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
        50%  { opacity: 1;  }
        100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
    }

    @media only screen and (max-width: 850px) {
        body.loaded #row-1-intro{ transform: scale(0.8) translateY(-5vh); }
        #row-1 .parallax { background-size:150% 150%; }
    }
    @media only screen and (max-width: 700px) {
        body.loaded #row-1-intro{ transform: scale(0.7) translateY(-10vh); }
    }
    @media only screen and (max-width: 600px) {
        body.loaded #row-1-intro{ transform: scale(0.50) translateY(-15vh); }
        #row-1 .parallax { background-size:200% 150%; }
    }
    @media only screen and (max-width: 400px) {
        body.loaded #row-1-intro{ transform: scale(0.4) translateY(-20vh); }
    }
    @media only screen and (max-width: 350px) {
        body.loaded #row-1-intro{ transform: scale(0.3) translateY(-25vh); }
        #row-1 .parallax { background-size:250% 150%; }
    }
    @media only screen and (min-height: 400px) {
        #row-1-intro{ top: 50vh; }
        body.loaded #row-1-intro{ top: 40vh; }
    }
    
</style>