$(document).ready(function($) {
    var progress = 0;
    var submit = 0;
    var done = 0;

    $(".change").toggle(function() {
        $(this).css('float', 'right');
        $(this).text("OFF");
        $(this).css('background', 'linear-gradient(to bottom, #ff3019 0%,#cf0404 100%)');


    }, function() {
        $(this).css('float', 'left');
        $(this).text("ON");
        $(this).css('background', ' linear-gradient(to bottom, #b4ddb4 0%,#83c783 0%,#005700 0%,#002400 100%)');
    });


    $("#update").click(function(event) {
        $('#logo').click();

    });
    $("a[href=#FourthTab]").click(function(event) {
        setTimeout("google.maps.event.trigger(map, 'resize');", 0);

    });

    $('#logo').change(function(event) {



        var img = URL.createObjectURL(event.target.files[0]);
        if (img != null) {
            submit++;
            $('.coverpicture').attr('src', img);
            if (submit == 1) {
                progress += 50;
                $('.pie_progress').asPieProgress('go', progress);
            }
        }
    });





    $('.cropp').click(function(event) {
        $('.modaal').css('display', 'block');
    });





    $('body').on('click', '#btnCrop', function(event) {

        $('.modaal').css('display', 'none');

        done++;
        console.log(done);
        if (done == 1) {
            progress += 50;
            $('.pie_progress').asPieProgress('go', progress);

        }

    });



    $("#cancel").click(function(event) {
        $('.modaal').css('display', 'none');
    });



});









// <input type="file" name="uplFile" id="uplFile" onchange="this.form.txtFilePath.value=this.value" />
// <input type="hidden" name="txtFilePath" id="txtFilePath" />