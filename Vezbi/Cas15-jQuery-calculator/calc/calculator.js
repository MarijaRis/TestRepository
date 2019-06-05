$(document).ready(function () {

    $("button").on("click", function (e) {
        console.log(this.innerHTML);
    });
});

// $(function(){
//     $('button').on('click', function(e){ 
//     let btn = this.innerHTML;
//     if(btn >= 0  && btn <= 9){
//     console.log("you clicked number")
//     }else{
//         console.log("you clicked an operator");
//     }

//     });
// });

$(function () {
    $('button').on('click', function () {

        if ("button" >= 0 && "button" <= 9) {
            $(".display").val($(".display").val() + $(this).val());

        } else {
            if ($(this).val() != "") {
                $(".display").val($(".display").val() + $(this).val());
            }
        }
    });
});

$(function () {
    $(".clear-btn").on("click", function () {
        $(".display").val("");
    });
});

$(function () {
    $(".equal-sign").on("click", function () {
        var expression = $(".display").val();
        $(".display").val(eval(expression));
    });
});