$(function(){
    $(document).scroll(function(){
        let head = $("header").height();
        if($(document).scrollTop() >= head){
            $(".scroll-menu").addClass("scroll-menu__active");
        } else {
            $(".scroll-menu").removeClass("scroll-menu__active");
        }
    });
    $(document).scroll(function(){
        let head = $("header").height();
        if($(document).scrollTop() < head){
            $(".scroll-menu").removeClass("scroll-menu__actiiveRight");
        }
    });

    $(document).scroll(function(){
        var scroll = $(window).scrollTop() + $(window).height();
        var offs = $('.footer').offset().top;
        $counter = 0;
        if(scroll > offs && $counter == 0){
            $(".scroll-menu").removeClass("scroll-menu__active");
        }
    });

    $('.scroll-menu__click').click(function(){
        if($(this).text() == 'Menu'){
            $(this).text('Hide menu');
        } else {
            $(this).text('Menu');
        }
    });
    $('.scroll-menu__click').click(function(){
        $(".scroll-menu").toggleClass("scroll-menu__actiiveRight");
    });
});