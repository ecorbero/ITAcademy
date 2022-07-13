// Entrega 1.2: Classes & Arrow Functions

// Nivell 1

/*
- Exercici 1
Mostra per la consola el resultat d'una arrow function autoinvocable
 que sumi dos nombres.
*/


// CORREGIT: (7 Abril 2022)

//console.log(((a,b) => a + b)(1,2));

/*
(
  function (){
    var funcio1 = function (variable1, variable2){
      return variable1 + variable2;
    };
  console.log( funcio1(1,3) );
}());
*/

// Nivell 2

// Nivell 2 - Exercici 1

const arrowFunction = (parametre) => {
  const person = {height:parametre};
  return person;
};

//arrowFunction("180");

// Nivell 2- Exercici 2

class Persona  {

  // Constructor
  constructor(nom) {
    this.nom = nom;
  }

  // Method
  dirNom () {
    return console.log(this.nom);
  }

}

const persona1 = new Persona("Pepitu");

//persona1.dirNom();

// Nivell 3

/*

Nivell 3 - Exercici 1

Escriu una function creadora d'objectes 
que faci instàncies d'una classe abstracta. Invoca-la amb diferents definicions.

*/

// CORREGIT: (7 Abril 2022)

var Animal = function() {
  if (this.constructor === Animal) {
    throw new Error("Can't instantiate abstract class!");
  }
  say = function() {
    throw new Error("Abstract method!");
  }
};

Animal.prototype.say = function() {

  throw new Error("Abstract method!");

}

var Cat = function() {

  Animal.apply(this, arguments);
  Object.create(Animal.prototype);

  Cat.prototype.constructor = Cat;

  Cat.prototype.say = function() {
    console.log('miau');
  
  }
};

var cat = new Cat();

//cat.say();


/*
class Employee {
  constructor() {
    
    if(this.constructor == Employee){
      throw new Error(" Object of Abstract Class cannot be created");
    }
  }

  display(){
  throw new Error("Abstract Method has no implementation");
  }
}
*/


module.exports.Persona = Persona;

module.exports.Animal = Animal;

module.exports.Cat = Cat;