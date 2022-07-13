// https://blog.logrocket.com/understanding-javascript-decorators/#:~:text=A%20decorator%20(also%20known%20as,treated%20as%20first%2Dclass%20citizens.

const fs = require('fs');


const convertToEuro = (currency, amount) => {
  // Fitxer JSON On són les dades de conversió de moneda
  let fileName = './currency_conversions.json';
  // La Array LLegida del JSON 
  let taulaConv = JSON.parse(fs.readFileSync(fileName, 'utf8'));
  // El valor de la moneda (USD, per ex) entrada com a parametre, en la Array data
  let conversionRate = taulaConv[`${currency}_EUR`];
  // Si s'ha entrat una moneda que no és a la Array data
  if (conversionRate === undefined)  return console.log(`Aquesta moneda (${currency}) no existeix`);
  // Si la moneda existeix => Arrodonir a 2 decimals
  let valorTwoDecimals = +((conversionRate*amount).toFixed(2));
  return valorTwoDecimals;

}


module.exports.convertToEuro = convertToEuro;

//var preuFinal = convertToEuro("CNY", 5);
//console.log(preuFinal);

/*
// Funció que llegeix del JSON, i retorna una Array amb els seus valors
const readFunction = () => JSON.parse(fs.readFileSync(fileName, 'utf8'))

// funció que Decora la funció 'readFunction', afegint-hi la conversió de moneda
const convertTo = (readFunction) =>  {
  return function (currency, amount) {
    // La Array LLegida del JSON
    let data = readFunction.call(this)
    // El valor de la moneda (USD, per ex) entrada com a paramtere, en la Array data
    let conversionRate = data[`${currency}_EUR`];
    // Si s'ha entrat una moneda que no és ala Array data
    if (conversionRate === undefined)  return console.log(`Aquesta moneda (${currency}) no existeix`);
    // Si la moneda existeix
    return amount / conversionRate;
  }
}

//console.log(readFunction(fileName));

// Crear una Funció Decorada de readFunction, amb convertTo
const convertCurrency = convertTo(readFunction);
var preuFinal = convertCurrency("CNY", 5);
console.log(preuFinal)

*/