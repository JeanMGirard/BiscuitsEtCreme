<div class="row justify-content-center" id="about-r2">
    <div class="col-md-10">
        <section class="row">
            <img src="{{ URL::asset('img/about/article-1.jpg') }}" title="{{ __('about_p1t') }}" alt="{{ __('about_p1_tags') }}">
            <article>
                <h4>{{ __('about_p1t') }}</h4>
                <p>{{ __('about_p1c') }}</p>
            </article>
        </section>
        <section class="row">
            <img src="{{ URL::asset('img/about/article-2.jpg') }}" title="{{ __('about_p2t') }}" alt="{{ __('about_p2_tags') }}">
            <article>
                <h4>{{ __('about_p2t') }}</h4>
                <p>{{ __('about_p2c') }}</p>
            </article>
        </section>
        <section class="row">
            <img src="{{ URL::asset('img/about/article-3.jpg') }}" title="{{ __('about_p3t') }}" alt="{{ __('about_p3_tags') }}">
            <article>
                <h4>{{ __('about_p3t') }}</h4>
                <p>{{ __('about_p3c') }}</p>
            </article>
        </section>
    </div>
</div>

<style>
    #about-r2 {
        background: white;

    }

    #about-r2 section {
        text-align: center;
        margin-top: 60px;
    }

    #about-r2 section:last-of-type {
        margin-bottom: 70px;
    }

    #about-r2 section img {
        display: inline-block;
        width: 300px;
        height: 150px;
        float: left;

    }

    #about-r2 section article {
        display: inline-block;
        float: left;
        width: 55%;
        padding-left: 5vw;
        font-family: "Montserrat", cursive;
    }

    #about-r2 section article h4,
    #about-r2 section article p {
        text-align: left;
    }

    @media only screen and (max-width: 900px) {
        #about-r2 section article {
            width: 50%;
        }
    }

    @media only screen and (max-width: 700px) {
        #about-r2 section img {
            height: 250px;
        }

        #about-r2 section article {
            width: 40%;
        }
    }

    @media only screen and (max-width: 550px) {
        #about-r2 section {
            margin-top: 10px;
        }

        #about-r2 section img {
            height: 200px;
            width: 100%;
            margin-bottom: 10px;
        }

        #about-r2 section article {
            width: 100%;
            padding-left: 0vw;
        }

        #about-r2 section:last-of-type {
            margin-bottom: 30px;
        }
    }
</style>