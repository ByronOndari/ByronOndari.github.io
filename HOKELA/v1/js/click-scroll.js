// jQuery Click Scroll

var sectionArray = [1, 2, 3, 4, 5];

$(document).ready(function () {
    // Initialize by adding 'inactive' class to all nav links, except the first
    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
    $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active');
    $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive');

    // Bind scroll event once
    $(document).scroll(function () {
        var docScroll = $(document).scrollTop();
        var docScroll1 = docScroll + 1;

        $.each(sectionArray, function (index, value) {
            var section = $('#section_' + value);

            // Check if section exists
            if (section.length) {
                var offsetSection = section.offset().top - 90;

                if (docScroll1 >= offsetSection) {
                    $('.navbar-nav .nav-item .nav-link').removeClass('active');
                    $('.navbar-nav .nav-item .nav-link:link').addClass('inactive');
                    $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active');
                    $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive');
                }
            }
        });
    });

    // Bind click event for smooth scrolling
    $.each(sectionArray, function (index, value) {
        $('.click-scroll').eq(index).click(function (e) {
            var section = $('#section_' + value);

            // Check if section exists
            if (section.length) {
                var offsetClick = section.offset().top - 90;
                e.preventDefault();
                $('html, body').animate({
                    'scrollTop': offsetClick
                }, 300);
            }
        });
    });
});
