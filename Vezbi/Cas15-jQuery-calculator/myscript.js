$(document).ready(function(){

 $("button").on("click", function(e){
     console.log(this.innerHTML);
 });
});

$(function(){
    $('button').on('click', function(e){ 
    let btn = this.innerHTML;
    if(btn >= 0  && btn <= 9){
    console.log("you clicked number")
    }else{
        console.log("you clicked an operator");
    }
    
    });
});



