"use strict";
// * 13. Enum: Declara un enum Color con los valores "Red", "Green", y "Blue". Crea una función que tome un argumento de tipo Color y devuelva un mensaje con el color.
var Color;
(function (Color) {
    Color["Red"] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
function getColor(color) {
    return console.log("El color es: " + color);
}
const micolor = Color.Red;
getColor(micolor);
