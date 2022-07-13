var marcador = require('./Marcador');

//var logger = new Logger().getInstance();

class Jocs {

    // construri un nou Joc. I afegir el nom del Joc a la Array de Jocs del Singleton Marcador
    constructor(name, descripcio) {
        this.name = name;
        this.descripcio = descripcio;
        marcador.afegirJoc(this.name);
    }

    // Mostrar Puintuacio d'aesut Joc des de la Array de Jocs del SingletonMarcador
    mostrarPuntuacio(){
        marcador.classifiacio(this.name);
    }
    
    // Mostar per Consola la Descripcio d'aquest Joc
    info(){
        console.log(`La definició del joc ${this.name} és: ${this.descripcio}`);
    }

    // Mostrar Jugador d'aquest Joc des de la Array de Jocs del Singleton Marcador
    mostrarJugadorsJoc(){
        
        return marcador.mostrarJugadorsDelJoc(this.name);
    }
    
    // Mostrar TOTS els Jugadors de Array de Jocs del Singleton Marcador
    mostrarTotsJugadors(){
        //console.log(`Jocs Disponibles: ${marcador.TotsJugadors()}`);
        return marcador.TotsJugadors();
    }

    PrintJson() {
        marcador.printJson();
    }
}

module.exports = Jocs;