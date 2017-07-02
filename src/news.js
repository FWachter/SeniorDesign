/*
Swerve senior design team in the news JavaScript
Author: Frederick Wachter - wachterfreddy@gmail.com
Created: 2016-07-01
*/

var screenWidth = $(window).width();

$(window).resize(
	function() {
		windowResize();
	}
);

function windowResize() {
	screenWidth = $(window).width();
	$("#newsTitle").css({
		"left": screenWidth/2 - 95 + "px"
	})
}

var linkNumber;
$('.newsImage').hover(
	function() {
		linkNumber = $('.newsImage').index($(this));
		$(this).css("opacity","1");
		$(".linkText:eq("+linkNumber+")").css("opacity","0.1");
	}, function() {
		linkNumber = $('.newsImage').index($(this));
		$(this).css("opacity","");
		$(".linkText:eq("+linkNumber+")").css("opacity","");
	}
    );
    $('.linkText').hover(
	function() {
		linkNumber = $('.linkText').index($(this));
		$(this).css("opacity","0.1");
		$(".newsImage:eq("+linkNumber+")").css("opacity","1");
	}, function() {
		linkNumber = $('.linkText').index($(this));
		$(this).css("opacity","");
		$(".newsImage:eq("+linkNumber+")").css("opacity","");
	}
    );
    $('#newsSection').hover(
	function() {
		$('#sidebar').css("right","-63px");
	}, function() {
		$('#sidebar').css("right","0px");
	}
);

var newsMoveButton, newsLastEntry ;
var currentStory = 1;
var totalStories = $('.links').length;
var newsOffsetLeft = 9;
var allNewsFits = 0;
function newsMove(newsMoveButton) {
	newsLastEntry = (($('.newsLink:eq(' + (0) + ')').width() + 20) * (totalStories)) - 20;
	if ((newsMoveButton == 1) && (currentStory != 1)) {
		currentStory -= 1;
		newsOffsetLeft -= ($('.newsLink:eq(' + (currentStory - 1) + ')').width() + 20);
	} else if ((newsMoveButton == 2) && (currentStory != totalStories) && (allNewsFits != 1)) {
		newsOffsetLeft += $('.newsLink:eq(' + (currentStory - 1) + ')').width() + 20;
		currentStory += 1;
	}
	$('.inline').css("left",-newsOffsetLeft + "px");
	if ((newsLastEntry - screenWidth - newsOffsetLeft) < 0) {
		allNewsFits = 1;	
	} else {
		allNewsFits = 0;	
	}
}
