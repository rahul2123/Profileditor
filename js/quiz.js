$(document).ready(function($) {

//start of autocomplete
 var i;
      var text;
      var addtext;
      var availableTutorials = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
      ];
      $( "#autocomplete-1" ).autocomplete({
      source: availableTutorials
      });



      $('#submittag').click(function(event) {
      text=$('#autocomplete-1').val();
      var found=$.inArray(text, availableTutorials);
      if(found>-1){
      $('.tags').append("<span>"+text+"<img class='close' src='images/close.png' alt='close' width='15'></span");
      for(i=0;i<availableTutorials.length;i++)
      {
      if(availableTutorials[i]==text)
      {
      
      availableTutorials.splice(i,1);
      
      }
      }
      $('#autocomplete-1').val('');
      }
      
      
      
      });

//click function
      $('.tags ').on('click', '.close', function(event) {
      $(this).parent().remove();

      addtext=$(this).parent().text();
      availableTutorials.push(addtext);
      availableTutorials.sort();
      });


//enter keypress function

   $("#autocomplete-1").keydown(function (e) {
  if (e.keyCode == 13) {
     $("#submittag").click();
  }
});
   

//on click of item

$("body").on('click', '.ui-menu-item', function(event) {
     $("#submittag").click();
   /* Act on the event */
});
//end of autocomplete



    $('button').click(function(event) {
        var $val = $('.tagselector').val();

        if ($val == "") {

        } else {
            $('.collect').append('<label for="' + $val + '">' + $val + '<img class="closetag" src="images/close.png" alt="" width="10"></label>');
        }
        var $len = $('option').length;
        var i = 0;

        for (i = 0; i < $len; i++) {
            if ($('option')[i].value == $val) {
                $('option')[i].remove();
                $('.tagselector').val("");
            }

        }
        $('.tagselector').val("");
    });


    $(".collect").on('click', '.closetag', function(event) {
        $(this).parent().remove();
        var $removed = $(this).parent().attr('for');
        
        /* Act on the event */

        $('datalist').append('<option value="' + $removed + '">');

    });
    $('h3').click(function(event) {
        $("html, body").animate({
            scrollTop: $(document).height() - $(window).height()
        }, 2000);
    });

    //checked number of radio buttons selected
    var countChecked = function() {
        var n = $("input:checked").length;
        $('progress').attr('value', n);
    };
    




    $('.quiz').on('click', 'input[type=radio]', function(event) {
    countChecked();	
    	/* Act on the event */
    });


    //quiz answers check
    var answer = [2, 6, 10, 14];



    $('#submit').click(function(event) {
        var count = 0;
        var choice = 1;
        for (var i = 0; i < $('.quiz').children().length; i++) {
            if ($('input[type="radio"][name="answer' + choice + '"]:checked').val() == answer[i]) {
                count++;
            }

            choice++;


        }
        alert("Your scored " + count + " points");
        $("input:radio").removeAttr("checked");
        $('progress').attr('value', 0);
    });


    //reset the quiz
    $('#reset').click(function(event) {
        $("input:radio").removeAttr("checked");
                $('progress').attr('value', 0);
    });



    //adding a question

    $('#addques').click(function(event) {
 var length=$('.addques').find('input').length;


//check if all input have been filled 
var flag=0;

for(var i=0;i<length;i++){
	if ($('.addques').find('input').eq(i).val()=="") {
flag=1;
	}
}


if(flag==0){

var newquestion=$('#newquest').val();
var length=$('.quiz').children().length+1;
$('.quiz').append(' <div class="questions"><h4>'+newquestion+'</h4><input  type="radio" name="answer'+length+'" value="'+$('#opt1').val()+'" ><strong >'+$('#opt1').val()+'</strong><br><input  type="radio" name="answer'+length+'" value="'+$('#opt2').val()+'" ><strong >'+$('#opt2').val()+'</strong><br><input  type="radio" name="answer'+length+'" value="'+$('#opt3').val()+'" ><strong >'+$('#opt3').val()+'</strong><br><input  type="radio" name="answer'+length+'" value="'+$('#opt4').val()+'" ><strong >'+$('#opt4').val()+'</strong><br><hr></div>');



var index=$("#options").val();

var ans=$('.addques').find('input').eq(index).val();
answer.push(ans);
$('.addques').find('input').val("");

var max=$('.quiz').children().length;

   
$('progress').attr('max', max);
$('progress').attr('value', count);
}else{
	alert("fields not filled closing down");
}


$('.addques').hide();

    });


$("#addquestion").click(function(event) {
$('.addques').show();
});




});














// if($('.addques').find('input').val()=="")
// 	{

// 	}else{
//     					var newquestion=$('#newquest').val();
//     					var length=$('.quiz').children().length+1;
// $('.quiz').append(' <div class="questions"><h4>'+newquestion+'</h4><input  type="radio" name="answer'+length+'" value="'+$('#opt1').val()+'" ><strong >'+$('#opt1').val()+'</strong><br><input  type="radio" name="answer'+length+'" value="'+$('#opt2').val()+'" ><strong >'+$('#opt2').val()+'</strong><br><input  type="radio" name="answer'+length+'" value="'+$('#opt3').val()+'" ><strong >'+$('#opt3').val()+'</strong><br><input  type="radio" name="answer'+length+'" value="'+$('#opt4').val()+'" ><strong >'+$('#opt4').val()+'</strong><br><hr></div>');
// }
