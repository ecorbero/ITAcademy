var marcador = require('./Marcador');

//var logger = new Logger().getInstance();

class Jugador  {

    constructor(name, puntuacio=0) {
        this.name = name;
        this.puntuacio = puntuacio;
        marcador.log(`Nou Jugador: "${name}", té ${puntuacio} punts al seu marcador.`);
    }

    AfegeixPunts(punts) {
        this.puntuacio += punts;
        marcador.log(`El Jugador "${this.name}", ha afegit ${punts} punts al seu marcador.`);
    }

}

module.exports = Jugador;