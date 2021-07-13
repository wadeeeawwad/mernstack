class ninja{
    constructor(name,health,speed,strength){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sasName(){
        console.log(`hello ${this.name} gooood`)


    }

    show(){
        console.log(`show ${this.name} ${this.health} ${this.speed} ${this.strength} End of Show`)
    }
    drinksake(){
        this.health +=10;
        console.log(`health ${this.health}   wadee`)
    }

}
const n=new ninja("Wadee",100);
n.show();
n.drinksake();