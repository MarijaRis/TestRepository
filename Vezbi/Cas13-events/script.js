document.getElementById("semple-button").addEventListener("resize", function(){
    console.log("page has been resized");
})


document.getElementById("semple-button").addEventListener("mousedown", function(){
    console.log("button clicked");
})
document.getElementById("semple-button").addEventListener("mousemove", function(){
    console.log("page has been resized");
})

window.addEventListener("load", function(){
    console.log("page has been resized");
})


function mainFunc(callback){
callback();
}
function second(param){
    alert (param);
}
mainFunc(function(){
    second(5);
});
