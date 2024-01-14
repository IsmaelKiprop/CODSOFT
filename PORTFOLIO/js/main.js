 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();



   // Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			event.preventDefault();

			if ( $('#ftco-nav').is(':visible') ) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');	
			}

			
			
		});

	};
	burgerMenu();


	var onePageClick = function() {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
	    event.preventDefault();

	    var href = $.attr(this, 'href');

	    $('html, body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top - 70
	    }, 500, function() {
	    	// window.location.hash = href;
	    });
		});

	};

	onePageClick();
	

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	

	var counter = function() {
		
		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });





})(jQuery);

// main.js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting normally

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Send email using email.js
        emailjs.send('service_huf6wru', 'template_0utn5z9', {
            from_name: name,
            email_id: email,
            subject: subject,
            message: message
        })
        .then(function(response) {
            console.log('Email sent successfully:', response);
            successMessage.textContent = 'Email sent successfully!'; // Display success message
        }, function(error) {
            console.error('Email sending failed:', error);
            successMessage.textContent = 'Email sending failed. Please try again.'; // Display error message
        });
    });
});
const audioElements = {
	'web-design-aud-0': document.getElementById('web-design-aud-0'),
	'software-aud-0': document.getElementById('software-aud-0'),
	'web-development-aud': document.getElementById('web-development-aud'),
	'app -aud-0': document.getElementById('app -aud-0'),
	'graphic-aud-0': document.getElementById('graphic-aud-0'),
	'product-aud-0': document.getElementById('product-aud-0'),

	// Add other audio elements here
};

const iconElements = {
	'web-design-icon': document.getElementById('web-design-icon'),
	'software-icon': document.getElementById('software-icon'),
	'graphic-icon': document.getElementById('graphic-icon'),
	'app-icon': document.getElementById('app-icon'),
	'product-icon': document.getElementById('product-icon'),
	'web-icon': document.getElementById('web-icon'),
};

// Function to toggle audio play/pause and icon
function toggleAudioAndIcon(audioId, iconId) {
	const audio = audioElements[audioId];
	const icon = iconElements[iconId];

	if (audio.paused) {
		audio.play();
		updateIcon(icon, 'pause-icon');
	} else {
		audio.pause();
		updateIcon(icon, 'play-icon');
	}
}

// Function to update icon based on play/pause state
function updateIcon(icon, state) {
	icon.querySelector('.play-icon').style.display = state === 'play-icon' ? 'inline-block' : 'none';
	icon.querySelector('.pause-icon').style.display = state === 'pause-icon' ? 'inline-block' : 'none';
}

// Function to add animation on hover
function addHoverAnimation(element) {
  element.addEventListener('mouseenter', function() {
    element.style.transform = 'translateY(-5px)';
  });

  element.addEventListener('mouseleave', function() {
    element.style.transform = 'translateY(0)';
  });
}

// Attach animations to the service items
document.addEventListener('DOMContentLoaded', function() {
  const serviceItems = document.querySelectorAll('.services-1');
  
  serviceItems.forEach(item => {
    addHoverAnimation(item);
  });
});

// script.js

// Function to add animation on hover
function addHoverAnimation(element) {
  element.addEventListener('mouseenter', function() {
    element.style.transform = 'translateY(-5px)';
  });

  element.addEventListener('mouseleave', function() {
    element.style.transform = 'translateY(0)';
  });
}

// Function to add animation on scroll
function addScrollAnimation(element) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(-5px)';
      } else {
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  observer.observe(element);
}

// Attach animations to the service items
document.addEventListener('DOMContentLoaded', function() {
  const serviceItems = document.querySelectorAll('.services-1');

  serviceItems.forEach(item => {
    addHoverAnimation(item);
    addScrollAnimation(item);
  });
});






