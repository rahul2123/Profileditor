$(document).ready(function($) {
	
// $('.login-form').addClass('animated rotateIn');
	
var email,password;
$('#submit').click(function(event) {
	email=$('#email').val();
	password=$('#password').val();
	if(email=="rahul@gmail.com" && password=="rahul")
	{
 window.location.href = "home.html";
		alert("welcome");
	}
	else{
	$('.message').text("Email or password is incorrect!")
	}
						
return false;
	
});
});