function Knight(){
    this.health = health;
    this.name = name;
    this.protectArmy = function(){

    }
}
Knight.prototype = new Combatant();

function Archer(name, health){
    this.health = health;
    this.name = name;
    this.protectArmy = function(){

    }
}
Wizard.prototype = new Combatant();
