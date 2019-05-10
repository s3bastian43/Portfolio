function getTimeCategory(time) {
    let timeCategory = '';
    const timeFormat = 'HH:mm:ss';

    if (
        time.isBetween(moment('00:00:00', timeFormat), moment('04:59:59', timeFormat)) ||
        time.isSame(moment('00:00:00', timeFormat)) ||
        time.isSame(moment('04:59:59', timeFormat))
    ) {
        timeCategory = 'Hello, night owl.';
    } else if (
        time.isBetween(moment('05:00:00', timeFormat), moment('11:59:59', timeFormat)) ||
        time.isSame(moment('05:00:00', timeFormat)) ||
        time.isSame(moment('11:59:59', timeFormat))
    ) {
        timeCategory = 'Good Morning.';
    } else if (
        time.isBetween(moment('12:00:00', timeFormat), moment('16:59:59', timeFormat)) ||
        time.isSame(moment('12:00:00', timeFormat)) ||
        time.isSame(moment('16:59:59', timeFormat))
    ) {
        timeCategory = 'Good Afternoon.';
    } else if (
        time.isBetween(moment('17:00:00', timeFormat), moment('23:59:59', timeFormat)) ||
        time.isSame(moment('17:00:00', timeFormat)) ||
        time.isSame(moment('23:59:59', timeFormat))
    ) {
        timeCategory = 'Good Evening.';
    }

    return timeCategory;
}

function hello() {
    var time = moment()
    var greeting = getTimeCategory(time);

    var containerGreeting = document.querySelector('.landing-title__greeting');
    var containerName = document.querySelector('.landing-title__name');
    containerGreeting.innerHTML = greeting;
    containerName.innerHTML = 'I am Sebastian.';

    // Wrap every word in a span
    var words = $(".landing-title__greeting").text().split(" ");
    $(".landing-title__greeting").empty();
    $.each(words, function (i, v) {
        $(".landing-title__greeting").append($("<span class='word-split'>").text(v));
    });
    // Wrap every letter in a span
    $('.landing-title__greeting span').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\,|\.|\w)/g, "<span class='letter'>$&</span>"));
    });
    $('.landing-title__name').each(function () {
        $(this).html($(this).text().replace(/([^\x00-\x80]|\.|\w)/g, "<span class='letter'>$&</span>"));
    });


    anime.timeline({
        loop: false
    }).add({
        targets: '.landing-title',
        translateY: [-100, "-50%"],
        translateZ: 0,
        translateX: ["50%", "50%"],
        opacity: [0, 1],
        duration: 1400,
        easing: "easeOutExpo",
    });

    setTimeout(function () {
        anime.timeline({
                loop: false
            }).add({
                targets: '.landing-title__greeting .letter',
                translateY: [-100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1400,
                delay: function (el, i) {
                    return 300 + 30 * i;
                }
        });
    }, 200);

    setTimeout (function () {
        anime.timeline({
                loop: false
            }).add({
                targets: '.landing-title__name .letter',
                translateY: [-100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1400,
                delay: function (el, i) {
                    return 300 + 30 * i;
                }
        });
    }, 1400);


    anime.timeline({
        loop: false
    }).add({
        targets: '.landing-title__content',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1000,
        delay: 3000
    });

    setTimeout (function() {
        $('.landing-title__content h2').addClass('underlined');        
    }, 3600)    
};

if ($('#particles-js').length) {
(function () {
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            hello();
        }
    };

})();


(function () {
    // ParticlesJS Config.
    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#00838F"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 173,
                    "line_linked": {
                        "opacity": 0.1
                    }
                },
                "bubble": {
                    "distance": 250,
                    "size": 0,
                    "duration": 2,
                    "opacity": 0,
                    "speed": 3
                },
                "repulse": {
                    "distance": 400,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });
})();
}

$(document).ready(function () {
    if ($('main').length) {
    console.log('Hello there! If you would like to inspect my code in a more cleaner way, you can switch to Responsive Design Mode (Ctrl+Shift+M) and refresh the page. This will disable the scroll animations which include the inline CSS through the global style attribute.')

    let windowWidth = $(window).width();
    if (windowWidth < 1180) {
        headerControl();
    }

    $(window).resize(function () {
        let windowWidth = $(window).width();

    if (windowWidth < 1180) {
            headerControl();            

        } else {

            $('.nav-trigger').removeClass('hide-x');
            $('.logo-container').removeClass('hide-x');
        }
    });
    

    var overlayNav = $('.overlay-nav'),
        overlayContent = $('.overlay-content'),
        navigation = $('.primary-nav'),
        toggleNav = $('.nav-trigger');

    //inizialize navigation and content layers
    layerInit();
    $(window).on('resize', function () {
        window.requestAnimationFrame(layerInit);
    });

    //open/close the menu and cover layers
    toggleNav.on('click', function (e) {
        if (!toggleNav.hasClass('close-nav')) {
            //it means navigation is not visible yet - open it and animate navigation layer
            toggleNav.addClass('close-nav');
            $('body').addClass('noscroll');

            let posx = e.clientX;
            let posy = e.clientY;

            overlayNav.css({ 'left': posx, 'top': posy });
            overlayContent.css({ 'left': posx, 'top': posy });    

            toggleNav.css('z-index', 15);
                        
            $('.overlay-nav span').css('background', 'rgba(49,49,49,0.9)');            
            overlayNav.children('span').velocity({
                translateZ: 0,
                scaleX: 1,
                scaleY: 1,
            }, 600, 'easeInCubic', function () {
                navigation.addClass('fade-in');
                $('.menu-title__line').velocity({
                    width: ['100%', 0],
                }, 400);
                $('.primary-nav li').velocity({
                    opacity: [1, 0],
                    translateX: [0, '-200px'],
                }, 300, 'easeInCubic');
                $('.menu__bottom').velocity({
                    width: ['100%', 0],
                }, 400);
            });

        } else {
            //navigation is open - close it and remove navigation layer
            closeNavigation(toggleNav, overlayNav, overlayContent, navigation);
        }
    });

    // Used to create the circle animation.
    function layerInit() {
        var diameterValue = (Math.sqrt(Math.pow($(window).height(), 2) + Math.pow($(window).width(), 2)) * 2);
        overlayNav.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0,
        }, 50).velocity({
            height: diameterValue + 'px',
            width: diameterValue + 'px',
            top: -(diameterValue / 2) + 'px',
            left: -(diameterValue / 2) + 'px',
        }, 0);

        overlayContent.children('span').velocity({
            scaleX: 0,
            scaleY: 0,
            translateZ: 0,
        }, 50).velocity({
            height: diameterValue + 'px',
            width: diameterValue + 'px',
            top: -(diameterValue / 2) + 'px',
            left: -(diameterValue / 2) + 'px',
        }, 0);
    }

    $('.timeline__content .read-more-siveco--btn').on('click', function (e) {
        let posx = e.clientX;
        let posy = e.clientY;
        let gradient = 'linear-gradient(to top, #5ee7df 0%, #b490ca 100%)';
        openModal(this, '.read-more-siveco', gradient, posx, posy, toggleNav, overlayNav, overlayContent);
    });

    $('.timeline__content .read-more-easitill--btn').on('click', function (e) {
        let posx = e.clientX;
        let posy = e.clientY;
        let gradient = 'linear-gradient(to bottom right, #a8edea 0%, #fed6e3 100%)';
        openModal(this, '.read-more-easitill', gradient, posx, posy, toggleNav, overlayNav, overlayContent);
    });

    $('.timeline__content .read-more-uni--btn').on('click', function (e) {
        let posx = e.clientX;
        let posy = e.clientY;
        let gradient = 'linear-gradient(to top left, #37ecba 0%, #72afd3 100%)';
        openModal(this, '.read-more-uni', gradient, posx, posy, toggleNav, overlayNav, overlayContent);
    });

    $('.read-more__action .close-modal').click(function (e) {
        let posx = e.clientX;
        let posy = e.clientY;
        let dialog = $('.fade-in')
        closeNavigation(toggleNav, overlayNav, overlayContent, dialog, posx, posy);
    });


    /* Scroll spy and navigation */

    if ($('main.about').length) {
        $('#work a').click(function () {
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 800);
            return false;
        });

        $(".menu-links").scrollspy({
            activeClass: 'current',
            animate: true,
            offset: '-40'
        });

        $(".logo-container").scrollspy({
            activeClass: '',
            animate: true,
            offset: '-140'
        });
    }

    $('.primary-nav a').click(function () {
        closeNavigation(toggleNav, overlayNav, overlayContent, navigation);
    });

    /* Scroll Reveal */
    window.sr = ScrollReveal({
        mobile: false
     });
    sr.reveal('#about-me .section-content', {
        scale: 0.5,
        duration: 800,
        distance: '120px'
    });
    sr.reveal('section h1', {
        origin: 'left',
        scale: 0.5,
        duration: 800,
        distance: '120px',
        delay: 100
    });

    sr.reveal('.journey h3, .timeline__container', { 
        delay: 300,
        scale: 0.5,
        duration: 800 
    });
    sr.reveal('.left-timeline', {
        delay: 800,
        origin: 'left'
    });
    sr.reveal('.right-timeline', {
        delay: 800,
        origin: 'right'
    });
    sr.reveal('.skills__title', {
        scale: 0.5,
        duration: 800,
        viewFactor: 0.6,        
        afterReveal: function (domEl) { 
            $(domEl).addClass('rotate');
        }, 
    }, 200);
    sr.reveal('.skills__items li', { 
        duration: 200,
        origin: 'right',
        delay: 1000,
        viewFactor: 0.6         
    }, 100);
    sr.reveal('#work p', {
        origin: 'left',
        scale: 0.5,
        duration: 800,
        distance: '50%',
        delay: 100
    });
    sr.reveal('#work .projects-grid__project', {
        duration: 900,
        distance: '80%',
        viewFactor: 0.1        
    });
    sr.reveal('#contact p', {
        origin: 'left',
        scale: 0.5,
        duration: 800,
        distance: '50%',
        delay: 100
    });
    sr.reveal('#contact .controls, #contact button', {
        delay: 300,
        scale: 1,
        duration: 800,
        distance: '100%' 
    });

    sr.reveal('.project-section .section-content', {
        duration: 800
    });

    sr.reveal('.project .project-title', {
        origin: 'left',
        scale: 0.1,
        duration: 1000,
        distance: '100%',
        delay: 100
    });

    sr.reveal('.footer-content .social-icon', {
        scale: 0.1,
        duration: 700,
        distance: '100%',
    });



    /* Lazy Load */
    if ($('.lazy').length) {
        $('.lazy').lazy();
    }


    /* Sliders */
    if ($('.slider').length) {
        $('.slider').slick({
            lazyLoad: 'ondemand',
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '<span class="prev-arrow"><img src="../images/icons/arrow-left.svg"></span>',
            nextArrow: '<span class="next-arrow"><img src="../images/icons/arrow-right.svg"></span>',            
        });
    }
    if ($('.slider-johncullen-prototype').length) {
        $('.slider-johncullen-prototype').slick({
            lazyLoad: 'ondemand',
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            prevArrow: '<span class="prev-arrow"><img src="../images/icons/arrow-left.svg"></span>',
            nextArrow: '<span class="next-arrow"><img src="../images/icons/arrow-right.svg"></span>',
        });
    }
    if ($('.slider-projects').length) {
        $('.slider-projects').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToShow: 2,
            slidesToScroll: 1,
            prevArrow: '<span class="prev-arrow"><img src="../images/icons/arrow-left.svg"></span>',
            nextArrow: '<span class="next-arrow"><img src="../images/icons/arrow-right.svg"></span>',
            responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        infinite: true,
                        arrows: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        autoplay: true,
                        autoplaySpeed: 2000,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false                        
                    }
                }]
        });
    }
    


}   
});


// Function used ofr opening the modal box. Used on the homepage read more links.
function openModal(button, modal, gradient, posx, posy, toggleNav, overlayNav, overlayContent) {
    var readMoreDialog = $(modal),
        toggleReadMore = $(button);

        $('body').addClass('noscroll');
        toggleNav.css('z-index', 11);
        $('.overlay-nav span').css('background-image', gradient);

        overlayNav.css({ 'left': posx, 'top': posy });
        overlayContent.css({ 'left': posx, 'top': posy });
        overlayNav.children('span').velocity({
            translateZ: 0,
            scaleX: 1,
            scaleY: 1,
        }, 800, 'easeInCubic', function () {
            readMoreDialog.addClass('fade-in');
            $('.read-more__container').velocity({
                translateY: ['0', '-200px'],
                opacity: [1, 0],
            }, 500);
        });

}


// Closes naviagation opened modals
function closeNavigation(toggleNav, overlayNav, overlayContent, navigation, posx, posy) {
    overlayNav.css({ 'left': posx, 'top': posy });
    overlayContent.css({ 'left': posx, 'top': posy });

    toggleNav.removeClass('close-nav');
    $('body').removeClass('noscroll');


    overlayContent.children('span').velocity({
        translateZ: 0,
        scaleX: 1,
        scaleY: 1,
    }, 500, 'easeInCubic', function () {
        navigation.removeClass('fade-in');

        overlayNav.children('span').velocity({
            translateZ: 0,
            scaleX: 0,
            scaleY: 0,
        }, 0);

        overlayContent.addClass('is-hidden').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
            overlayContent.children('span').velocity({
                translateZ: 0,
                scaleX: 0,
                scaleY: 0,
            }, 0, function () {
                overlayContent.removeClass('is-hidden')
            });
        });
        if ($('html').hasClass('no-csstransitions')) {
            overlayContent.children('span').velocity({
                translateZ: 0,
                scaleX: 0,
                scaleY: 0,
            }, 0, function () {
                overlayContent.removeClass('is-hidden')
            });
        }
    });
}


function windowSize() {
    windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
    windowWidth = window.innerWidth ? window.innerWidth : $(window).width();

}

function headerControl() {
    /*
    Thanks to Marius Craciunoiu for this great tutorial. Available here:
    https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
    */
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var nav = $('.nav-trigger');
    var logo = $('.logo-container');
    var navbarHeight = nav.outerHeight();


    $(window).scroll(function (event) {
        didScroll = true;
    });

    setInterval(function () {
        let windowWidth = $(window).width();

        if (windowWidth < 1180) {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            nav.addClass('hide-x');
            logo.addClass('hide-x');
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                nav.removeClass('hide-x');
                logo.removeClass('hide-x');
            }
        }

        lastScrollTop = st;
    }

}

(function () {
    function floatLabel(inputType) {
        $(inputType).each(function () {
            var $this = $(this);
            $this.focus(function () {
                $this.next().addClass("active");
            });
            $this.blur(function () {
                if ($this.val() === '' || $this.val() === 'blank') {
                    $this.next().removeClass();
                }
            });
        });
    }
    floatLabel(".float-label");
})();

window.addEventListener("load", function(){
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#ffffff",
                "text": "#454545"
            }
        },
        "theme": "classic",
        "position": "bottom-left",
        "content": {
            "message": "This website uses cookies to ensure you get the best experience.",
            "dismiss": "Accept 🍪"
        }
})});

if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/sw.js')
        .then(function() { console.log("Service Worker Registered"); });
}



