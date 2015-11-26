$(document).ready(function() {
	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		items : 1,
		lazyLoad : true,
		responsive: false
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_button").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function() {
		owl.trigger("owl.prev");
	});
});
$(document).ready(function() {
	var owl = $(".b-slider__text");
	owl.owlCarousel({
		items : 1,
		lazyLoad : true,
		responsive: false
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.prev");
		} else {
			owl.trigger("owl.next");
		}
		e.preventDefault();
	});
	$(".next_arrow").click(function() {
		owl.trigger("owl.next");
	});
	$(".prev_arrow").click(function() {
		owl.trigger("owl.prev");
	});
});