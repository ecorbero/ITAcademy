const Middleware = require("./Middleware");
const Calculadora = require("./calculadora.js");
const fs = require('fs');

// LLegir del Jason els Valors
let readData = JSON.parse(fs.readFileSync('./data.json', 'utf8'));
let firstValue = readData[0];
let secondValue = readData[1];
let thirdValue = readData[2];

// Crear un objecte calculadora
const calculator = new Calculadora();

//Afegir Middleware Manager
const app = new Middleware(calculator);

// Primer Middleware (al quadrat)
app.use((req, next) => {
  req.a **= 2;
  req.b **= 2;
  console.log(` MiddleWare 1 (al quadrat) el resultat és ${req.a} i ${req.b} `);
  next();
});

// Segon Middleware (al cub)
app.use((req, next) => {
  req.a **= 3;
  req.b **= 3;
  console.log(` MiddleWare 2 (al cub) el resultat és  ${req.a} i ${req.b} `);
  next();
});

// Tercer Middleware (dividit per 2)
app.use((req, next) => {
  req.a  /= 2;
  req.b  /= 2;
  console.log(` MiddleWare 3 (dividit per dos) el resultat és  ${req.a} i ${req.b} `);
  next();
});

//Usant calculator sense el Middleware
console.log("***** FUNCIÓ CALCULADORA:")
console.log(`La Suma dels Valors inicials (${firstValue.a}, ${firstValue.b}) és: ${calculator.add(firstValue)}`);
console.log(`La Resta dels Valors inicials (${firstValue.a}, ${firstValue.b}) és: ${calculator.subtract(firstValue)}`);
console.log(`La Multiplicació dels inicials (${firstValue.a}, ${firstValue.b}) Valors és: ${calculator.multiply(firstValue)}`);

//Usant calculator amb el Middleware
console.log("***** FUNCiÓ CALC AMB MIDDLEWARE:")
console.log(`La Suma dels Valors (${firstValue.a}, ${firstValue.b}) passats pel Middleware és: ${app.add(firstValue)}`);
console.log(`La Resta dels Valors (${secondValue.a}, ${secondValue.b}) passats pel Middleware és: ${app.subtract(secondValue)}`);
console.log(`La Multiplicació dels (${thirdValue.a}, ${thirdValue.b}) Valors passats pel Middleware és: ${app.multiply(thirdValue)}`);