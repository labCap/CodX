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

$(document).ready(function () {
    $('.footer__box-title').click(function (event) {
        if ($('.ico__list1').hasClass('one')) {
            $('.footer__box-title').not($(this)).removeClass('active');
            $('.ico__list-li').not($(this).next()).slideUp(300);
        }

        $(this).toggleClass('active').next().slideToggle(300);
    });
});