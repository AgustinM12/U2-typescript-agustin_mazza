"use strict";
// *8. Clase con constructor: Añade un constructor a la clase Car que inicialice la propiedad make. Crea una instancia de Car con una marca y llama al método drive().
class Car2 {
    constructor(make) {
        this.make = make;
    }
    drive() {
        console.log("Driving a " + this.make);
    }
}
const miAuto = new Car2("Honda");
console.log(miAuto.drive());
