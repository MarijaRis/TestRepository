var vladimir = {
    name: "Vladimir",
    age: 0,
    walk: function () {
        console.log(this.name, "is walking");
    }
}

var myAuto = {
    name: "Nissan",
    model: "mikra",
    color: "grey",
    fuel: "gas",
    godini: 10,
    checkCar: function () {
        return this.name + " " + this.model + " " + "is using" + " " + this.fuel;
    }
}
var auto = new Object();
auto.name = "Hundai";
auto.checkCar = function () {
    return this.name;
};

//next
function Cat(name, color) {
    this.name = name;
    this.color = color;
    this.meow = function () {
        console.log(this.name, " is meowing hungrily");
    }
}
var milica = new Cat("milica", "ginger");

var maca = new Cat("Maca", "zolta");

var dzordz = new Cat("Dzordz", "bela");

function CatHotel(cats) {
    this.cats = cats;

}


var homelessCats = [milica, maca, dzordz];
var ocaj = new CatHotel()

//
function Auto(name, color) {
    this.name = name;
    this.color = color;
    this.type = function () {
        console.log(this.name, " is the best");
    }
}
var kia = new Auto("Kia", "blue");

var nissan = new Auto("Nissan", "yellow");

var fiat = new Auto("uno", "red");


// doma vezbi

var kniga = {
    title: "Nana",
    pages: 360,
    color: "green",
    myBook: function () {
        console.log(this.title + " is my favorite book");
    }
}

var artist = new Object();
artist.name = "leonardo";
artist.age = 50;
artist.temperament = "extrovert";
artist.children = 5;
artist.checkArtist = function() {
    return "The most popular actor " + this.name + " is in  his " + this.age + " and have " + this.children + "children";
};

function Kniga(color, pages) {
    this.color = color;
    this.pages = pages;
    this.name = function(){
        console.log("This book has " + this.pages + " pages");
    }
}
var nana = new Kniga("bela", 500);

var bella = new Kniga("crna", 450);

