$(function(){
    menu();
})
function menu(){
    $("#gnb > li").mouseenter(function(){
        $(".gnb-bg").stop().animate({
            height: 300
        });
        $(".lnb").stop().slideDown();
    });
    $("#gnb > li").mouseleave(function(){
        $(".gnb-bg").stop().animate({
            height: 0
        });
        $(".lnb").stop().slideUp();
    });
};