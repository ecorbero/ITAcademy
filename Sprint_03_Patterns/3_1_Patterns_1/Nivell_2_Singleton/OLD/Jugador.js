var marcador = require('./Marcador');

//var logger = new Logger().getInstance();

class Jugador  {

    // Crear Un Jugador nou. Enviar el nom del jugador a la Array de Jugadors del Marcador
    constructor(name, puntuacio=0) {
        this.name = name;
        marcador.afegirJugador(name);
    }

    // Afgeir un Joc a un Jugaodr en la array de Jocs del Marcador
    afegirAlJoc(nomJoc){
        marcador.afegirJugadorAlJoc(nomJoc, this.name);
    }

    // afegir Punts d'un jugaodr a un joc de la array de Jocs del Marcador
    afegeixPunts(punts, joc) {
        
        marcador.afegirpunts(this.name, punts, joc);
    }

    // Mostrar Jocs d'aquest Jugaodr de la Array de Jocs del Marcador
    mostraJocs() {
        return marcador.mostraJocs();
    }
}

module.exports = Jugador;