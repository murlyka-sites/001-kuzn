$(document).ready(function() {
	$(".reviews__slider").slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 5000
	});

	$(".nav__item a").click(function() {
		var top = $($(this).attr("href")).offset().top - 45;
		$("html, body").animate({scrollTop: top},"slow")

		$(".nav__container").removeClass("open");
		return false;
	});

	$(".nav__humburger").click(function() {
		$(".nav__container").toggleClass("open");
	});

	$(".fancy").fancybox({
		padding: 0
	});

	$(".fancy").click(function() {
		$(".input--text").val("");
		$.fancybox("#call", {padding: 0});
	});

	// $(".shop__item").click(function() {
	// 	var text = trim($(this).find(".shop__item-desc").text()).replace(/ +/g," ");
	// 	$(".input--text").val(text);
	// 	$.fancybox("#call", {padding: 0});
	// });

	$(".smithy__item").click(function() {
		// var text = trim($(this).find(".smithy__item-desc").text()).replace(/ +/g," ");
		// $(".input--text").val(text);
		// $.fancybox("#call", {padding: 0});

		var top = $("#shop").offset().top - 45;
		$("html, body").animate({scrollTop: top},"slow")

		$(".nav__container").removeClass("open");
		return false;



	});

	$(".input--phone").mask("+7 (999) 999-99-99");

	$('form').ajaxForm({
		url: "mail.php",

		success: function(responseText, statusText, xhr, $form) {
			$.fancybox.close();
			$form.trigger('reset');
			$.fancybox("#success", {padding: 0});
			yaCounter38841895.reachGoal('call');
		}
	});

	$(".shop__item").click(function() {
		var url = $(this).data("url"),
			$frame = $("<iframe></iframe>"),
			$close = $("<div class='back-site'><div class='back-site__title'>Вернуться на <br/> gurukovki.ru </div></div>");

		$frame.addClass("frame");
		$frame.attr("src", url);
		$("body").addClass("onframe");

		$("body").append($frame, $close);

		$close.click(function(){
			$frame.remove();
			$close.remove();
			$("body").removeClass("onframe");
		});
	});

	$("#toTop").scrollToTop();

	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center: [55.14164456956634,37.4789084999999],
				zoom: 15,
				controls: []

			}, {
				searchControlProvider: 'yandex#search'
			}),
			myPlacemark = new ymaps.Placemark([55.14164456956634,37.4789084999999], {
				balloonContent: ''
			}, {
				preset: 'islands',
				iconColor: '#543621'
		    });

		myMap.geoObjects.add(myPlacemark);
	});
});

$(window).on('load', function() {
	if(!isMobile.any) {
		new WOW().init();
	}
});



function trim(str, charlist) {
	charlist = !charlist ? ' \\s\xA0' : charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '\$1');
	var re = new RegExp('^[' + charlist + ']+|[' + charlist + ']+$', 'g');
	return str.replace(re, '');
}



(function($) {
	$.fn.scrollToTop=function(){
		$(this).hide().removeAttr("href");
		if($(window).scrollTop()!="0"){
			$(this).fadeIn("slow")
		}
		var scrollDiv=$(this);
		$(window).scroll(function(){
			if($(window).scrollTop()=="0"){
				$(scrollDiv).fadeOut("slow")
			}else{
				$(scrollDiv).fadeIn("slow")
			}
		});
		
		$(this).click(function(){
			$("html, body").animate({scrollTop:0},"slow")
		})
	}
})(jQuery);