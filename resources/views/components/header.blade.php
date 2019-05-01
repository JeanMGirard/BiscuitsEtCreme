<header>

  <ul class="nav justify-content-center navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsenavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <li class="nav-item nav-hide-sm">
      <a class="nav-link" href="{{ route(__('rte_home')) }}">{{ __('nav_home') }}</a>
    </li>
    <li class="nav-item nav-hide-sm">
      <a class="nav-link" href="{{ route(__('rte_about')) }}">{{ __('nav_about') }}</a>
    </li>
    <li class="nav-item nav-hide-sm">
      <a class="nav-link" href="{{ route(__('rte_products')) }}">{{ __('nav_products') }}</a>
    </li>
    <li class="nav-logo" style="z-index:-1;">
      <a class="nav-logo" href="{{ route(__('rte_home')) }}">
        <img id="nav-logo" src="{{ URL::asset('img/logo/logo-title-154.png') }}" alt="" />
      </a>
    </li>
    <li class="nav-item nav-hide-sm">
      <a class="nav-link" href="{{ route(__('rte_menu')) }}">{{ __('nav_menu') }} </a>
    </li>
    <li class="nav-item nav-hide-sm">
      <a class="nav-link" href="{{ route(__('rte_contact')) }}"> {{ __('nav_contact') }}</a>
    </li>
  </ul>
  <div id="lang-select nav-hide-sm">
    <p><a href="/lang/fr">fr</a>&nbsp;|&nbsp;<a href="/lang/en">en</a></p>
  </div>


  <div class="collapse navbar-collapse" id="collapsenavbar">
    <ul class="navbar-nav mr-auto">
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
    <div id="lang-select">
      <p><a href="/lang/fr">fr</a>&nbsp;|&nbsp;<a href="/lang/en">en</a></p>
    </div>
    </ul>
  </div>
</header>