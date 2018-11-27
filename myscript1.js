//#class3 exercise 4/1

function sum(x) {
    
    if (x >= 1000) {
        console.log("pochasti se");
    } else {
        console.log("kupi semki");
    }
}   sum(1002); 


//exercise 4/3
function maxOfThree(a, b, c){
    if(a> b && a>c){
        console.log (a);
    }if (b>a && b>c){
         console.log(b);
    }else {
        console.log(c);
    } 
    } maxOfThree (3, 5, 1);

// exercise 4/3
function costOfregistering (x){
    var bhp = x;
    return x;
}if (x <= 85){
   console.log("3000den");
}if (x > 85 && x <= 150){
    console.log("5000den");
}else if (x >= 150){
    console.log("15000den");
} costOfRegistering (90);