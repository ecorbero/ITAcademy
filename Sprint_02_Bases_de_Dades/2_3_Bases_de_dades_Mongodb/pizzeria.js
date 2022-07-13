use('pizzeria');

// Crear Collection Clients

db.clients.drop();

db.clients.insertMany([
{
  "clients_id": 1,
  "nom": {
    "nom": "Nom u",
    "cognom1": "Cognom U",
    "cognom2": "Cognom Dos"

  },
  "adreca":{
    "adreca": "carer del pecat 2",
    "codipostal": 09080,
    "localitat": 1,
    "provincia": 1
  },
  "telefon": "93 211 98 95",
  "fax": "93 211 98 95",
  "NIF": "X2119895",
  "comanda": [
    {
      "comanda_id": 1,
      "data": "23042012",
      "hora": "170455",
      "repartiment": true,
      "data_repartiment": {
        "empleat_id": 1,
        "data": "23042012",
        "hora": "180655"
      },
      "productes": [
        {
          "producte_id": 1,
          "quantitat": 1,
          "preu": 25
        } 
      ],
      "preu Total": 25
    }

  ]
},
{
  "clients_id": 2,
  "nom": {
    "nom": "Nom dos",
    "cognom1": "Cognom UU",
    "cognom2": "Cognom Dosdos"

  },
  "adreca":{
    "adreca": "carer del picat 2",
    "codipostal": 09082,
    "localitat": 2,
    "provincia": 2
  },
  "telefon": "93 212 98 95",
  "fax": "93 211 92 95",
  "NIF": "X2119892",
  "comanda": [
    {
      "comanda_id": 1,
      "data": "22042012",
      "hora": "120455",
      "repartiment": false,
      "productes": [
        {
          "producte_id": 1,
          "quantitat": 1,
          "preu": 25
        },
        {
          "producte_id": 2,
          "quantitat": 2,
          "preu": 10
        } 
      ],
      "preu Total": 45
    },
    {
      "comanda_id": 2,
      "data": "28042012",
      "hora": "180455",
      "repartiment": true,
      "data_repartiment": {
        "empleat_id": 1,
        "data": "29042012",
        "hora": "190655"
      },
      "productes": [
        {
          "producte_id": 2,
          "quantitat": 1,
          "preu": 10
        } 
      ],
      "preu Total": 10
    }

  ]
}

]);

// Run a find command to view items sold on April 4th, 2014.
db.clients.find();


// Crear Collection provincia

db.provincia.drop();

db.provincia.insertMany([
{
  "provincia_id": 1,
  "nom": "Barcelona",
  "localitat":  [
    {
      "localitat_id": 1,
      "nom": "Hospitalet"
    },
    {
      "localitat_id": 2,
      "nom": "Badalona"
    } 
  ]
},

{
  "provincia_id": 2,
  "nom": "Girona",
  "localitat":  [
    {
      "localitat_id": 1,
      "nom": "Lloret"
    },
    {
      "localitat_id": 2,
      "nom": "Calella"
    } 
  ]
}
]);


// Run a find command
db.provincia.find();


// Crear Collection producte

db.producte.drop();

db.producte.insertMany([
{
  "producte_id": 1,
  "nom": "Pizza 1",
  "descripcio": "Descripci Pizza 1",
  "imatge": "URL 1",
  "preu": 25,
  "categoria": "Categoria 1"
},
{
  "producte_id": 2,
  "nom": "Pizza 2",
  "descripcio": "Descripcio Pizza 2",
  "imatge": "URL 2",
  "preu": 10,
  "categoria": "Categoria 2"
},
{
  "producte_id": 3,
  "nom": "Hamburguesa",
  "descripcio": "Descripcio Hamburguesa",
  "imatge": "URL 3",
  "preu": 12
},
{
  "producte_id": 4,
  "nom": "Beguda",
  "descripcio": "Descripcio Beguda",
  "imatge": "URL 4",
  "preu": 3
}
]);


// Run a find 
db.producte.find();


// Crear Collection producte

db.botiga.drop();

db.botiga.insertMany([
{
  "botiga_Id": 1,
  "adreca":{
    "adreca": "carer del picat 2",
    "codipostal": 09082,
    "localitat": 2,
    "provincia": 2
  },
  "telefon": "93 322 45 67",
  "empleat": [
    {
      "empleat_id": 1,
      "nom": {
        "nom": "empleat 1",
        "cognom1": "Cpogonm 1",
        "cognom2": "Cpogonm 21"
      },
      "telefon": "91 322 45 67",
      "repartidor": true
    },
    {
      "empleat_id": 2,
      "nom": {
        "nom": "empleat 2",
        "cognom1": "Cpogonm 2",
        "cognom2": "Cpogonm 22"
      },
      "telefon": "92 322 45 67",
      "repartidor": false
    }
  ]
},
{
  "botiga_Id": 2,
  "adreca":{
    "adreca": "carer del pebrot 2",
    "codipostal": 09012,
    "localitat": 1,
    "provincia": 2
  },
  "telefon": "92 322 45 67",
  "empleat": [
    {
      "empleat_id": 3,
      "nom": {
        "nom": "empleat 3",
        "cognom1": "Cpogonm 3",
        "cognom2": "Cpogonm 31"
      },
      "telefon": "91 322 45 67",
      "repartidor": true
    },
    {
      "empleat_id": 4,
      "nom": {
        "nom": "empleat 4",
        "cognom1": "Cpogonm 4",
        "cognom2": "Cpogonm 42"
      },
      "telefon": "92 322 45 67",
      "repartidor": false
    }
  ]
}
]);


// Run a find
db.botiga.find();