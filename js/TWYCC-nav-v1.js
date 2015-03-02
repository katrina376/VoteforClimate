/* REQUIRE jQuery */
jQuery(document).ready(function() {
	$('.navdropHead').each(function(){
		$(this).mouseenter(navdropAppear);
		$(this).mouseleave(navdropHide);
	});

	function navdropAppear() {
		$('ul',$(this)).css('display','block');
	};
	function navdropHide() {
		$('ul',$(this)).css('display','none');
	};
});