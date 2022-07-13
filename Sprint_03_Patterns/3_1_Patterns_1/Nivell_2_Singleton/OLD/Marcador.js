class Marcador {

    constructor() {
        this.jocs = {};
        this.jugadors = [];
    }


    printJson() {
        require('fs').writeFile('file.json', JSON.stringify(this.jocs), (error) => {
            if (error) {
                throw error;
            }
        });
    }

    // funció afegir Joc nou a la Array jocs
    afegirJoc(nomJoc) {
        
        // Afgeeix Joc a la Array
        this.jocs[nomJoc] = [];
    }

    // funció afegir Jugaodr nou a la Array jugaodrs
    afegirJugador(nomJugador) {
        // Afgeeix Jugador a la Array
        this.jugadors.push(nomJugador);
    }

    // Mostar tots els jugadors de la Array Jugadors (des de jocs.js)
    TotsJugadors(){
        return this.jugadors;
    }

    // Funció Afegir Jugadors a un Joc
    afegirJugadorAlJoc(nomJoc, nomJugador){
        const jocExists = this.jocs.hasOwnProperty(nomJoc);
        if (jocExists){
            console.log(`Jugador ${nomJugador} afegit al joc ${nomJoc}`);
            this.jocs[nomJoc].push({"nom": nomJugador, Punts: 0 });
        }
        else {
            console.log(`Aquest Joc no Existeix.`)
        }
        //const index = jocs.findIndex(fruit => fruit === "Remigio");
    }

    // Funció Afegir Punts a un joc
    afegirpunts(nomJugador, punts, nomJoc) {
        const arrayJoc = this.jocs[nomJoc];
        const index = arrayJoc.findIndex(jugador => jugador.nom === nomJugador);
        this.jocs[nomJoc][index].Punts += punts;
        console.log(`Afegits ${punts} punts al joc ${nomJoc} del jugador ${nomJugador}`);
    }

    // Funció Mostrar Tots els Jocs
    mostraJocs(){
        // Falta Esborrar els jocs on no apareix el jugador!!!!
        let arrayJocs = Object.keys(this.jocs);
        //console.log(`Jocs Disponibles: ${arrayJocs}`);
    }

    // Funció Mostrar Jugaodrs (des de Jocs.js)
    mostrarJugadorsDelJoc(nomJoc){
        let arrayJugadors = this.jocs[nomJoc];
        return arrayJugadors;
    }

    // Funció Mostrar Classificació d'un joc
    classifiacio(nomJoc) {
        // find joc, and then Show Points for every player, and the winner
        console.log(`Marcador Final del joc de ${nomJoc}.`)
        const arrayJugadors = this.jocs[nomJoc];
        let maxPuntuacio = 0;
        let maxJugador = "";
        for (const jugador of arrayJugadors) {
            if (jugador.Punts > maxPuntuacio){
                maxPuntuacio = jugador.Punts; 
                maxJugador = jugador.nom;
            } 
            console.log(`  Jugador "${jugador.nom}", té ${jugador.Punts} punts.`);
        }
        console.log(`  Jugador "${maxJugador}" guanya, amb ${maxPuntuacio} punts.`);
    }

}
module.exports = new Marcador();
