
// crear Class usuaris
class usuari {
  constructor(name) {
    this.name = name;
  }

  ShowMessage = inputMessage => {
    console.log (`${this.name} ha rebut el missatge ${inputMessage}`);
  }

  SendMessage = (subject, outputMessage) => {
    console.log(`${this.name} ha enviat el missatge ${outputMessage}`)
    // emit mesage
    em.emit(subject, outputMessage);
  }
}

// Crear usuaris
const usuari1 = new usuari("Pepe"); 
const usuari2 = new usuari("Lluís"); 
const usuari3 = new usuari("Andreu"); 
const usuari4 = new usuari("Coco"); 
const usuari5 = new usuari("Peter"); 


// get the Emitter Module
var events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();

// Funció afegir usaris a un event ( ex: "tema 1", "usuari1")
const subscribeSubject = (subject, user) => {
  //Subscribe for FirstEvent
  em.on(subject, function (data) {
    user.ShowMessage(data);
  });
};

// Clear Screen
console.clear();
console.log("                    1 usuari.  Tema 1")
console.log(" ");

// afeigr usari "usuari1" a "Tema 1" 
subscribeSubject('Tema 1', usuari1);

// Enviant Missatge de "usuari1" a "Tema 1"
usuari1.SendMessage('Tema 1', 'Aquest és el meu primer missatge');

// Mostarr Per pantalla
console.log(" ");
console.log("                    2 usuari. Tema 2")
console.log(" ");

// afeigr usari "usuari1" a "Tema 21" 
subscribeSubject('Tema 2', usuari1);
// afeigr usari "usuari1" a "Tema 21" 
subscribeSubject('Tema 2', usuari2);


// Enviant Missatge de "usuari2" a "Tema 2"
usuari2.SendMessage('Tema 2', 'Aquest és el segon missatge');