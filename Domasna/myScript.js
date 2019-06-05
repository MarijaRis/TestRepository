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

//class 3/1
function myFunction(a, b, c) {
    var c = 10;
   // var a = "dobar";
  //  var b = "den";
}
if (c >= 10) {
    console.log(a + b);
} else if (c < 10) {
    console.log(b + a);
} else {
    console.log("greska");
}
myFunction(5);

function myFunction(a, b, c) {
 
    if (c === true) {
        console.log(a + b);
    } else if (c === false) {
        console.log(b + a);
    } else {
        console.log("greska");
    }
    }
    

//class 3/2

function salaryTax(salary) {
    if (salary <= 1000) {
        console.log(salary * 0.11);
    } else if (salary > 1000) {
        console.log(((salary - 1000) * 0.18) + (1000 * 0.11));
    }
}
salaryTax(500);
//
function salaryTax(profession, salary) {
    if (profession == craftsman) {
        if (salary <= 1000) {
            console.log(salary * 0.05);

        } else {
            console.log(((salary - 1000) * 0.10) + (1000 * 0.05));
        }
        if (salary <= 1000) {
            console.log(salary * 0.11);

        } else {
            console.log(((salary - 1000) * 0.18) + (1000 * 0.11));
        }
    }
}



//class 4/2
function sumOfSquares(result) {
    for (var i = 101; i < 150; i++) {

        var square = Math.pow(i, 2);
        console.log(i + square);
    }
}