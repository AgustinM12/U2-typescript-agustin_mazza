// * 13. Enum: Declara un enum Color con los valores "Red", "Green", y "Blue". Crea una función que tome un argumento de tipo Color y devuelva un mensaje con el color.

enum Color {
    Red = "Red",
    Green = "Green",
    Blue = "Blue",
}

function getColor(color: string): void {
    return console.log("El color es: " + color);
}

const micolor: Color = Color.Red

getColor(micolor)