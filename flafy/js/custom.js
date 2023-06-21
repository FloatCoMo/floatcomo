$(document).ready(function () {
	$('.navbar-nav li a').click(function (event) {
		if (!$(this).parent().hasClass('dropdown')) $('.navbar-ex1-collapse').collapse('hide');
	});


	//Deal banner start


	
	jQuery(function ($) {
		$(document).ready(function () {
			$('.navbar-default').stickUp();
			fbq('track', 'ViewContent');
			$(function () {
				var now = new Date();
				var fromStudiesUrl = window.location.href.indexOf("studies") > -1;

				// var shouldShow = false;
				var note = $('#note');
				var dealExpirationDate = null;

				var blackFridayStart = new Date("November 22, 2022");
				var blackFridayEnd = new Date("November 29, 2022");

				var holidayStartDate = new Date("December 5, 2022");
				var holidayEndDate = new Date("December 31, 2022");

				var valentinesDayStartDate = new Date("Febuary 1, 2023");
				var valentinesDayEndDate = new Date("Febuary 14, 2023");

				var membershipDealStartDate = new Date("March 1, 2023");
				var membershipDealEndDate = new Date("April 30, 2023");



				if (now > blackFridayStart && now < blackFridayEnd && !fromStudiesUrl) {
					// shouldShow = true;
					dealExpirationDate = blackFridayEnd;
					$('#holiday-text-1').text("Black Friday Special");
					$('#holiday-text-2').text("Buy one float 💧 one sauna 🔥 session and one 💆 massage , get one of each free!");
					$('#holiday-text-3').text("Offer valid through November 28th!");
					$(".holiday-link").attr("href", "https://clarityfloats.floathelm.com/store/giftcards/1221357");
					$(".holiday-link-main-page").text("Get the Black Friday Deal!");
				}

				if (now > holidayStartDate && now < holidayEndDate && !fromStudiesUrl) {
					// shouldShow = true;
					dealExpirationDate = holidayEndDate;
					$('#holiday-text-1').text("Holiday Special");
					$('#holiday-text-2').text("Buy one float 💧 or sauna 🔥 session, get one free!");
					$('#holiday-text-3').text("Offer valid till the end of the year!");
					$(".holiday-link").attr("href", "https://clarityfloats.floathelm.com/store/giftcards");
					$(".holiday-link-main-page").text("Get the Holiday Special!");
				}

				if (now > valentinesDayStartDate && now < valentinesDayEndDate && !fromStudiesUrl) {
					// shouldShow = true;
					dealExpirationDate = valentinesDayEndDate;
					$('#holiday-text-1').text("Valentine's Day Special!");
					$('#holiday-text-2').text("Two floats for $99 💧 and buy one sauna 🔥 session, get one free!");
					$('#holiday-text-3').text("Offer valid till Febuary 15th!");
					$(".holiday-link").attr("href", "https://clarityfloats.floathelm.com/store/giftcards");
					$(".holiday-link-main-page").text("Get the Valentine's Day Special!");
				}

				if (now > membershipDealStartDate && now < membershipDealEndDate && !fromStudiesUrl) {
					// shouldShow = true;
					$(".membership-deal-btn").show();
					console.log("SHOW");
					$('#membership-deal').modal({
						escapeClose: false,
						clickClose: true,
						showClose: false
					});
					dealExpirationDate = membershipDealEndDate;
					$('#membership-deal-text-1').text("April Membership Deal!");
					$('#membership-deal-text-2').text("Start a float 💧 or sauna 🔥 memberhsip for $1!");
					$('#membership-deal-text-3').text("Offer valid till April 30th!");
					$(".membership-deal-link").attr("href", "https://clarityfloats.floathelm.com/store");
					$(".membership-deal-link-main-page").text("Get the Membership Special!");
				}

				// if (shouldShow) {
				// 	$('#holiday-deal').modal({
				// 		escapeClose: false,
				// 		clickClose: true,
				// 		showClose: false
				// 	});
				// } else {
				// 	$(".BOGO").hide();
				// 	$("#holiday-deal").hide();
				// }

				$('#countdown').countdown({
					timestamp: dealExpirationDate,
					callback: function (days, hours, minutes, seconds) {
						var message = "";
						message += days + " day" + (days == 1 ? '' : 's') + ", ";
						message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
						message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
						message += seconds + " second" + (seconds == 1 ? '' : 's') + " ";

						message += "left!  Stock up today!";


						note.html(message);
					}
				});

			});
		});
	});


	//Deal banner end

	$(function () {
		if ($('[data-lazy-load-image]').length > 0) {
			$('[data-lazy-load-image]').each(function (index, element) {
				var img = new Image();
				img.src = $(element).data('lazy-load-image');
				if (typeof $(element).data('image-classname' !== 'undefined')) img.className = $(element).data('image-classname');
				$(element).append(img);
			});
		}
	});
});

function closeModal() {
	$.modal.close();
}
