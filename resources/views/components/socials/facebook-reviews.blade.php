<script async defer src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6"></script>


@php ($review_width = 200)
@php ($review_heigth = 140)
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
    <!--iframe class="slick" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fcath.simon%2Fposts%2F10218837316270551&width={{ $review_width }}" width="{{ $review_width }}" height="140" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <iframe class="slick"
    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.co
    m%2Fdanielle.plourde.568%2Fposts%2F10157431106785101&width={{ $review_width }}" width="{{ $review_width }}" height="140" style="border:none;overflow:hidden" 
    scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    <iframe class="slick" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdanielle.plourde.568%2Fposts%2F10157431106785101&width={{ $review_width }}" width="{{ $review_width }}" height="140" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
    -->
</div>

<style>
    /* fix visual effect, height to adjust */
    #fb-reviews {
        height: 200px;
        opacity: 0;
    }


    .fb-slick {
        width: 100%;
    }

    .slick-item {
        min-height: 40px;
        min-width: 40px;
        text-align: center;
    }

    .fb-post {
        transform: scale(0.8);
    }

    .slick-prev:before,
    .slick-next:before {
        color: blue;
    }
</style>



<div class="about-social-links">
    <a>
        <img src="{{ URL::asset('img/home/grid-1-1.1.jpg') }}" alt="Snow" style="width:70%;float:right;" />
    </a>
    <a>
        <img src="{{ URL::asset('img/home/grid-1-1.1.jpg') }}" alt="Snow" style="width:70%;margin-left:15%;" />
    </a>
    <a>
        <img src="{{ URL::asset('img/home/grid-1-1.1.jpg') }}" alt="Snow" style="width:70%;float:left;" />
    </a>
</div>


<style>
    .about-social-links {
        width: 100%;
        min-height: 80px;
        height: 140px;
        margin-top: 30px;
        margin-bottom: 15px;
    }

</style>