$(document).ready(function() {



	 $(window).scroll({
            previousTop: 0
        },
        function() {
            var currentTop = $(window).scrollTop();
            if (currentTop < this.previousTop) {

                $(".header").slideDown(500);
            } else {

                $(".header").slideUp(500);
            }
            this.previousTop = currentTop;
        });


	 $(".change").toggle(function() {
	$(this).css('float', 'right');
	$(this).text("OFF");
	$('.sort').slideUp(1000);
}, function() {
	$(this).css('float', 'left');
	$(this).text("ON");
	$('.sort').slideDown(1000);

});





$("#submit").click(function(event) {
var pwd=$("#password").val();
var cnfpwd=$("#cnfpassword").val();



if(pwd==cnfpwd){
    
}
else
{
 event.preventDefault();
 alert("error password did not match")
}




});

});

