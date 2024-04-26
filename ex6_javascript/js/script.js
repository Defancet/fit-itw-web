$(document).ready(function () {
    $('.hamburger').click(function () {
        $('#nav-menu').toggleClass('show-grid');
        if ($('#nav-menu').hasClass('show-grid')) {
            $('.menu-text').show();
            $('#nav-menu li').show();
            $('#nav-menu li.active').show();
        } else {
            $('#nav-menu li').hide();
            $('#nav-menu li.active').show();
        }
    });

    var navOffset = $('#sticky-nav').offset().top;

    function stickyNavigation() {
        var scrollPos = $(window).scrollTop();
        if (scrollPos >= navOffset) {
            $('#sticky-nav').css({
                'position': 'fixed',
                'top': '0',
                'width': '100%'
            });
        } else {
            $('#sticky-nav').css({
                'position': 'relative'
            });
        }
    }

    $(window).scroll(stickyNavigation);

    $('nav a').click(function (e) {
        e.preventDefault();
        $('nav ul li').removeClass('active');
        $(this).parent('li').addClass('active');

        var linkHref = $(this).attr('href');
        var stickyNavHeight = $('#sticky-nav').outerHeight();

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top - stickyNavHeight
        }, 1000);
    });
})
