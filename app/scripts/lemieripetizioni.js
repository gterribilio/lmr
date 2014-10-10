// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
// Closes the Responsive page-top on page-top Item Click

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
/*
var timerid; //Used to fire scroll function once after scrolling is done.
$(document).ready(function(){
    $("#page-top a").click(function(e){
        e.preventDefault();
        $("#page-top a").removeClass('active');
        var id = $(this).attr("href").substring(1);
        $("body").animate({
            'scrollTop': $("section#" + id).offset().top
        });        
    });
    $("body").scrollTop(1); //forcing window scroll to execute on page load
    $(window).scroll(function(){
        clearTimeout(timerid);
        timerid = setTimeout(checkactivelink, 50);
    });

    function checkactivelink()
    {
        $("section").each(function(){
            if($("body").scrollTop() >= $(this).offset().top)
            {
                $("#page-top a").removeClass('active');
                    $("#page-top a[href=#" + $(this).attr("id") + "]").addClass('active');
            }
        });
    }
});*/