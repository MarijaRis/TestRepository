function random() {
    var i = 0;
    var random = 3;
    //return random;
}
while (i < 10) {

    log();
}


function getBiggest() {
    var brojac = 0;
    var najgolem = 0;
    while (brojac < 10) {
        var randomNum = Math.random();
        if (randomNum > najgolem) {
            najgolem = randomNum;
        }
        brojac++;
    }
}
return najgolem;

//var result = getBigest();

function sumOfSquares(result) {
    for (var i = 101; i < 150; i++) {

        var square = Math.pow(i, 2);
        console.log(i + square);
    }
}


function myFunc(x, y) {
    var myVar = x * y;
    console.log(myVar);
    return myVar;
}


var greeting = "Dobar den";
var name = " Marija";
var welcomeMessage = greeting + name; {
    document.write(welcomeMessage);
}