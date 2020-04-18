document.addEventListener("keydown", changeSize);

function changeSize() {
    var e = event.keyCode;
    var bSize = document.getElementById("balloonImg").style.fontSize;
    if (e == 73){
        if (parseInt(bSize)>60){
            document.getElementById("balloonImg").innerHTML = "💥";
            document.removeEventListener('keyup', changeSize);
        }
        else{
            if(bSize==""){
                bSize=30;
            }
            var inflateSize = parseInt(bSize) + 5;
            document.getElementById("balloonImg").style.fontSize=inflateSize.toString()+"px";
        }
        
    }