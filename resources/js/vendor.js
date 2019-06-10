
//https://github.com/peterhry/CircleType
try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

   // import 'jquery-ui/ui/widgets/datepicker.js';
    require('bootstrap');
    
    
} catch (e) { console.log(e); }

//window.lettering = require('lettering');
window.CircleType = require('circletype');
window.axios = require('axios');
window.ImageScroll = require('parallax-imagescroll');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.slick = require('slick-carousel');
let token = document.head.querySelector('meta[name="csrf-token"]');

/*if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}*/