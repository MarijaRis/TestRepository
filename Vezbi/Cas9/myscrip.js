function Tiger(name){
    this.claw = function(){}
    this.hunt = function(){}
    this.__proto__ = new Animal(name); //klasicno nasleduvanje
}

function Animal(name){
    this.name = name;
    this.run = function(){}
    this.eat = function(){}
}
//var protoAnimal = new Animal();
//Tiger.prototype = protoAnimal; //ne trebaat za klasicn nasleduvanje

var dzordz = new Tiger("marija");

// dzordz.eat();


/////

function Greatwarrior(name){
    this.name = name;
    this.attack = 50;
    this.health = 650;
}
function SwordOfFire (){
    this.fieryStrike = function () {
        console.log(this.name + " has landed a fiery strike");
    }
}
var redSonya = new Greatwarrior("Sonya");
var sword = new SwordOfFire ();

Greatwarrior.prototype = sword;

redSonya.fieryStrike();

var armor = new ArmorOfTheHeavens();

redSonya.__proto__ = armor;

redSonya.regenerate();

//

