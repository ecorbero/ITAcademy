# 3_1_Patterns - Nivell 3: Observer

Executar: "node app"

## Bibliografia

Tot el codi és de creació pròpia. Els exemples trobats només ens ha servit per entendre el funcionament del mòdul Emitter.

https://www.w3schools.com/nodejs/nodejs_events.asp
https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm
https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/
https://www.tutorialspoint.com/nodejs/nodejs_event_emitter.htm


## Funcionament:

Creem una classe usuari, amb un nom, i amb dues funcions. "ShowMessage", serà la funció que cridarem quan s'enviï un missatge a l'emitter amb el nom del tema corresponent. I la funció "SendMessage", que serà la funció que executarem per enviar un missatge al tema corresponent.

Creem la funció "subscribeSubject" per a subscriure un usuari a un tema. Enllaçarem la funció ShowMessage de l'usuari corresponent amb el nom del tema entrat com a paràmetre.

## Execució

Creem diferents usuaris amb diferents noms.

Usarem "subscribeSubject('Tema 1', usuari1)" per a subscriure l'"usuari1" al "Tema 1".

I després "usuari1.SendMessage('Tema 1', 'Aquest és el meu primer missatge')", per a emetre al Tema 1 el missatge entrat. Aquest missatge serà reproduït per consola per l'usuari1, que s'hi ha subscrit al pas anterior.

Per finalitzar afegirem dos usuaris a un segon tema, i un dels usuaris emetrà un missatge. Aquest segon missatge serà reproduït pels dos usuaris que s'hi han subscrit.



