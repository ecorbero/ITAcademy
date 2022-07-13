var marcador = require('./Marcador');

//var logger = new Logger().getInstance();

class Jocs {

    constructor(name) {
        this.name = name;
        this.jugadors = [];;
        marcador.log(`Nou Joc: "${name}" creat. (Afegeix Jugadors amb "AfegirJugador(nom)").`);
    }

    afegirJugador(jugador){
        this.jugadors.push(jugador);
        marcador.log(`Jugador "${jugador.name}" afegit al joc "${this.name }".`);
    }

    mostrarPuntuacio(){
        marcador.log(`Mostrar Puntuació "${this.name}":`);
        let maxPuntuacio = 0;
        let maxJugador = "";
        for (const jugador of this.jugadors) {
            if (jugador.puntuacio > maxPuntuacio){
                maxPuntuacio = jugador.puntuacio; 
                maxJugador = jugador.name;
            } 
            marcador.log(`  Jugador "${jugador.name}", té ${jugador.puntuacio} punts.`);
        }
        marcador.log(`  Jugador "${maxJugador}" guanya, amb ${maxPuntuacio} punts.`);
    }
}

module.exports = Jocs;