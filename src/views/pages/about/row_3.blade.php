<script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6"></script>
@php ($review_width = 200)
@php ($review_heigth = 140)

<!--iframe class="slick" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcath.simon%2Fposts%2F10218837316270551&width={{ $review_width }}" width="{{ $review_width }}" height="140" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe-->

<div id="row-3" class="row content-box justify-content-center" style="text-align: center;">
    <span class="col-10"></span>
    <h3>Découvrez-nous sur les réseaux sociaux!!</h3>

    <div class="col-10 container slide">
        <div id="fb-reviews" class="row justify-content-center">
            <div class="fb-slick">
                <div class="slick-item">
                    <div class="fb-post" data-href="https://www.facebook.com/danielle.plourde.568/posts/10157431106785101/" data-width="{{ $review_width }}"></div>
                </div>
                <div class="slick-item">
                    <div class="fb-post" data-href="https://www.facebook.com/danielle.plourde.568/posts/10157431106785101/" data-width="{{ $review_width }}"></div>
                </div>
                <div class="slick-item">
                    <div class="fb-post" data-href="https://www.facebook.com/danielle.plourde.568/posts/10157431106785101/" data-width="{{ $review_width }}"></div>
                </div>
                <div class="slick-item">
                    <div class="fb-post" data-href="https://www.facebook.com/danielle.plourde.568/posts/10157431106785101/" data-width="{{ $review_width }}"></div>
                </div>
                <div class="slick-item">
                    <div class="fb-post" data-href="https://www.facebook.com/danielle.plourde.568/posts/10157431106785101/" data-width="{{ $review_width }}"></div>
                </div>
                <div class="slick-item">
                    <div class="fb-post" data-href="https://www.facebook.com/danielle.plourde.568/posts/10157431106785101/" data-width="{{ $review_width }}"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-12 social-links">
        <a href="/a-propos">
            <img src="{{ URL::asset('img/social/FB-f-Logo__blue_100.png') }}" alt="Facebook" />
        </a>
        <a href="/a-propos">
            <img src="{{ URL::asset('img/social/Pinterest-badge-144px.png') }}" alt="Instagram" />
        </a>
        <a href="/a-propos">
            <img src="{{ URL::asset('img/social/Pinterest-badge-144px.png') }}" alt="Pinterest" />
        </a>
    </div>

</div>




<style>
    #row-3 {
        box-shadow: none;
        border: none;
        background: white;
    }

    #row-3>span:first-child {
        border-top: 1px solid lightgray;
    }

    #row-3>h3:first-of-type {
        font-family: "Monterrat", cursive;
        font-style: italic;
        font-size: 26px;
        margin-top: 20px;
        margin-bottom: 50px;
    }

    #row-3 .slide {
        padding: 0;
        color: black;
    }

    #row-3 #fb-reviews {
        height: 200px;
        opacity: 0;
    }

    #row-3 .fb-slick {
        width: 100%;
    }

    #row-3 .slick-item {
        min-height: 40px;
        min-width: 40px;
        text-align: center;
    }

    #row-3 .fb-post {
        position: relative;
        padding-bottom: 56.25%;
        height: 0;
        padding-top: 20px;
        overflow: hidden;
    }

    #row-3 .fb-post iframe:first-of-type {
        transform: scale(0.8);
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }

    #row-3 .slick-prev:before,
    #row-3 .slick-next:before {
        color: blue;
    }


    #row-3 .social-links {
        width: 100%;
        min-height: 80px;
        text-align: center;
        margin-top: 50px;
        margin-bottom: 90px;
    }

    #row-3 .social-links a {
        display: inline-block;
        opacity: 0.9;
        max-height: 140px;
        max-width: 140px;
        width: 10vw;
        height: 10vw;
        margin-left: 2vw;
        margin-right: 2vw;
    }

    #row-3 .social-links a:first-of-type,
    #row-3 .social-links a:last-of-type {
        margin: none;
    }

    #row-3 .social-links a:hover {
        opacity: 1;
    }

    #row-3 .social-links a img {
        width: 100%;
        height: 100%;
    }


    @media only screen and (max-width: 1024px) {
        #row-3 .slick-track { margin-left: -10px; }
        #row-3 .fb-post iframe:first-of-type { transform: scale(0.9); }
    }
    @media only screen and (max-width: 800px) {
        #row-3 .slick-track { margin-left: -3vw; }
        #row-3 .fb-post iframe:first-of-type { transform: scale(0.7); }
    }
    @media only screen and (max-width: 600px) {
        #row-3 .slick-track { margin-left: -0px; }
        #row-3 .fb-post iframe:first-of-type { transform: scale(1); }
    }
    @media only screen and (max-width: 500px) {
        #row-3 .slick-track { margin-left: -10px; }
        #row-3 .fb-post iframe:first-of-type { transform: scale(0.8); }
    }
    @media only screen and (max-width: 400px) {
        #row-3 .slick-track { margin-left: -15px; }
        #row-3 .fb-post iframe:first-of-type { transform: scale(0.7); }
    }
</style>

<script>

</script>