$(document).ready(function() {

	$('.strips_strip').on('click', function() {
		$(this).addClass('expand');
		$(this).parent().addClass('visible');
	});
	$('.close_strip').on('click', function() {
		$('.strips_strip').removeClass('expand');
		$(this).parent().removeClass('visible');
	});
});