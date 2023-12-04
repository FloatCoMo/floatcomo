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

				var shouldShow = false;
				var note = $('#note');
				var dealExpirationDate = null;

				var blackFridayStart = new Date("November 20, 2023");
				var blackFridayEnd = new Date("November 27, 2023");

				var holidayStartDate = new Date("December 5, 2022");
				var holidayEndDate = new Date("December 31, 2022");

				var valentinesDayStartDate = new Date("Febuary 1, 2023");
				var valentinesDayEndDate = new Date("Febuary 14, 2023");

				var membershipDealStartDate = new Date("September 1, 2023");
				var membershipDealEndDate = new Date("September 30, 2023");
				
				var deals = [
					{
						name: "Black Friday",
						startDate: blackFridayStart,
						endDate: blackFridayEnd,
						text1: "Black Friday Special",
						text2: "Buy one float 💧 one sauna 🔥 session and one 💆 massage, get one of each free!",
						dealLink: "https://clarityfloats.floathelm.com/store/giftcards/1221357"
					},
					{
						name: "Holiday Special",
						startDate: holidayStartDate,
						endDate: holidayEndDate,
						text1: "Holiday Special",
						text2: "Buy one float 💧 or sauna 🔥 session, get one free!",
						dealLink: "https://clarityfloats.floathelm.com/store/giftcards"
					},
					{
						name: "Valentine's Day",
						startDate: valentinesDayStartDate,
						endDate: valentinesDayEndDate,
						text1: "Valentine's Day Special!",
						text2: "Two floats for $99 💧 and buy one sauna 🔥 session, get one free!",
						dealLink: "https://clarityfloats.floathelm.com/store/giftcards"
					},
					{
						name: "Membership Deal",
						startDate: membershipDealStartDate,
						endDate: membershipDealEndDate,
						text1: `${currentMonthName()} Membership Deal!`,
						text2: "Start a float 💧 or sauna 🔥 membership for $1!",
						dealLink: "https://clarityfloats.floathelm.com/store"
					}
				];
				
				function setupDeal(deal) {
					var now = new Date();
					if (now > deal.startDate && now < deal.endDate && !fromStudiesUrl) {
						shouldShow = true;
						$('#holiday-text-1').text(deal.text1);
						$('#holiday-text-2').text(deal.text2);
						$('#holiday-text-3').text(`Offer valid through ${formatDate(deal.endDate)}`);
						$(".holiday-link").attr("href", deal.dealLink);
						$(".holiday-link-main-page").text(`Get the ${deal.text1}!`);
					}
				}
				
				deals.forEach(setupDeal);

				if (shouldShow) {
					$('#holiday-deal').modal({
						escapeClose: false,
						clickClose: true,
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

function formatDate(date) {
    // Get the day and month from the date
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const monthName = monthNames[monthIndex];

    // Determine the appropriate suffix
    let suffix;
    if (day % 10 === 1 && day !== 11) {
        suffix = 'st';
    } else if (day % 10 === 2 && day !== 12) {
        suffix = 'nd';
    } else if (day % 10 === 3 && day !== 13) {
        suffix = 'rd';
    } else {
        suffix = 'th';
    }

    // Return the formatted date string
    return `${monthName} ${day}${suffix}`;
}

function currentMonthName() {
	let currentDate = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[currentDate.getMonth()];
}


