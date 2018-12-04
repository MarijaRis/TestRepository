function myFunction(celsius) {
    var farenheit = celsius * 1.8 + 32;
    console.log(farenheit);
    return farenheit;
}

function myFunction(farenheit) {
    var celsius = (5 / 9) * (Farenheit - 32);
    //console.log (celsius);
    return celsius;
}

function converter(temperature, type) {
    var result;
    if (type === "C") {
        result = temperature * 1.8 + 32;
    } else if (type === "F") {
        result = 5 / 9 * (temperature - 32);
        // return = 5 / 9 * (temperature - 32);
    } else {
        result = "the value cant be converted";
    }
    //conssole.log ("we are done");
    // return result;
}

function classes(sessions, classes, months, winterreak){
    var classes = classes*sessions*months-(winterreak*classes);
    //console.log (classes);
    //alert("classes");
     return result;
}

/*function iPhonePrice(phone, price, customsRate, taxRate) {
    var iPhonePrice = 1 * 899.95;
    if (customsRate === 2) {
        result = 899.95 * 5 / 100;
    }
}*/

function phoneImport(items, price, type) {
    var result = items * price;
    if (type === "IOS") {
        result += result * 0.05;
        result += result * 0.18;
        result += result * 0.05;
    } else if (type === "DROID") {
        result += result * 0.05;
        result += result * 0.18;
        result += result * 0.02;

    } else {
        result += result * 0.05;
        result += result * 0.18;

    }
    return result;
}
//23.11.2018 cas 


function myIteration() {
    for (num = 0; num < 15; num++)
        console.log(num);
}   if (num %2 === 0) {
    console.log("even number");
}   else (num %2 === 1);{
    console.log("odd number");
}  myIteration(15);


for (var num = 1; num < 100; num++){
//console.log(num);
} if ( num % 3 == 0 ){
    console.log("Fizz");
}if ( num % 5 == 0 ){
    console.log("Buzz");
} if( ( num % 3 == 0 ) && ( num % 5 == 0 ) ){
    console.log("Fizz" + "Buzz");
}


var number = prompt("Enter a number");
var numberOfDigits = number.length;
var sum = 0;

for (i = 0; i < numberOfDigits; i++) {
 sum += Math.pow(number.charAt(i), numberOfDigits);
}

if (sum == number) {
 alert("The entered number is an Armstrong number.");

} else {
 alert("The entered number is not an Armstrong number.");
}

//vtoro resenie

function three_digit_armstrong_number() 
{
 for (var i = 1; i < 10; ++i) 
 {
   for (var j = 0; j < 10; ++j) 
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus) 
           {     
             console.log(pow);
            }
         }
       }
    }
  }
three_digit_armstrong_number();

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0){
       sum += x;
    }
}
console.log(sum);

function range(start, end){
    var text="";
    //for(var i=)
for(var i = start; i <= end; i++);
  console.log(range);
} range(2, 9);
