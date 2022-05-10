let i = 1;
$(function(){
    popup();
    setInterval(carousel, 4000);
    tab();
    mobileMenu();
    menuDown();
})
function popup(){
    $("#popup button").click(function(){
        $("#popup").hide()
    });
};
function carousel(){
    if(i >= 3) i = 0;
    let xPos = -425 * i;
    $(".img-wrap").animate({
        marginLeft: xPos,
    });
    i++;
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
function mobileMenu(){
    $(".burger").click(function(){
        $(this).hide()
        $(".header-wrap").show()
        $(".close").show()
    })
    $("#gnb > li").click(function(){
        $("#gnb > lnb").show()
    })
    $(".close").click(function(){
        $(".header-wrap").hide()
        $(".burger").show()
        $(".close").hide()
    })
};
function menuDown(){
    $("#gnb > li").click(function(){
        $(this).children(".lnb").show();
    })
}