// * 6. Tipado en funciones: Crea una función greet que tome un argumento name de tipo string y devuelva una frase de saludo usando ese nombre. 

const greet = (name: string): string => {
    return "Hola! Bienvenido " + name
}

console.log(greet("Agustin"));