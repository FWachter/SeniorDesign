/*
Swerve senior design team profiles JavaScript
Author: Frederick Wachter - wachterfreddy@gmail.com
Created: 2016-06-25
*/

$(".profile").css({
	"width": $(".profile").height() + "px"
});

$(window).resize(
	function() {
		windowResize();
	}
);

function windowResize() {
	var profile_margin = ($(window).width() - ($(".profile").width() * 4)) / 8;

	$(".profile").css({
		"margin": "0px " + profile_margin + "px 0px" + profile_margin + "px"
	});
}


