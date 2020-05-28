$(document).ready(function(){
    $("body").on('click', '.menu-btn', function(event){
        event.preventDefault();
        $(this).toggleClass('active');
        $('.header').toggleClass('active');

        if ($('.menu-btn').hasClass('active')) {
            $('.header-mobile').css('background', 'transparent');
            $('.body').css('overflow', 'hidden');
        } else {
            $('.header-mobile').css('background', '');
            $('.body').css('overflow', 'auto');
        }
    });
});

