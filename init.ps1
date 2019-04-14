
$env:BC_website = Split-Path $script:MyInvocation.MyCommand.Path;
$env:COMPOSER_HOME = "${env:BC_website}\bin\composer"

function php {
    & "${env:BC_website}\bin\php73\php.exe" @args
}
function composer {
    php "${env:COMPOSER_HOME}\composer.phar" @args
}
function runserver{
    CD $env:BC_website
    php artisan serve --port=8090
}
function watchdev{
    CD $env:BC_website
    npm run-script watch
}