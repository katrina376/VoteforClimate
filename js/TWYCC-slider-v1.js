jQuery(document).ready(function(){
	/* blur */
	$('#sliderBlock a').each(function(){
		var bgUrl = $('img',this).attr('src');
		$(this).css('background-image','url(' + bgUrl + ')');
	});
	$('#sliderBlock a header').blurjs({
        source: '#sliderBlock a',
        radius: 50,
        overlay: 'rgba(125, 125, 125, 0.1)'
    });

	/* slide */
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
		slideChange();
		clearInterval(clock);
		clock = setInterval(timer,5000);
	}

	function slideChange(){
		$('.sliderBtnIcn:not(' + present + ')').removeClass('active')      // off
		$('.sliderBtnIcn:eq(' + present + ')').addClass('active')     // on
		$('#sliderBlock a:not(' + present + ') header').animate({'opacity': 0}, 500, function(){
			$('#sliderBlock').animate({'left': - photoWidth * present}, 500, function(){
				$('#sliderBlock a:eq(' + present + ') header').animate({'opacity': 1}, 500);
			});
		});
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