"use strict";
// * 9. Modifica la clase Car para que la propiedad make sea privada. Añade un método getMake() que devuelva el valor de make. 
class Car3 {
    constructor(make) {
        this.make = make;
    }
    drive() {
        console.log("Driving a " + this.make);
    }
    getMake() {
        return this.make;
    }
}
const myCar = new Car3("Honda");
console.log(myCar.getMake());
