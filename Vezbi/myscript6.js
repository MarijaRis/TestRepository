function catFeeding() {
    var cats = ["Tabby", "Lizzie", "Mary"];
    cats[2];
    for (var i = 0; i <= 7; i++) {
        for (var index = 0; index < cats.length; index++) {
            var cat = cats[index];
        }
        if (cat === "Tabby") {
            console.log(cats[0] + " started eating fish");
        }
        if (cat === "Lizzie") {
            console.log(cats[1] + " started eating chicken");
        } else if (cat === "Mary") {
            console.log(cats[2] + " started eating nn");
        }
    }
}
console.log(catFeeding());

function deadOrAlive() {
    var time = 60;
    for (var minute = 0; minute < 60; minute++) {
        console.log("performing insert action");
    }
    if (time % 15 === 0) {
        console.log("check puls");
    } else if (time - 1 === minute) {
        console.log("alive");
    }
}

//class 6/ #2 / 1

var pal = prompt("enter number");
var pal2 = pal.split('').reverse().join('');
if (pal == pal2) {
    console.log(true);

} else {
    console.log(false);
}


// class 6/ #2 / 2
function fuelCalc(kilometars) {
    var fuel = 0;
    for (let i = 0; i <= kilometars; i++) {
        fuel += (7 / 100);
        //fuel += 0.07; 
    }
    console.log(fuel);
}
fuelCalc(43);

//class 6/ #3 /1
function flirt(tries, hitpoints) {

    var points = 0;

    for (i = 0; i <= tries; i++) {

        if (i % 3 === 0) {
            points += 5;
        }
        if (i % 5 === 0) {
            points += 10;
        }
        if (i % 10 === 0) {
            points -= 12;
        } else {
            points += 1;
        }
    }
    if (hitpoints <= points) {
        console.log('girl wins');
    } else {
        console.log('man wins');
    }
}
flirt(10, 5);



//class 6/ #3 /2

function warrior(hitpoints, damage, armor) {
    this.hitpoints = hitpoints;
    this.damage = damage;
    this.armor = armor;
    checkDamage = function () {
        console.log(this.hitpoints - this.damage)

    }
}
// 
function Warrior(hitpoints, minDamage, maxDamage, armor){
    this.hitpoints = hitpoints;
    this.minDamage = minDamage;
    this.maxDamage = maxDamage;
    this.armor = armor;
    this.damage = function(){
         return Math.floor(Math.random() * (this.maxDamage - this.minDamage + 1) + this.minDamage);
    }
}

var orc = new Warrior(720, 23, 35, 5);

var human = new Warrior(550, 18, 27, 9);

function fight(){
    orc.hitpoints -= human.damage + orc.armor;
    human.hitpoints -= orc.damage + human.armor;
    
    if (orc.hitpoints > 0 && human.hitpoints > 0){
        
        console.log ("fight");
    }else {
        console.log("stop fight");
    }
} if (orc.hitpoints <= 0){
    console.log("human win");
}else if(human.hitpoints <= 0){
    console.log("orc win");
} 