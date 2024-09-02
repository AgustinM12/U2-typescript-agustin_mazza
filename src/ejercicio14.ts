// * 14. Type assertions: Declara una variable de tipo any con un valor numérico y usa una aserción de tipo para tratarla como un string. Usa la propiedad “.length” en esta variable.

const num: any = 12123

const num2: number = (num as string).length
const num3: number = (<string>num).length

// ! Para que se muestren en la consola
// const num2: number = (num as string).toString().length;
// const num3: number = (<string>num).toString().length;

console.log(num2);
console.log(num3);

