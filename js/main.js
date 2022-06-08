$(function () {

    // $('.btn__menu').on('click', function () {
    //     $('.menu__box').slideToggle();
    // });

    $('.slider__items').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 150,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 1500,
        variableWidth: true,

        // responsive: [
        //     {
        //         breakpoint: 1106,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //         }
        //     }
        // ]
    });
});
$(document).ready(function () {
    $('.faq__title').click(function (event) {
        if ($('.faq__item').hasClass('one')) {
            $('.faq__title').not($(this)).removeClass('active');
            $('.faq__descr').not($(this).next()).slideUp(300);
        }

        $(this).toggleClass('active').next().slideToggle(300);
    });
});