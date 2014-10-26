// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery scrollTop
//refresh dello scrollspy se si aggiungono o tolgono parti dal DOM (vedi scrollspy dal sito di bootstrap)
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
})

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

// Closes the Responsive page-top on page-top Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/*Google Map Marker*/
// la chiamata è asincrona per la presenza della callback initialize che viene passata

function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(45.01532, 7.80689),
    styles: [{
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 29
        }, {
            "weight": 0.2
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 18
        }]
    }, {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 21
        }]
    }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#000000"
        }, {
            "lightness": 16
        }]
    }, {
        "elementType": "labels.text.fill",
        "stylers": [{
            "saturation": 36
        }, {
            "color": "#000000"
        }, {
            "lightness": 40
        }]
    }, {
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 19
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 20
        }]
    }, {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#000000"
        }, {
            "lightness": 17
        }, {
            "weight": 1.2
        }]
    }]
};

var map = new google.maps.Map(document.getElementById('map'),
  mapOptions);
var myLatLng = new google.maps.LatLng(45.01532, 7.80689);

var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP
});

}

function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCOreuv4T4rDNuUZ73GYwxNOMruec_FuCE&sensor=false&callback=initialize';
  document.body.appendChild(script);
}
window.onload = loadScript;

/*END GOOGLE MAPS SCRIPTS*/

/*ANIMATION DEL FOOTER PER FADE IN - FADE - OUT*/
$(window).scroll(function () {
    var y = $(window).scrollTop(),
    x = $('.animated').offset().top - 200;
    if (y > x) {
        $('.animated').addClass('fadeInUp').removeClass('fadeOutDown');
    } else {
        $('.animated').removeClass('fadeInUp').addClass('fadeOutDown');
    }
});

function showStudente() {
    $("#panel_studente").show();
    $("#panel_docente").hide();
}

function showDocente() {
    $("#panel_studente").hide();
    $("#panel_docente").show();
}