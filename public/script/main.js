let i = 1;
$(function(){
    popup();
    menu();
    setInterval(carousel, 4000);
    sidemenu();
    tab();
})
function popup(){
    $("#popup button").click(function(){
        $("#popup").hide()
    });
};
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
function carousel(){
    if(i >= 3) i = 0;
    let xPos = -1440 * i;
    $(".img-wrap").animate({
        marginLeft: xPos,
    });
    i++;
};
function sidemenu(){
    $(".sidebar > ul > li").mouseenter(function(){
        $(this).addClass("side-on");
    });
    $(".sidebar > ul > li").mouseleave(function(){
        $(this).removeClass("side-on");
    });
};
function tab(){
    $(".tab-menu > li").click(function(){
        const num = $(".tab-menu > li").index($(this));
        $(".tab-menu > li").removeClass("info-active");
        $(".tab-contents > ul").removeClass("on");
        console.log(num);
        $(".tab-menu > li").eq(num).addClass("info-active");
        $(".tab-contents > ul").eq(num).addClass("on");
    });
};