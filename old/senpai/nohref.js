
$(function(){

$("a").on("click", function(){return false;});

$("#button_enable").on("click", function(){$("a").off("click");});
    
});


