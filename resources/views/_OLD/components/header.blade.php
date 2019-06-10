<!-- header-start -->
<header class="header-transparent">
  <div id="sticky-header" class="main-menu-area header-3">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-xl-2 col-lg-2 col-md-5">
          <div class="logo">
            <a href="{{ route('rte_home') }}">
              <img src="{{ URL::asset('img/logo/logo-title.png') }}" alt="" />
            </a>
          </div>
        </div>
        <div class="col-xl-7 col-lg-7 col-md-8 d-none d-lg-block">
          <div class="main-menu text-center">
            <nav id="mobile-menu">
              <ul>
                <li class="active"><a href="{{ route('rte_home') }}">{{ __('nav_home') }}</a></li>
                <li><a href="{{ route('rte_about') }}">{{ __('nav_about') }}</a></li>
                <li><a href="{{ route('rte_products') }}">{{ __('nav_products') }}</a></li>
                <li><a href="{{ route('rte_shop') }}">{{ __('nav_shop') }} </a></li>
                <li><a href="{{ route('rte_blog') }}"> {{ __('nav_blog') }}</a></li>
                <li><a href="#">{{ __('nav_pages') }}</a>
                  <ul class="sub-menu text-left">
                    <li><a href="{{ route('rte_gallery') }}">{{ __('nav_gallery') }}</a></li>
                    <li><a href="gallery-details-1.html">Gallery Details 01</a></li>
                    <li><a href="gallery-details-2.html">Gallery Details 02</a></li>
                    <li><a href="gallery-details-3.html">Gallery Details 03</a></li>
                    <li><a href="gallery-details-4.html">Gallery Details 04</a></li>
                    <li><a href="blog-details.html">Blog Details</a></li>
                    <li><a href="services-details.html">Service Details</a></li>
                    <li><a href="shop-details.html">Shop Details</a></li>
                    <li><a href="team.html">Team</a></li>
                  </ul>
                </li>
                <li><a href="{{ route('rte_contact') }}">{{ __('nav_contact') }}</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-7">
          <div class="header-right f-right d-none d-md-block">
            <ul>
              <!--li class="search-icon"><a href="#" data-toggle="modal" data-target="#search-modal"><i class="dripicons-search"></i></a></li>
              <li class="unser-icon"><a href="#"><i class="dripicons-user"></i></a></li>
              <li class="cart-icon"><a href="#"><i class="dripicons-cart"></i></a> <span>2</span></li>
              <li class="active info-bar"><a href="#"><i class="dripicons-vibrate"></i></a></li-->
            </ul>
          </div>
        </div>
        <div class="col-12">
          <div class="mobile-menu"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="extra-info">
    <div class="close-icon">
      <button>
        <i class="far fa-window-close"></i>
      </button>
    </div>
    <div class="logo-side mb-30">
      <a href="{{ route('rte_home') }}">
        <img src="img/logo/logo-white.png" alt="" />
      </a>
    </div>
    <div class="side-info mb-30">
      <div class="contact-list mb-30">
        <h4>Office Address</h4>
        <p>123/A, Miranda City Likaoli
          Prikano, Dope</p>
      </div>
      <div class="contact-list mb-30">
        <h4>Phone Number</h4>
        <p>+0989 7876 9865 9</p>
        <p>+(090) 8765 86543 85</p>
      </div>
      <div class="contact-list mb-30">
        <h4>Email Address</h4>
        <p>info@example.com</p>
        <p>example.mail@hum.com</p>
      </div>
    </div>
    <div class="instagram">
      <a href="#">
        <img src="img/gallery/gallery1.jpg" alt="">
      </a>
      <a href="#">
        <img src="img/gallery/gallery2.jpg" alt="">
      </a>
      <a href="#">
        <img src="img/gallery/gallery3.jpg" alt="">
      </a>
      <a href="#">
        <img src="img/gallery/gallery4.jpg" alt="">
      </a>
      <a href="#">
        <img src="img/gallery/gallery5.jpg" alt="">
      </a>
      <a href="#">
        <img src="img/gallery/gallery6.jpg" alt="">
      </a>
    </div>
    <div class="social-icon-right mt-20">
      <a href="#">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#">
        <i class="fab fa-google-plus-g"></i>
      </a>
      <a href="#">
        <i class="fab fa-instagram"></i>
      </a>
    </div>
  </div>
</header>
<!-- header-end -->
