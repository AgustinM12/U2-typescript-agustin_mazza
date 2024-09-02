"use strict";
// * 10. Herencia de clases Crea una clase ElectricCar que extienda de Car e incluya una propiedad adicional batteryLife (vida de la batería) de tipo número. Añade un método charge() que imprima un mensaje diciendo que el coche se está cargando.
class ElectricCar extends Car3 {
    constructor(make, batteryLife) {
        super(make);
        this.batteryLife = batteryLife;
    }
    charge() {
        console.log("La bateria esta cargando");
    }
}
const myElectricCar = new ElectricCar("Tesla", 5);
console.log(myElectricCar.charge());
