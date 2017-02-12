/**
 * Author : Edouard Germain
 * Example post-integration
 */

var canvas = document.getElementById('video');
var contexte= canvas.getContext('2d');
var width = canvas.width;
var  height = canvas.height;
canvas.addEventListener("click", onClick, false);
clear();

    
function redraw(x,y) {
    clear();


    var e = document.getElementById("shape");
    var shape = e.options[e.selectedIndex].value;
    console.log(shape);
    if(shape==2){
        contexte.beginPath();
        contexte.arc(x,y,30,0,Math.PI*2,true);

        contexte.closePath();
        contexte.stroke();
    }else if (shape==3){
        contexte.beginPath();
        contexte.rect(x,y,30,30);
        contexte.stroke();
        contexte.closePath();
    }else if(shape==1){
        contexte.font="20px Georgia";
        contexte.fillText(document.getElementById("text").value,x,y);
    }
}


function clear() {
    contexte.fillStyle="#ffffff";
    contexte.fillRect(0,0,width,height);
    contexte.fillStyle="#888888";
    contexte.strokeRect(0,0,width,height);
}

function onClick(e) {
    var element = canvas;
    var offsetX = 0, offsetY = 0

        if (element.offsetParent) {
      do {
        offsetX += element.offsetLeft;
        offsetY += element.offsetTop;
      } while ((element = element.offsetParent));
    }

    
    redraw(e.pageX - offsetX,e.pageY - offsetY);
}
