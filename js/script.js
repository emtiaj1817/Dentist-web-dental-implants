$(document).ready(function () {


});



// sticky nav bar 
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $('.header-top-area').addClass('sticky-nav')
    } else {
        $('.header-top-area').removeClass('sticky-nav')
    }
});