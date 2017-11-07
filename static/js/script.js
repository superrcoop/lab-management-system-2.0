/* global $, document */

function login(student) {
	if (!student.password || !student.student_id) {
		return false;
	}
	return true;
}

function logout() {
	return true;
}

$( document ).ready(function () {
	$( ".button-collapse" ).sideNav();
	$( "#login-screen" ).addClass("is-shown");
	
	$( "#login-screen input" ).keyup(function () {
		$( this ).removeClass("invalid");
		$( this ).addClass("valid");
	});
	
	
	
	$( "#login-btn" ).click(function (e) {
		e.preventDefault();
		
		var student = {
			"student_id": $( "#student_id" ).val(),
			"password": $( "#password" ).val()
		};
		
		
		if (login(student)) {
			$( "#password" ).val(""); 
			$( "#student_id" ).val("");
			$( "#login-screen" ).removeClass("is-shown");
			$( "#home-screen" ).addClass("is-shown");
		} else {
			$( "#login-screen input" ).addClass("invalid");
		}
	});
	
	$( "#logout-btn" ).click(function (e) {
		e.preventDefault();
		logout();
		
		$( "#login-screen" ).addClass("is-shown");
		$( "#home-screen" ).removeClass("is-shown");
		
	});
	
});


