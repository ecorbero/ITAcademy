var marcador = require('./Marcador');
var Jugador = require('./Jugador');
var Joc = require('./Jocs');

//var logger = Logger();

marcador.log('starting app...');

var alex = new Jugador('alex', 0);
alex.AfegeixPunts(5);

var joc1 = new Joc ('El joc numero 1');
joc1.afegirJugador(alex);
alex.AfegeixPunts(15);

joc1. mostrarPuntuacio();

marcador.log('finished config...');

console.log(`${marcador.count} logs total`);
marcador.logs.map(log => console.log(`   ${log.message}`));

//console.log(joc1)