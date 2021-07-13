
class Ninja {
    constructor(name, health = health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {

        console.log(`The name is: ${this.name}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(`Added 10 health (Now, "${this.health}") from drinking Sake!`);
    }
    showStats() {
        return (`Name: ${this.name}, Speed: ${this.speed}, Strength: ${this.strength}, Health: ${this.health}`);
    }
}

const Nin = new Ninja("Tom", 3);
Nin.sayName();
console.log(Nin.showStats());
Nin.drinkSake();

// console.log(Nin.health)

// child Sensei class
class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake();
        console.log(`Sensei meditates hevily. Added 10 health to Sensei (Now, "${this.health}")!`);
    }
    getStatsAgain() {
        var SenseiStats = super.showStats();
        SenseiStats += `, Wisdom: ${this.wisdom}`;
        console.log(SenseiStats)
    }
}

const Sen = new Sensei("Splinter");
Sen.speakWisdom();
Sen.getStatsAgain();

const Nino = new Ninja("Tom",100,100, 3);
Nino.sayName();
console.log(Nino.showStats());
Nino.drinkSake();
