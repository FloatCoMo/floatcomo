/*
Theme: Flatfy Theme
Author: Andrea Galanti
Bootstrap Version
Build: 1.0
http://www.andreagalanti.it
*/

$(window).load(function() {
	//Preloader
	$('#status').delay(300).fadeOut();
	$('#preloader').delay(150).fadeOut('slow');
	$('body').delay(550).css({'overflow':'visible'});
});

$(document).ready(function() {
		//animated logo
		$(".navbar-brand").hover(function () {
			$(this).toggleClass("animated shake");
		});

		//animated scroll_arrow
		$(".img_scroll").hover(function () {
			$(this).toggleClass("animated infinite bounce");
		});

		//Wow Animation DISABLE FOR ANIMATION MOBILE/TABLET
		wow = new WOW(
		{
			mobile: false
		});
		wow.init();

		//MagnificPopup
		$('.image-link').magnificPopup({type:'image'});


		// OwlCarousel N1
		$("#owl-demo").owlCarousel({
			autoPlay: 3000,
			items : 3,
			itemsDesktop : [1199,3],
			itemsDesktopSmall : [979,3]
		});

		// OwlCarousel N2
		$("#owl-demo-1").owlCarousel({
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		});

		$("#owl-demo-2").owlCarousel({
			  navigation : false, // Show next and prev buttons
			  slideSpeed : 300,
			  paginationSpeed : 400,
			  singleItem:true
		});



		// $('a[href*=#]').click(function(event) {
		// 	event.preventDefault();
		// 	var link = this;
		// 	$.smoothScroll({
		// 		scrollTarget: link.hash
		// 	});
		// });


		$('a[href*=#]').click(function(event) {
	      event.preventDefault();
	      var link = this;
	      var offset = $('#newsletter').offset().top;
		  offset = offset-5;
	      $.smoothScroll({
	        scrollTarget: link.hash,
	        offset: -offset
	      });
	    });

		//Subscribe
		new UIMorphingButton( document.querySelector( '.morph-button' ) );
		// for demo purposes only
		[].slice.call( document.querySelectorAll( 'form button' ) ).forEach( function( bttn ) {
			bttn.addEventListener( 'click', function( ev ) { ev.preventDefault(); } );
		} );

});
