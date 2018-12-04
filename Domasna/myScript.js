//#class3 exercise 4/1

function sum(x) {

    if (x >= 1000) {
        console.log("pochasti se");
    } else {
        console.log("kupi semki");
    }
}
sum(1002);


//exercise 4/2
function maxOfThree(a, b, c) {
    if (a > b && a > c) {
        console.log(a);
    }
    if (b > a && b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
maxOfThree(3, 5, 1);

// exercise 4/3
function costOfRegistering(bhp) {
    //var bhp = 0;
    console.log(bhp);
}
if (bhp <= 85) {
    console.log(i == "3000den");
}
if (bhp > 85 && bhp <= 150) {
    console.log(i == "5000den");
} else if (bhp > 150) {
    console.log(i == "15000den");
}
costOfRegistering(90);

//class 3/
function myFunction(c){
    var c = 10;
    var a = "dobar";
    var b = "den";
}if (c >= 10) {
    console.log(a + b);
} else if (c < 10) {
    console.log(b + a);
} else {
    console.log("greska");
}
myFunction(5);