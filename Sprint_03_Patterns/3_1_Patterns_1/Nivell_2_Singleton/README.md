# 3_1_Patterns - Nivell 2: Singleton

Executar: "node app"

Hem creat una array al Singleton Marcador de nom "jocs". Dins d'aquesta array introduirem els noms del jocs. Dins dels jocs de la array crearem una array d'objectes amb els noms dels jugadors i les seves puntuacions.

Podem afegir punts als jugadors per a cada joc. I veure les seves puntuacions finals.

## Funcions:

* Crear un Joc nou: "let joc1 = new Joc ('Poker');"
* Crear un Jugador nou: "let jugador1 = new Jugador ('Alex');"
* Afegir Jugadors a un Joc: "jugador1.afegirAlJoc('Poker');"
* Afegir Punts d'un Jugador a un Joc: "jugador1.afegeixPunts(5, 'Poker');"
* Mostrar Classificació final: "joc1.mostrarPuntuacio();"

## Bibliografia

* https://blog.husamajour.dev/nodejs-design-patterns-or-singleton-pattern
* https://stackoverflow.com/questions/13179109/singleton-pattern-in-nodejs-is-it-needed (Resposta 13)


