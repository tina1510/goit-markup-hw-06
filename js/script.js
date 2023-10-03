$(document).ready(function () {
    $('.button-nav').click(function (event) {
        $('.button-nav, .mobile-menu').addClass('is-open')
    })
     $('.close-nav-button').click(function (event) {
        $('close-nav-button, .mobile-menu').toggleClass('is-open')
    })
}
)