// * 7. Clase basica: Define una clase Car que tenga una propiedad make (marca del coche) de tipo string y un método drive() que imprima un mensaje en la consola diciendo "Driving a [make]".

class Car {
    make: string

    constructor() {
        this.make = "Toyota"
    }

    drive(): void {
        console.log("Driving a " + this.make);
    }
}

const auto = new Car()

console.log(auto.drive());
