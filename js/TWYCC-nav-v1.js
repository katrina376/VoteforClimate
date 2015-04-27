/* REQUIRE jQuery */
jQuery(document).ready(function() {
	$('.navdropHead').each(function(){
		$(this).mouseenter(navdropAppear);
		$(this).mouseleave(navdropHide);
	});

	function navdropAppear() {
		// $('ul',$(this)).css('display','block');
		$('ul',$(this)).slideToggle(200);
	};
	function navdropHide() {
		// $('ul',$(this)).css('display','none');
		$('ul',$(this)).slideToggle(200);
	};
});