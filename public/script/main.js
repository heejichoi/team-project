$(function(){
    slide();
    slide2();

})
function slide(){
    $(".right").on('click',function(){
        let currItem = $("#items li.top")
        let nextItem = currItem.next();
        if(!nextItem.length) nextItem = $("#items li:first");
        currItem.removeClass("top")
        nextItem.addClass("top")

    })
    $(".left").on('click',function(){
        let nowItem = $("#items li.top")
        let prevItem = nowItem.prev();
        if(!prevItem.length) prevItem = $("#items li:last");
        nowItem.removeClass("top")
        prevItem.addClass("top")

    })
}
function slide2(){
    $(".right2").on('click',function(){
        let currItem = $("#items2 li.top")
        let nextItem = currItem.next();
        if(!nextItem.length) nextItem = $("#items2 li:first");
        currItem.removeClass("top")
        nextItem.addClass("top")

    })
    $(".left2").on('click',function(){
        let nowItem = $("#items2 li.top")
        let prevItem = nowItem.prev();
        if(!prevItem.length) prevItem = $("#items2 li:last");
        nowItem.removeClass("top")
        prevItem.addClass("top")

    })
}

