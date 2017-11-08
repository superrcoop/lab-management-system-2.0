/* global $, document */

window.onload=function(){
	var pages = document.getElementById('page');
	var loginscreen = document.getElementById('login-screen');
	var loginButton=document.getElementById('login-btn');
	//console.log(loginButton);
	var dashboard=document.getElementById('home-screen');
	pages.innerHTML=loginscreen.innerHTML;
	loginButton.onclick=function(){
		//document.removeChild(loginscreen);
		pages.innerHTML=dashboard.innerHTML;
	};
	
};
function login(student) {
	if (!student.password || !student.student_id) {
		return false;
	}
	return true;
}

function logout() {
	return true;
}
