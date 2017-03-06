(function($){

	$(document).ready(function() {

		$('body').scrollspy({ 
			target: '.navbar-custom',
			offset: 50
		})

		$('a[href*=#]').bind("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
 		 * Navbar 
		/* ---------------------------------------------- */

		var navbar = $('.navbar');
		var navHeight = navbar.height();

		$(window).scroll(function() {
			if($(this).scrollTop() >= navHeight) {
				navbar.addClass('navbar-color');
			}
			else {
				navbar.removeClass('navbar-color');
			}
		});

		if($(window).width() <= 767) {
			navbar.addClass('custom-collapse');
		}

		$(window).resize(function() {
			if($(this).width() <= 767) {
				navbar.addClass('custom-collapse');
			}
			else {
				navbar.removeClass('custom-collapse');
			}
		});

		/* ---------------------------------------------- /*
		 * Owl slider 
		/* ---------------------------------------------- */

		$("#owl-clients").owlCarousel({
      		slideSpeed : 300,
      		paginationSpeed : 400,
      		singleItem:true,
      		autoPlay: 5000
		});

		/* ---------------------------------------------- /*
		 * Portfolio pop up
		/* ---------------------------------------------- */

		$('#portfolio').magnificPopup({
			delegate: 'a.pop-up',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1]
			},
			image: {
				tError: 'The image could not be loaded.',
				titleSrc: function(item) {
					return item.el.find('.ptitle').text();
				}
			}
		});

	});

})(jQuery);
