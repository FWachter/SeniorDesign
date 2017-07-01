/*
Swerve senior design team animation JavaScript
Author: Frederick Wachter - wachterfreddy@gmail.com
Created: 2016-06-25
*/

animation(); // start animation

var transition_type = "all 0.5s ease 0s";
var animation_no_wait = 500;
var animation_wait    = 1000;

function animation() {
	animationStart();
	setTimeout(function() {
		animationPart1();
		setTimeout(function() {
			animationPart2();
			setTimeout(function() {
				animationPart3();
			}, animation_wait);
		}, animation_no_wait);
	}, animation_wait);
}

function animationStart() {
	var window_width  = $(window).width();
	var window_height = $(window).height();
	var leave_window_adjust = 100;

	$("#logo").addClass("animation");
	$("#logo_bracket_left").css({
		"margin-left": -(window_width/2 + leave_window_adjust) + "px"
	});
	$("#logo_bracket_right").css({
		"margin-left": (window_width/2 + leave_window_adjust) + "px"
	});
	$("#logo_line").css({
		"margin-left": "-17.5px",
		"margin-top": -(window_height/2 + leave_window_adjust) + "px"
	});
	$("#logo_words").css({
		"margin-left": "10px",
		"width": "0px"
	});
}

function animationPart1() {
	$("#logo_bracket_left").css({
		"margin-left": "-34px"
	});
	$("#logo_bracket_right").css({
		"margin-left": "11px"
	});
	$("#logo_line").css({
		"margin-top": ""
	});
	$(".logo").css({
		"transition": transition_type
	});
}

function animationPart2() {
	$("#logo_bracket_left").css({
		"margin-left": "-99px"
	});
	$("#logo_bracket_right").css({
		"margin-left": "123px"
	});
	$("#logo_line").css({
		"margin-left": "-83px"
	});
	$("#logo_words").css({
		"margin-left": "-53px",
		"width": ""
	});
}

function animationPart3() {
	$("#animation").css({
		"height": "70px",
		"transition": transition_type
	});
	$(".logo").css({
		"height": "50px"
	});
	$(".logo_bracket").css({
		"width": "10px"
	});
	$("#logo_bracket_left").css({
		"top": "60px",
		"margin-left": "-18px"
	});
	$("#logo_bracket_right").css({
		"top": "60px",
		"margin-left": "8px"
	});
	$("#logo_line").css({
		"top": "60px",
		"width": "20px",
		"margin-left": "-10px"
	});
	$("#logo_words").css({
		"margin-left": "10px",
		"top": "60px",
		"width": "0px",
	});
}

function animationEnd() {

}


