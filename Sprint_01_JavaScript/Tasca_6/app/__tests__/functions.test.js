
const functions = require('../Exercicis/functions');
const funcions_1_3 = require('../Exercicis/Entrega_1_3');
const funcions_1_4 = require('../Exercicis/Entrega_1_4');

/*
=========
Nivell 1
=========
*/

let employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}];

let salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}];

// Nivell 1 - Execrici 1 
//Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir 
//dos o més operands. Testeja la correcta execució d'aquestes funcions.

describe('Nivell 1 - Execrici 1', () => {
  test('mira si 2 + 2 és 4', () => {
    expect(functions.sumar(2,2)).toBe(4);
  });
  test('mira si 2 - 2 és 0', () => {
    expect(functions.restar(2,2)).toBe(0);
  });
  test('mira si 2 + 2 és 4', () => {
    expect(functions.multiplicar(2,2)).toBe(4);
  });
  test('mira si 2 + 2 és 4', () => {
    expect(functions.dividir(2,2)).toBe(1);
  });
});

// Nivell 1 - Execrici 2
//Crea els tests corresponents per verificar el funcionament de 
//l'exercici Async / Await Nivell 1 - Exercici 1


describe('Nivell 1 - Execrici 2', () => {
  test("Verifica Async/Await Nivell 1 - Exercici 1. Si  entrant Id 1, retorna l'objecte employees[0]", () => {  
    expect.assertions(1);
    return funcions_1_4.GetEmployee(1)
      .then(data => {
        expect(data).toMatchObject(employees[0]);
    });
  });

  test("Verifica Async/Await Nivell 1 - Exercici 1. Si  entrant l'employee 0, el seu salari és 4000", () => {
    expect(funcions_1_4.GetSalary(employees[0])).toBe(4000);
  });
});


// Nivell 1 - Execrici 3
//Crea els tests corresponents per verificar el funcionament de l'exercici 
//Async / Await Nivell 2 - Exercici 1


describe('Nivell 1 - Execrici 3', () => {
  test("Verifica Async/Await Nivell Nivell 2 - Exercici 1", () => {
    //console.log(" Proba funcio = " , funcions_1_4.GetEmployee(1));
    expect(
      funcions_1_4.GetEmployee(1)
        .then (data => data)
      ).resolves.toMatchObject(employees[0])
  });
});

// Nivell 1 - Execrici 4
//Crea els tests corresponents per verificar el funcionament de
// l'exercici Promises & Callbacks Nivell 2 - Exercici 3


describe('Nivell 1 - Execrici 4', () => {
  test("Verifica l'exercici Promises & Callbacks Nivell 2 - Exercici 3", () => {
    //console.log(" Proba funcio = " , funcions_1_4.GetEmployee(1));
    expect(
      funcions_1_3.GetEmployee(1)
        .then(data => funcions_1_3.GetSalary(data))
        .then (data => data)
      ).resolves.toBe(4000);
  });
});
/*
// Nivell 1 - Execrici 5
//Verifica mitjançant tests l'execució de l'exercici 
//Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.
*/


describe('Nivell 1 - Execrici 5', () => {
  test("Verifica Async/Await Nivell Nivell 2 Exercici 1 utilitzant Jest Fake Timers", async () => {  
    'use strict'; 
    jest.useFakeTimers();
    jest.runAllTimers();
    expect.assertions(1);
    await expect( funcions_1_4.GetEmployee(1) ).resolves.toMatchObject(employees[0]);
  });
});

/*
=========
Nivell 2
=========
*/

/*
Nivell 2 - Execrici 1
Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode 
decirNombre en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2
*/

let Entrega_1_2 = require('../Exercicis/Entrega_1_2');
let Persona = Entrega_1_2.Persona;
jest.mock('../Exercicis/Entrega_1_2');


beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Persona.mockClear();
});


describe('Nivell 2 - Execrici 1', () => {
  it('Comprova les crides al mètode dirNom', () => {
    // Show that mockClear() is working:
    expect(Persona).not.toHaveBeenCalled();

    const persona1 = new Persona("Pepitu 2");
    expect(Persona).toHaveBeenCalledTimes(1);
    expect(Persona).toHaveBeenCalledWith("Pepitu 2");
    
  });
});


/*
Nivell 2 - Execrici 2
Verifica mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.
*/

// import the cat module
let Animal = Entrega_1_2.Animal;
let Cat = Entrega_1_2.Cat;
jest.mock('../Exercicis/Entrega_1_2');


beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Persona.mockClear();
});


describe('Nivell 2 - Execrici 2', () => {
  it('Comprova Classes & Arrow Functions Nivell 3 - Exercici 1', () => {
    // Show that mockClear() is working:
    expect(Cat).not.toHaveBeenCalled();

    const cat1 = new Cat();
    expect(Cat).toHaveBeenCalledTimes(1);
    expect(Cat).toHaveBeenCalledWith();
    
  });
});


/*
=========
Nivell 2
=========
*/

/*
Nivell 3 - Execrici 1
Refès l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON. 
Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
*/

const fs = require('fs');
// Define Variables
let employeesJson;
let salariesJson;

// Read Database
fs.readFile('./Exercicis/database.json', 'utf8', (err, data) => {

  if (err) {
      console.log(`Error llegint l'arxiu del disc: ${err}`);
  } else {

      // parse JSON string to JSON object
      const database = JSON.parse(data);

      // print all databases
      employeesJson = database.employees;
      salariesJson = database.salaries;
  }

});

describe('Nivell 3 - Execrici 1', () => {
  test("Verifica Async/Await Nivell 1 - Exercici 1, accedint a un fitxer extern JSON.", () => {  
    expect.assertions(1);
    return funcions_1_4.GetEmployee(1)
      .then(data => {
        expect(data).toMatchObject(employeesJson[0]);
    });
  });

  test("Verifica Async/Await Nivell 1 - Exercici 1. Si  entrant l'employee 0, el seu salari és 4000", () => {
    expect(funcions_1_4.GetSalary(employeesJson[0])).toBe(4000);
  });
});

/*
Nivell 3 - Execrici 2
Utilitzant com a base l'exercici Async / Await Nivells 2 i 3, 
crea un test que forci errors de funcionament i verifiqui que l'error llançat per la funció és l'esperat.
*/