// brand slider
$(".branding__slider").slick({
	speed: 3000,
	autoplay: true,
	autoplaySpeed: 0,
	centerMode: true,
	cssEase: "linear",
	slidesToShow: 7,
	slidesToShow: 8,
	slidesToScroll: 1,
	variableWidth: true,
	infinite: true,
	initialSlide: 1,
	arrows: false,
	buttons: false,
});

$(".testimonial-Slider").owlCarousel({
	loop: true,
	margin: 20,
	nav: false,
	dot: true,
	center: true,
	responsiveClass: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: false,
	responsive: {
		0: {
			items: 1,
			stagePadding: 40,
		},
		600: {
			items: 1,
			stagePadding: 100,
		},
		991: {
			items: 1,
			stagePadding: 200,
		},
		1200: {
			items: 2,
			stagePadding: 100,
		},
		1600: {
			items: 2,
			stagePadding: 100,
		},
	},
});

const $owl = $(".calender-slider");

$owl.owlCarousel({
	loop: true,
	margin: 0,
	nav: false,
	dot: true,
	center: true,
	responsiveClass: true,
	smartSpeed: 1000,
	responsive: {
		0: {
			items: 1,
			stagePadding: 50,
		},
		768: {
			items: 2,
			stagePadding: 80,
		},
		991: {
			items: 3,
			stagePadding: 100,
		},
		1200: {
			items: 3,
			stagePadding: 100,
		},
		1500: {
			items: 3,
			stagePadding: 200,
		},
	},
});

$owl.on("initialized.owl.carousel changed.owl.carousel", function () {
	const $allItems = $(this).find(".owl-item");

	// reset
	$allItems.removeClass("prev next");

	// real center (Owl provided)
	const $center = $allItems.filter(".center");

	// only active siblings
	$center.prevAll(".active").first().addClass("prev");
	$center.nextAll(".active").first().addClass("next");
});

$(".cal-year-slider").owlCarousel({
	items: 1,
	loop: true,
	margin: 0,
	nav: true,
	dot: true,
	center: true,
	responsiveClass: true,
	smartSpeed: 1000,
	navText: ['previous month <i><img src="assets/img/icon/arrow-left.svg" alt=""></i>', '<i><img src="assets/img/icon/arrow-right-line.svg" alt=""></i> next month'],
});

//https:demo.mobiscroll.com/trialactivatedsuccess/javascript/eventcalendar/desktop-month-view
var inst = mobiscroll.eventcalendar("#demo-desktop-month-view", {
	theme: "ios",
	themeVariant: "light",
	clickToCreate: true,
	dragToCreate: true,
	dragToMove: false,
	dragToResize: false,
	eventDelete: true,
	view: {
		calendar: { labels: true },
	},
	onEventClick: function (args) {
		mobiscroll.toast({
			message: args.event.title,
		});
	},
});

mobiscroll.getJson(
	"https://trial.mobiscroll.com/events/?vers=5",
	function (events) {
		inst.setEvents(events);
	},
	"jsonp"
);
