$(document).ready(function () {
	$('.navbar-nav li a').click(function (event) {
		if (!$(this).parent().hasClass('dropdown')) $('.navbar-ex1-collapse').collapse('hide');
	});

	$('#holiday-deal').modal();
	// $(function () {
	// 	$('#holiday-deal').on('click', function () {
	// 		$($(this).data('modal')).modal();
	// 		return false;
	// 	});
	// });


	//Deal banner start

	jQuery(function ($) {
		$(document).ready(function () {
			$('.navbar-default').stickUp();
			fbq('track', 'ViewContent');
			$(function () {
				var note = $('#note');
				var dealExpirationDate = new Date("Feburary 15, 2022");
				var now = new Date();
				if (now < dealExpirationDate) {
					$('#holiday-deal').modal({
						escapeClose: false,
						clickClose: false,
						showClose: false
					});
				} else {
					$(".BOGO").hide();
					$("#holiday-deal").hide();
				}

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
