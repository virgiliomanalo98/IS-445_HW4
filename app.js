document.addEventListener("keydown", changeSize);

function changeSize() {
    var e = event.keyCode;
    var bSize = document.getElementById("balloon").style.fontSize;
    if (e == 73){
        if (parseInt(bSize)>60){
            document.getElementById("balloon").innerHTML = "💥";
            document.removeEventListener('keydown', changeSize);
        }
        else{
            if(bSize==""){
                bSize=30;
            }
            var inflate = parseInt(bSize) + 10;
            document.getElementById("balloon").style.fontSize=inflate.toString()+"px";
        }
    }
    else if (e == 68){
        console.log("d was pressed");
        if(parseInt(bSize)==0){
            document.getElementById("balloon").innerHTML = "Done";
            document.removeEventListener('keyup', changeSize);
        }
        else{
            if(bSize==""){
                bSize=30;
            }
            var deflate = parseInt(bSize) - 10;
            document.getElementById("balloon").style.fontSize = deflate.toString() +"px";
        }        
    }
}