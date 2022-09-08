$(function () {
	$('.offers-slider').slick({
		autoplay: true,
		autoplaySpeed: 4000,
		arrows: false,
		dots: true,
		pauseOnHover: false,
		pauseOnFocus: false,
	});

	$('.tours-slider').slick({
		infinite: true,
		slidesToShow: 3
	});

	$('.benefits-slider').slick({
		vertical: true,
		arrows: false,
		dots: true,
		verticalSwiping: true,
		autoplay: true,
		autoplaySpeed: 2500
	});
});