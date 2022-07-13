var marcador = require('./Marcador');
var Jugador = require('./Jugador');
var Joc = require('./Jocs');

// Crear 2 Jocs
let joc1 = new Joc (`Poker`, `Joc de Poker Americà`);
let joc2 = new Joc (`Remigio`, `Joc de cartes de poble`);

// Crear 5 Jugadors

let jugador1 = new Jugador (`Alex`);
let jugador2 = new Jugador (`Pepe`);
let jugador3 = new Jugador (`Paco`);
let jugador4 = new Jugador (`Joan`);
let jugador5 = new Jugador (`lluis`);


// Afegir Jugadors als Jocs
jugador1.afegirAlJoc(`Poker`);
jugador2.afegirAlJoc(`Poker`);
jugador3.afegirAlJoc(`Poker`);
jugador4.afegirAlJoc(`Poker`);
jugador5.afegirAlJoc(`Poker`);


jugador1.afegirAlJoc(`Remigio`);
jugador2.afegirAlJoc(`Remigio`);
jugador3.afegirAlJoc(`Remigio`);

// afegir Punts dels Jugadors als Jocs
jugador1.afegeixPunts(Math.round(Math.random() * 20) + 5, `Poker`);
jugador2.afegeixPunts(Math.round(Math.random() * 20) + 5, `Poker`);
jugador3.afegeixPunts(Math.round(Math.random() * 20) + 5, `Poker`);
jugador4.afegeixPunts(Math.round(Math.random() * 20) + 5, `Poker`);
jugador5.afegeixPunts(Math.round(Math.random() * 20) + 5, `Poker`);


jugador1.afegeixPunts(Math.round(Math.random() * 20) + 5, `Remigio`);
jugador2.afegeixPunts(Math.round(Math.random() * 20) + 5, `Remigio`);
jugador3.afegeixPunts(Math.round(Math.random() * 20) + 5, `Remigio`);


// Mostar Marcadors:
joc1.mostrarPuntuacio();
joc2.mostrarPuntuacio();

/*
// Mostrar Array de jocs:
joc1.PrintJson();
*/