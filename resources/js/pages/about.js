
$(document).ready(function () {
    $('.fb-slick').slick({
        dots: false,
        arrows: true,
        //  prevArrow: '<button type="button " class="slick - prev ">Previous</button>',
        //  nextArrow: '<button type="button" class="slick-next">Next</button>',
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 8000,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // infinite: true,
                    //dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    
     $('.about-social-links').slick({
         dots: false,
         arrows: false,
         infinite: false,
         slidesToShow: 3
     });
/*
    $(".slick-item iframe").css("font-size: 12px;")
    */
   /*var elmnt = iframe.contentWindow.document.getElementsByTagName("H1")[0];
    elmnt.style.display = "none";*/

    $("#fb-reviews").css("opacity", "1");
});