var a = 0;
var b = 0;
var c = 0;
var d = 0;
var wordInterval = null;
var faceInterval = null;
$("document").ready(function(){
    $("#Menu").hide();

    $("#Title").mouseover(function(){
        TitleColor();
    });
    $("#Title").mouseout(function(){
        clearInterval(wordInterval);
    });
    $("#Click").click(function(){
        $("#Menu").show();
    });
    $("#Close").click(function(){
        $("#Menu").hide();
    });
    $(".Select").click(function(){
        window.location.href = "Background.html";
    });
    $('#ClickPic').mouseover(function(){
        faceRotation();
    });
    $('#ClickPic').mouseout(function(){
        clearInterval(faceInterval);
    });
    
    
    
    
function TitleColor(){
        wordInterval = setInterval(function(){
            a += 5;
        if(a === 260){
            a = 5;
        }
        
             b += 10;
        if(b === 260){
            b = 5;
        } else if(b===265){
            b = 10;
        }
        
        c += 15;
        if(c === 270){
            c = 15;
        }
        $("#Title").css("color", 'rgb(' + a + ', ' + b + ', ' + c + ')');
        },200);
}

function faceRotation(){
    faceInterval = setInterval(function(){
        d -= 1;
        if(d=== -1){
            d = 359;
        }
        $('#ClickPic').css('-webkit-transform', 'rotate('+ d +'deg)');
    })
}
},050);
