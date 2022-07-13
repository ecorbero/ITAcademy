// Entrega 1.1: Functions & Template Literals

// Nivell 1

/*
Nivell 1 - Exercici 1
Crea una funció que mostri per consola el nom d'usuari
 al invocar-la passant-li el nom com a paràmetre.
*/

function MostraNom(name){
  console.log (name);
}

MostraNom("Enric");

// Nivell 2

/*
Nivell 2 - Exercici 1
Mostra per consola el nom i cognoms de l'usuari
mitjançant template literals, guardant-los en variables
i referenciant-les en la impressió del missatge.
*/

const userName =  "Enric";
const useSurname = "Corbero";
console.log(`El meu nom és ${userName} ${useSurname}.`);


/*
Nivell 2 - Exercici 2
Invoca una funció que retorni un valor
des de dins d'una template literal.
*/

// CORREGIT:

function ShowText(string) {
  return string
}

console.log(`El meu nom és ${ShowText("Enric")}.`);

// Nivell 3

/*
Nivell 3 - Exercici 1
Crea una matriu de deu funcions i emplena-la mitjançant un bucle,
de manera que cada funció compti del 0 al 9 per la consola.
Invoca cada funció de l'array iterativament.
Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.
*/

var funtionArray = [10];

function countTen ()
{
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
}

for (let index = 0; index < 10; index++) {
  funtionArray[index] = countTen;
  
}


for (let index = 0; index < funtionArray.length; index++) {
  funtionArray[index]();;
  
}

// Nivell 3 - Exercici 2

/*
Crea una funció anònima autoinvocable igualada a una variable
 que mostri per consola el nom de l'usuari rebut com a paràmetre.
*/

// CORREGIT: (7 Abril 2022)

var variable = (function (parametre) {
  
  //function body
  console.log(parametre);
}("el nom de l'usuari "));

/*
(
  function (){
    var funcio1 = function (parametre){
      console.log(parametre);
    };
  funcio1("el nom de l'usuari");
}());
*/