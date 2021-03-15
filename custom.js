$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20)
        {
        $('.navbar').addClass("sticky");

        }else{
            $(".navbar").removeClass("sticky");
        }
    })
    $(".icon").click(function(){
        $(".navbar .menu").toggleClass("active");
        $(".icon i").toggleClass("active");
    })
})