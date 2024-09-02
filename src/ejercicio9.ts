// * 9. Modifica la clase Car para que la propiedad make sea privada. Añade un método getMake() que devuelva el valor de make. 

class Car3 {
    private make: string

    constructor(make: string) {
        this.make = make
    }

    drive(): void {
        console.log("Driving a " + this.make);
    }

    getMake(): string {
        return this.make
    }
}

const myCar = new Car3("Honda")

console.log(myCar.getMake());
