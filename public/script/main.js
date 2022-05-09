let i = 0

function carousel(){
    if(i >= 3) i=0;
    let yPos = -300* i;
   $("#items").css({
       marginTop : yPos
   })
   i++;
}