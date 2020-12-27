$(document).ready(function(){
    $(window).scroll(function(){
        console.log(window.innerWidth);
        
                if(this.scrollY > 70){
                $('.nav').addClass("sticky");
                $('.nav').removeClass("navbar-dark");
                $('.nav').addClass("navbar-light");
                $('.nav').addClass("fixed-top");
                $('.navbar').css('posiion', "fixed");
                $('.logo').attr('src', "img/original_logo.svg");
                }
                else{
                $('.nav').removeClass("sticky");
                $('.nav').addClass("navbar-dark");
                $('.nav').removeClass("navbar-light");
                $('.nav').removeClass("fixed-top");
                $('.logo').attr('src', "img/logo.svg");

                }
            
    })


});
