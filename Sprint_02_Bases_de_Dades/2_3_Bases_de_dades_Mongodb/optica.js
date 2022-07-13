use('optica');

db.clients.drop();

db.clients.insertMany(
[{
  "clients_id": 1,
  "nom": "client 1",
  "adreca": "carrer del rat penat 1, 2",
  "telefon": "91 2989 8922",
  "email": "elclient@gmail.com",
  "data": "22022021"
},{
  "clients_id": 1,
  "nom": "client 2",
  "adreca": "carrer del pi 1, 2",
  "telefon": "92 2989 8922",
  "email": "elclient2@gmail.com",
  "data": "23022021",
  "prescriptor": 1
},{
  "clients_id": 1,
  "nom": "client 3",
  "adreca": "carrer del pot 1, 2",
  "telefon": "93 2989 8922",
  "email": "elclient3@gmail.com",
  "data": "24022021",
  "prescriptor": 1
}]);


// Run a find command to view items sold on April 4th, 2014.
db.clients.find();

db.proveidors.drop();

db.proveidors.insertMany(
[{
  "proveidor_id": 1,
  "nom": "Proveidor 1",
  "adreca": {
    "carrer": "carrer del u",
    "numero": 1,
    "pis": 22,
    "porta": "B",
    "ciutat": " BCN",
    "codipostal": "08080",
    "pais": "France"
  },
  "telefon": "92 221 2223",
  "fax": "92 2999 299",
  "NIF": "28 289 289 J"
},{
  "proveidor_id": 2,
  "nom": "Proveidor 2",
  "adreca": {
    "carrer": "carrer del dos",
    "numero": 2,
    "pis": 23,
    "porta": "c",
    "ciutat": " BdN",
    "codipostal": "08081",
    "pais": "Andorra"
  },
  "telefon": "92 222 2223",
  "fax": "92 293 299",
  "NIF": "28 249 289 J"
},{
  "proveidor_id": 3,
  "nom": "Proveidor 3",
  "adreca": {
    "carrer": "carrer del tres",
    "numero": 3,
    "pis": 24,
    "porta": "E",
    "ciutat": "Dirona",
    "codipostal": "08083",
    "pais": "Italia"
  },
  "telefon": "92 223 2223",
  "fax": "92 2933 299",
  "NIF": "28 219 289 J"
}]);

// Run a find command to view items sold on April 4th, 2014.
db.proveidors.find();

db.ulleres.drop();

db.ulleres.insertMany(
[{
  "ulleres_id": 1,
  "nom": "Ullera 1",
  "marca": {
    "nom": "marca u",
    "proveidor": 1
  },
  "graduacio": {
    "esq": "2,5",
    "dret": "2.5"
  },
  "muntura": {
    "nom": "muntura 1",
    "color": "marro"
  },
  "colorvidre": "blau",
  "preu": "25",
  "empleat": {
    "nom": "pepe",
    "datavenda": "21042021"
  },
  "client_id": 1
},{
  "ulleres_id": 2,
  "nom": "Ullera 2",
  "marca": {
    "nom": "marca dos",
    "proveidor": 1
  },
  "graduacio": {
    "esq": "1,5",
    "dret": "2.5"
  },
  "muntura": {
    "nom": "muntura 2",
    "color": "lila"
  },
  "colorvidre": "trans",
  "preu": "125",
  "empleat": {
    "nom": "paco",
    "datavenda": "22042021"
  },
  "client_id": 2
},{
  "ulleres_id": 3,
  "nom": "Ullera 3",
  "marca": {
    "nom": "marca tres",
    "proveidor": 2
  },
  "graduacio": {
    "esq": "3,5",
    "dret": "4.5"
  },
  "muntura": {
    "nom": "muntura 3",
    "color": "blau"
  },
  "colorvidre": "negre",
  "preu": "225",
  "empleat": {
    "nom": "pepe",
    "datavenda": "25042021"
  },
  "client_id": 3
}]);


// Run a find command to view items sold on April 4th, 2014.
db.ulleres.find();