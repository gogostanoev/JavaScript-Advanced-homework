console.log("Connected");

// Exercise
// Create a class Animal that has:
// name
// type - carnivore/herbivore/omnivore
// age
// size
// eat - a method that checks if the input is an Animal.
// If the input is an Animal and If this object animal is herbivore write in the console: The animal ( this animal name ) is a herbivore and does not eat other animals
// If the input is an Animal, and If this object animal is not herbivore, then change the input Animal property isEaten to true and log in the console: The animal (this animal name) ate the (the input animal name).
// If the animal is twice as large or larger than this animal than just log in the console: The animal (this animal name) tried to eat the (the input animal name) but it was too large.
// If the input is not an animal just write: The animal (this animal name) is eating (the input).
// isEaten = default false


class Animal {
    
    constructor(name, type, age, size){

        this.name = name
        this.type = type
        this.age = age
        this.size = size
        this.isEaten = false
    }

    eat(input){
        if(input instanceof Animal){
            if(this.type === "herbivore"){
                console.log(`${this.name} is a herbivore animal and does not eat other animals`)
                return
            }

            if(this.size > input.size * 2){
                console.log(`${this.name} ate ${input.name} and it became fat`)
                return
            }
            console.log(`${this.name} tried to eat ${input.name} but it was too large`)
            return
        }
        console.log(`The animal ${this.name} is eating `, input)
    }
}


const hippopotamus = new Animal("Hippo", "herbivore", 5, 1700);
const lion = new Animal("Mufasa", "carnivore", 7, 160);
const crocodile = new Animal("Croco", "carnivore", 4, 440);
const wildBoar = new Animal ("Pumba", "omnivore", 3, 90);

hippopotamus.eat(wildBoar);
lion.eat(wildBoar);
crocodile.eat(lion);
