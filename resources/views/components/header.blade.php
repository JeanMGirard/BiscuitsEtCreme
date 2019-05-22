<!--header>
  
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link" href="{{ route(__('rte_home')) }}">{{ __('nav_home') }}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="{{ route(__('rte_about')) }}">{{ __('nav_about') }}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="{{ route(__('rte_products')) }}">{{ __('nav_products') }}</a>
    </li>
    <li class="nav-logo" style="z-index:-1;">
      <a class="nav-logo" href="{{ route(__('rte_home')) }}">
        <img id="nav-logo" src="{{ URL::asset('img/logo/logo-title-154.png') }}" alt="" />
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="{{ route(__('rte_menu')) }}">{{ __('nav_menu') }} </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="{{ route(__('rte_contact')) }}"> {{ __('nav_contact') }}</a>
    </li>
  </ul>
  <div id="lang-select">
    <p><a href="/lang/fr">fr</a>&nbsp;|&nbsp;<a href="/lang/en">en</a></p>
  </div>
</header-->

<header>
  <div class="logo">
    <a href="{{ route(__('rte_home')) }}">
      <img id="nav-logo" src="{{ URL::asset('img/logo/logo-title-154.png') }}" alt="" />
    </a>
  </div>

  <div id="lang-select">
    <span class="wide-vw">
      <?php
        if     (Lang::locale()=="en") echo '<a href="/lang/fr">français</a>';
        else if(Lang::locale()=="fr") echo '<a href="/lang/en">english</a>';
      ?>
    </span>

  </div>

  <ul class="nav justify-content-center">
    <li class="nav-item">
      <a class="nav-link" href="{{ route(__('rte_home')) }}">{{ __('nav_home') }}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="{{ route(__('rte_about')) }}">{{ __('nav_about') }}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="{{ route(__('rte_products')) }}">{{ __('nav_products') }}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="{{ route(__('rte_menu')) }}">{{ __('nav_menu') }} </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="{{ route(__('rte_contact')) }}"> {{ __('nav_contact') }}</a>
    </li>
  </ul>
</header>

