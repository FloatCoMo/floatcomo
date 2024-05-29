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


				var mothersDayStart = new Date("April 20, 2024");
				var mothersDayEnd = new Date("May 13, 2024");


				var fathersDayStart = new Date("May 3, 2024");
				var fathersDayEnd = new Date("June 17, 2024");


				var holidayStartDate = new Date("December 4, 2023");
				var holidayEndDate = new Date("December 31, 2023");

				var valentinesDayStartDate = new Date("Febuary 1, 2024");
				var valentinesDayEndDate = new Date("Febuary 14, 2024");

				var membershipDealStartDate = new Date("April 1, 2024");
				var membershipDealEndDate = new Date("April 20, 2024");
				
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
						name: "Mother's Day",
						startDate: mothersDayStart,
						endDate: mothersDayEnd,
						text1: "Mother's Day Deal",
						text2: "One 60 min float and one 60 min massage for $109",
						dealLink: "https://clarityfloats.floathelm.com/store/giftcards/1224336"
					},
					{
						name: "Father's Day",
						startDate: fathersDayStart,
						endDate: fathersDayEnd,
						text1: "Father's Day Deal",
						text2: "BOGO 60 min floats (two floats) $69",
						dealLink: "https://clarityfloats.floathelm.com/store/giftcards/1225556"
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
						massageText: `ALSO: Start a massage membership 💆 - get a free massage at the end of ${nextMonthName()}!💫*`,
						dealLink: "https://clarityfloats.floathelm.com/store"
					}
				];
				
				function setupDeal(deal) {
					var now = new Date();
					if (now > deal.startDate && now < deal.endDate && !fromStudiesUrl) {
						shouldShow = true;
						console.log(deal.name);
						dealExpirationDate = deal.endDate
						// console.log(dealExpirationDate);
						$('#holiday-text-1').text(deal.text1);
						$('#holiday-text-2').text(deal.text2);
						if(deal.massageText){
							$('#holiday-text-3a').text(deal.massageText);
						}
						$(".holiday-link").attr("href", deal.dealLink);
						$(".holiday-link-main-page").text(`Get the ${deal.text1}!`);
						$('#holiday-text-4').text(`Offer valid through ${formatDate(deal.endDate)}`);
						if(deal.massageText){
							$('#holiday-text-5').text(`*Must have an active membership with a valid credit card on the last day of ${nextMonthName()}`);
						}
					}
				}
				console.log("HJI");
				deals.forEach(setupDeal);
				console.log(dealExpirationDate);

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

				$('#countdown1').countdown(dealExpirationDate, {
					elapse:     false,
					precision:  5,
					defer:      false
				  })

				  $('#clock').countdown(dealExpirationDate).on('update.countdown', function(event) {
					var $this = $(this).html(event.strftime(''
					//   + '<span>%-w</span> week%!w '
					  + '<span>%D</span> days '
					  + '<span>%H</span> hr '
					  + '<span>%M</span> min '
					  + '<span>%S</span> sec till deal ends!'));
				  });

				// $('#countdown').countdown({
				// 	timestamp: dealExpirationDate,
				// 	callback: (days, hours, minutes, seconds) => {
				// 		// console.log("HERE");
				// 		var message = "";
				// 		message += days + " day" + (days == 1 ? '' : 's') + ", ";
				// 		message += hours + " hour" + (hours == 1 ? '' : 's') + ", ";
				// 		message += minutes + " minute" + (minutes == 1 ? '' : 's') + " and ";
				// 		message += seconds + " second" + (seconds == 1 ? '' : 's') + " ";

				// 		message += "left!  Stock up today!";
				// 		// console.log(message);
				// 		note.html(message);
				// 	}
				// });

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


function nextMonthName() {
	let currentDate = new Date();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	return months[currentDate.getMonth()+1];
}
