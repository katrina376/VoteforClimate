function resizer(){
	divWidth = $('.needResize').width();
	divHeight = $('.needResize').height();
	for (i = 0; i < $('.needResize').length; i++) {
		var imgWidth = $('.needResize img:eq('+i+')').width();
		var imgHeight = $('.needResize img:eq('+i+')').height();
		if (imgWidth > imgHeight) {
			$('.needResize img:eq('+i+')').height(divHeight);
			$('.needResize img:eq('+i+')').width(imgWidth*divHeight/imgWidth);
		} else {
			$('.needResize img:eq('+i+')').width(divWidth);
			$('.needResize img:eq('+i+')').height(imgHeight*divWidth/imgHeight);
		};
	};
};