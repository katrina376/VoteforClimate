function navbar() {
	$('#navbar #mobile').bind("click",verIn());
}
function verIn() {
    TweenLite.to("#verticalBar", 0.5, {left:"0", ease:Power2.easeInOut});
    $('body').bind("click",verOut()); //swipeleft? (needed jQuery Mobile)
}
function verOut() {
	TweenLite.to("#verticalBar", 0.5, {left:"-50%", ease:Power2.easeInOut});
}