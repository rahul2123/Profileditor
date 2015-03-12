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




    $('.star').toggle(function() {
        $(this).attr('src', 'images/onlinestar.png');
    }, function() {
        $(this).attr('src', 'images/oflinestar.png');
    });




    $(".reply").live("click", function() {

        $(this).parent().find('.comment').css('display', 'block');

    });


    $(".submit").live("click", function() {

        var $reply = $(this).parent().find('.userreply').val();

        if ($reply == "") {

        } else {

            $(this).parent().parent().append('<div class="usercomments"><img  src="images/my-profile.png" alt=""><label class="ucomment">' + $reply + '</label></div>')
            $('.comment').css('display', 'none');

        }
        $(this).parent().find('.userreply').val("");

    });

    $(".like").live("click", function() {

        $(this).toggleClass('liked');
    });



    $('.add').click(function(event) {
        $('.content').prepend('  <div class="posts"><div class="userinfo"><img src="images/profilepic.png" alt=""><p>Name :-</p><p>Posted to</p><p>Group</p><img class="star" src="images/oflinestar.png" alt=""><div class="datetime"><p>12/12/2015</p><p>02:55pm</p></div></div><div class="message"><p>Lorem ipsum dolor sit amet, melius fabulas hendrerit his at, in tractatos voluptaria honestatis sed. Vix senserit percipitur scribentur eu. Cum iusto libris et, vim at probo bonorum. Ut his amet ullamcorper comprehensam, ad vim quod voluptatibus. Commune postulant principes mea ne.</p></div><button class="like">LIKE</button><button class="reply">REPLY</button><div class="comment"><input type="text" class="userreply" placeholder="Comment"><button class="submit">submit</button></div></div>')
        $('.newpost').css('display', 'block');
        $('.newpost').fadeOut(5000);

    });





    $('.newpost').click(function(event) {
        $('html,body').animate({
            scrollTop: 0
        }, 2000);
    });


});