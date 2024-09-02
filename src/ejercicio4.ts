// * 4. Interfaz opcional: Modifica la interfaz Person del ejercicio anterior para que la propiedad lastName sea opcional. Declara un objeto que solo incluya firstName. 

interface Person2 {
    firstname: string,
    lastname?: string;
}

const persona2: Person2 = {
    firstname: "Agustin"
}