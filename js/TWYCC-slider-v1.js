jQuery(document).ready(function(){
	var present = 0;
	var all = $('#sliderBlock img').length;
	var clock = setInterval(timer,5000);
	var photoWidth = $('#sliderBlock img').width();

	$(window).resize(function(){
		photoWidth = $('#sliderBlock img').width();
		slideChange();
	});

	$('.sliderBtnIcn').each(function(){
		$(this).click(slideClick);
	})

	function timer(){
		present++;
		if (present >= all) {
			present = 0;
		}
		slideChange();
	}

	function slideClick(){
		present = $(this).index();
		clearInterval(clock);
		clock = setInterval(timer,5000);
		slideChange();
	}

	function slideChange(){
		$('.sliderBtnIcn:not(' + present + ')').removeClass('active')      // off
		$('.sliderBtnIcn:eq(' + present + ')').addClass('active')     // on
		//$('#sliderBlock').animate({'left': - photoWidth * present},500);
		//alert(present)
	}

/*
	$('#slider').swipeLeft(function(){
		present = present + 1;
		if (present >= all) {
			present = present - 1;
		} else {
			clearInterval(clock);
			clock = setInterval(timer,5000);
			slideChange();
		};
	});
	$('#slider').swipeRight(function(){
		present = present - 1;
		if (present < 0) {
			present = present + 1;
		} else {
			clearInterval(clock);
			clock = setInterval(timer,5000);
			slideChange();
		};
	});
*/
});