"use strict";
// * 11. Interface y clases Crea una interfaz Shape que tenga un método area() que devuelve un número. Luego, crea una clase Circle que implemente esta interfaz y calcule el área de un círculo.
class Circle {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio * this.radio;
    }
}
const miCirulo = new Circle(10);
console.log(miCirulo.area());
