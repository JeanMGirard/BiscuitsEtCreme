//const glob = require('glob');
const mix = require('laravel-mix');

/*
const files = pattern => glob.sync(pattern, { cwd: 'resources/assets' });

const globify = (pattern, out, mixFunctionName) => {
   files(pattern).forEach((path) => {
     mix[mixFunctionName](`resources/${path}`, out);
   })
 };
 
 globify('sass/pages/*.scss', 'public/css/pages', 'sass');
 */
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix
  .js('resources/js/app.js', 'public/js')
  .js('resources/js/vendor.js', 'public/js')
  .js('resources/js/pages/products.js', 'public/js/pages')
  .js('resources/js/pages/home.js', 'public/js/pages')
  .sass('resources/sass/app.scss', 'public/css')
  .sass('resources/sass/vendor.scss', 'public/css')
  .sass('resources/sass/pages/home.scss', 'public/css/pages')
  .sass('resources/sass/pages/products.scss', 'public/css/pages')
  .sass('resources/sass/pages/about.scss',   'public/css/pages')
  .sass('resources/sass/pages/contact.scss',   'public/css/pages')
  .sourceMaps()
  .copy('resources/assets/img/', 'public/img/', true )
  .copy('resources/assets/svg/', 'public/svg/', true )
  .copy('resources/assets/vendor/', 'public/vendor/', true )
  .version()
  .disableNotifications();
