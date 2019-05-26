# *------- DEVELOPMENT STAGE ---------------*

**This is still in early development stage**

# Biscuits Et Creme

## Website

### Start

```sh
php artisan serve --port=8090
```

### Setup

#### php

```sh
php require global laravel/installer
php artisan migrate:install --env=local
php artisan vendor:publish
```

#### npm

```sh
npm install -g cross-env gulp-cli
npm install --no-bin-links
```

### Build

```sh
php artisan key:generate
# Create cache
php artisan cache:table
php artisan view:cache 
php artisan route:cache
php artisan config:cache
# Publish
php artisan vendor:publish
php artisan admin:publish
```

### Maitain

- Migrate: ``php artisan migrate --env=local``
- File changes: ``composer dumpautoload``

#### Update

```sh
php artisan vendor:publish --provider="Encore\Admin\AdminServiceProvider"
php artisan admin:install
php artisan vendor:publish --tag=laravel-admin-cropper
php artisan vendor:publish --tag=laravel-admin-data-table
```

##### Update Extensions

- ``php artisan vendor:publish --tag=laravel-admin-data-table --force``

php artisan migrate
php artisan admin:import config
php artisan admin:import phpinfo
php artisan admin:import media-manager
php artisan admin:import scheduling
php artisan admin:import log-viewer
php artisan admin:import helpers
php artisan migrate


### Extensions

- [media-manager](https://github.com/laravel-admin-extensions/media-manager)
- [scheduling](https://github.com/laravel-admin-extensions/scheduling)
- [Croper](https://github.com/laravel-admin-extensions/cropper) - A simple jQuery image cropping plugin.
- [log-viewer](https://github.com/laravel-admin-extensions/log-viewer)
- [material-ui](https://github.com/laravel-admin-extensions/material-ui)
- [data-table](https://github.com/laravel-admin-extensions/data-table)
- [BackUp](https://github.com/laravel-admin-extensions/backup)
- [Config](https://github.com/laravel-admin-extensions/config)
- [phpinfo](https://github.com/z-song/laravel-admin#extensions)
