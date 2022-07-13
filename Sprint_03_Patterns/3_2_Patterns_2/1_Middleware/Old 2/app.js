//import {Middleware} from 'MiddlewareES6.js';
const calculadora = require("./calculadora.js")
const { Middleware } = require("./MiddlewareES6");
const fs = require('fs');

// LLegir del Jason els Valors
let readData = JSON.parse(fs.readFileSync('./fitxer.json', 'utf8'));
let num1 = readData[0];
let num2 = readData[1];

// Mostra operacions amb paramteres des de JSON
console.clear();
console.log (`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`);
console.log (`La Suma dels valors originals és: ${calculadora.suma(num1,num2)}`);
console.log (`La Resta dels valors originals és: ${calculadora.resta(num1,num2)}`);
console.log (`La Multiplicació dels valors originals és: ${calculadora.multiplica(num1,num2)}`);
console.log (`XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`);

// Crear Nou Middleware
var middleware = new Middleware();

middleware.use((hook, next) => {
  setTimeout(() => {
    
    let numfinal01 = hook.num01 * hook.num01;
    let numfinal02 = hook.num02 * hook.num02;
    
    console.log(`Els valors al quadrat són ${numfinal01} i ${numfinal02}. El resultat de la ${hook.funcioNom} és: ${hook.funcio(numfinal01, numfinal02)}`);
    hook.value++;
    next();
  }, 250 + hook.delay);
});

middleware.use((hook, next) => {
  setTimeout(() => {
    
    let numfinal01 = hook.num01 * hook.num01 * hook.num01;
    let numfinal02 = hook.num02 * hook.num02 * hook.num02;
    
    console.log(`Els valors al cub són ${numfinal01} i ${numfinal02}. El resultat de la ${hook.funcioNom} és: ${hook.funcio(numfinal01, numfinal02)}`);

    hook.value++;
    next();
  }, 250);
});

middleware.use((hook, next) => {
  setTimeout(() => {
    
    let numfinal01 = hook.num01 / 2;
    let numfinal02 = hook.num02 / 2;
    
    console.log(`Els valors dividits per dos són ${numfinal01} i ${numfinal02}. El resultat de la ${hook.funcioNom} és: ${hook.funcio(numfinal01, numfinal02)}`);
    
    console.log(` Final ${hook.funcioNom} MMiddleware!!`); // 3
    hook.value++;
    next();
  }, 250);
});

// Middleware Amb funció Suma:
let funcioOperacio = calculadora.suma;
let funcioNom = "Suma";
middleware.go({value:1, num01: num1, num02: num2, funcio: funcioOperacio, funcioNom: funcioNom, delay: 0}, (hook) => {
});


// Middleware Amb funció Resta:
funcioOperacio = calculadora.resta;
funcioNom = "Resta";
middleware.go({value:1, num01: num1, num02: num2, funcio: funcioOperacio, funcioNom: funcioNom, delay: 750}, (hook) => {
});

// Middleware Amb funció Resta:
funcioOperacio = calculadora.multiplica;
funcioNom = "Multiplicació";
middleware.go({value:1, num01: num1, num02: num2, funcio: funcioOperacio, funcioNom: funcioNom, delay: 1500}, (hook) => {
});