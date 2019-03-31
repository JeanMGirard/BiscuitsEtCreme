
php artisan serve --port=8090


### Setup
###### php
```
php require global laravel/installer
php artisan migrate:install --env=local
```

###### npm
```
npm install -g cross-env gulp-cli
npm install --no-bin-links
```

### Maitain
- Migrate: ``php artisan migrate --env=local``
- File changes: ``composer dumpautoload``

## Start server
```
php artisan serve --port=8090
```