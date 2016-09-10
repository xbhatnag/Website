$(document).ready(function(){
		  $('.slickcarousel').slick({
		    arrows: false,
		    mobileFirst: true
		  });

	    var textnowTop = $('#textnow').offset().top;
	    var textnowHeight = $('#textnow').height();

	    var learntHereTop = $('#learnt-here').offset().top;
	    var learntHereHeight = $('#learnt-here').height();

	    var recoTop = $('#reco').offset().top;
	    var recoHeight = $('#reco').height();

	    var docsTop = $('#docs').offset().top;
	    var docsHeight = $('#docs').height();

	    var pic1Top = $('#pic1').offset().top;
	    var pic1Height = $('#pic1').height();

	    var windowTop = $(window).height() / 3;
	    var windowBottom = windowTop * 2;

	    $(window).resize(function() {
	    	textnowTop = $('#textnow').offset().top;
	    	textnowHeight = $('#textnow').height();

	    	learntHereTop = $('#learnt-here').offset().top;
	    	learntHereHeight = $('#learnt-here').height();

	    	recoTop = $('#reco').offset().top;
	    	recoHeight = $('#reco').height();

	    	docsTop = $('#docs').offset().top;
	    	docsHeight = $('#docs').height();

	    	pic1Top = $('#pic1').offset().top;
	    	pic1Height = $('#pic1').height();

	    	windowTop = $(window).height() / 5;
	    	windowBottom = windowTop * 4;
	    })

	    $(window).scroll(function(){
	    	if (isInView(calcPosition(calcCenter(textnowTop, textnowHeight)))) {
	    		$('.slickcarousel').slick('slickGoTo',0);
	    	}
	    	if (isInView(calcPosition(calcCenter(learntHereTop, learntHereHeight)))) {
	    		$('.slickcarousel').slick('slickGoTo',1);
	    	}
	    	if (isInView(calcPosition(calcCenter(recoTop, recoHeight)))) {
	    		$('.slickcarousel').slick('slickGoTo',2);
	    	}
	    	if (isInView(calcPosition(calcCenter(docsTop, docsHeight)))) {
	    		$('.slickcarousel').slick('slickGoTo',3);
	    	}
	    	if (isInView(calcPosition(calcCenter(pic1Top, pic1Height)))) {
	    		$('.slickcarousel').slick('slickGoTo',4);
	    	}
	    })

	    function calcCenter(top, height) {
	    	return top + (height / 2);
	    }

	    function isInView(center) {
	    	return center > windowTop && center < windowBottom;
	    }

	    function calcPosition(top) {
	    	return top - $(window).scrollTop();
	    }
});