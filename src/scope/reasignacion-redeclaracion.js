var firstName; //Undefined
firstName = "Mauricio";

console.info(firstName); //Mauricio

// Reasignar un valor
var lastName = "Perez"; //Declarar-Asignar e Inicializar
console.log(lastName); //Perez

var lastName = "Cox"; //Reasignando
console.log(lastName); //Cox

console.info(`Nombre completo: ${firstName} ${lastName}`); //Nombre completo: Mauricio Cox

let fruit = "Apple"; //Declarar / Asignar
console.log(fruit);

fruit = "Kiwi"; //Reasignar
console.log(fruit);

let fruit = "Banana"; //SyntaxError: Identifier 'fruit' has already been declared

const animal = "Dog";
console.log(animal);

animal = "Cat"; //TypeError: Assignment to constant variable.
console.log(animal);

const animal = "Snake"; //SyntaxError: Identifier 'animal' has already been declared
console.log(animal);

const vehicles = [];
vehicles.push("carA");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);