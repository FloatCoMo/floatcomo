$(document).ready(function() {
	$('.navbar-nav li a').click(function(event) {
		if (!$(this).parent().hasClass('dropdown')) $('.navbar-ex1-collapse').collapse('hide');
	});

	$('#holiday-deal').modal({
		escapeClose: false,
		clickClose: false,
		showClose: false
	});
	
	$('#holiday-deal').modal();
	$(function() {
		$('#holiday-deal').on('click', function() {
		  $($(this).data('modal')).modal();
		  return false;
		});
	  });

	$(function() {
		if ($('[data-lazy-load-image]').length > 0) {
			$('[data-lazy-load-image]').each(function(index, element) {
				var img = new Image();
				img.src = $(element).data('lazy-load-image');
				if (typeof $(element).data('image-classname' !== 'undefined')) img.className = $(element).data('image-classname');
				$(element).append(img);
			});
		}
	});
});

function closeModal(){
	$.modal.close();
}
