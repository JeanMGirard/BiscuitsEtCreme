<?php
$garnitures = \App\Category::where('name', '=', 'garnitures')->first()->products;
$pates = \App\Category::where('name', '=', 'cookie-dough')->first()->products;
?>




<div id="row-2" class="row content-box">
    <div class="col-12">
        <!--  UPPER PART-->
        <div class="row">
            <div class="col-1"></div>
            <div class="col-5">
                <div class="row-2"></div>
                <div class="row-8">
                    <!-- carousel - 1 -->
                    <div id="row2-carousel-1" class="carousel slide" data-ride="carousel">
                        <!--ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol-->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="{{ URL::asset('img/home/carousel-1.1.jpg') }}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ URL::asset('img/home/carousel-1.2.jpg') }}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ URL::asset('img/home/carousel-1.3.jpg') }}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ URL::asset('img/home/carousel-1.4.jpg') }}" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#row2-carousel-1" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#row2-carousel-1" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <!-- END carousel -->
                </div>
                <div class="row-2"></div>
            </div>
            <div class="col-6 carousel-side-content">
                <div class="row">
                    <h4>{{ __('home_bisc_title') }}</h4>
                    <p>{{ __('home_bisc_desc') }}</p>
                    <br />
                    <div class="col-5">
                        <?php
                        $middleProd = $pates[round(count($pates) / 2)];
                        foreach ($pates as $p) {
                            if (Lang::locale() == "fr")      echo ' - ' . $p->name_fr . '<br />';
                            else if (Lang::locale() == "en") echo ' - ' . $p->name_en . '<br />';

                            if ($p == $middleProd) echo '</div><div class=" col - 7 ">';
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-1"></div>
            <div class="col-5">
                <div class="row-2"></div>
                <div class="row-8">
                    <!-- carousel - 1 -->
                    <div id="row2-carousel-2" class="carousel slide" data-ride="carousel">
                        <!--ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol-->
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="{{ URL::asset('img/home/carousel-2.1.jpg') }}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ URL::asset('img/home/carousel-2.2.jpg') }}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ URL::asset('img/home/carousel-2.3.jpg') }}" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                                <img src="{{ URL::asset('img/home/carousel-2.4.jpg') }}" class="d-block w-100" alt="...">
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#row2-carousel-2" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#row2-carousel-2" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    <!-- END carousel -->
                </div>
                <div class="row-2"></div>
            </div>

            <div class="col-6 carousel-side-content">
                <div class="row">
                    <h4>{{ __('home_garn_title') }}</h4>
                    <p>{{ __('home_garn_desc') }}</p>
                    <br />
                    <div class="col-5">
                        <?php
                        $middleProd = $garnitures[round(count($garnitures) / 2)];
                        foreach ($garnitures as $g) {
                            if (Lang::locale() == "fr")      echo ' - ' . $g->name_fr . '<br />';
                            else if (Lang::locale() == "en") echo ' - ' . $g->name_en . '<br />';

                            if ($g == $middleProd) echo '</div><div class=" col - 7 ">';
                        }
                        ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--div class="col justify-content-center">
        <div class="row">
            <div class="col-6">
                <div id="grid-biscuits">
                    <table>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                        <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                        <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                        <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td><img src="{{ URL::asset('img/backgrounds/biscuits-bg-600.png') }}"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </table>
                </div>
            </div>
            <div class="col-6">
                <h2>Nos Pates</h2>
            </div>
        </div>

        </div-->
</div>