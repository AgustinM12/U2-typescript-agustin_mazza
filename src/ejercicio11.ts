// * 11. Interface y clases Crea una interfaz Shape que tenga un método area() que devuelve un número. Luego, crea una clase Circle que implemente esta interfaz y calcule el área de un círculo.

interface Shape {
    area(): number
}

class Circle implements Shape {
    private radio: number

    constructor(radio: number) {
        this.radio = radio
    }

    area(): number {
        return Math.PI * this.radio * this.radio;
    }
}

const miCirulo = new Circle(10)

console.log(miCirulo.area());
