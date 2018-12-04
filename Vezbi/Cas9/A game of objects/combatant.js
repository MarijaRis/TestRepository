function Combatant() {
    this.attack = function() {

    }
    this.receiveDamage = function() {
        console.log("someone received damage");
    }
}

Combatant.prototype = new Being();

