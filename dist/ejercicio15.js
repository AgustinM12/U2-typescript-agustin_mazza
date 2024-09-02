"use strict";
// * 15.  Escribe una función genérica identity que tome un argumento de tipo T y devuelva el mismo valor. Usa esta función con diferentes tipos de datos.
function identity(argumento) {
    return argumento;
}
console.log(identity("hola mundo"));
console.log(identity(12));
console.log(identity(true));
