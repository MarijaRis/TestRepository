function Dragon(name, health) {
    this.name = name;
    this.health = health;
}

Dragon.prototype = new Combatant();