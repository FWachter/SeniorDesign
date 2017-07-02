/*
Swerve senior design team member profiles JavaScript
Author: Frederick Wachter - wachterfreddy@gmail.com
Created: 2016-07-01
*/

$(".profile").flip({
  trigger: 'hover'
});

$(".profile").hover(
	function() {
		$(".profile").addClass("gray_out");
		$(this).removeClass("gray_out");
	}, function() {
		$(".profile").removeClass("gray_out");
	}
);


