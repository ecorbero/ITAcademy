use('youtube');

// Crear Collection usuaris

db.usuaris.drop();

db.usuaris.insertMany([
{
  "usuari_id": 1,
  "email": "email 1",
  "password": "password 1",
  "nom_usuari": "nom usuari 1",
  "data_naixement": "01011980",
  "sexe": "Home",
  "pais": "pais 1",
  "codi_postal": "08001",
  "videos": [
    {
      "video_id": 1,
      "titol": "Titol 1",
      "descripcio": "Descripcio 1",
      "grandaria": 1000,
      "no_arxiu": "Nom Arxiu 1",
      "durada": 85,
      "thumbnail": "URL thumbnail 1",
      "num_reproduccion": 11,
      "total_likes": 2,
      "total_dislikes": 1,
      "estat": "públic",
      "etiquetes": [
        {
          "etiqueta_id": 1,
          "nom": "etiqueta 1"
        },
        {
          "etiqueta_id": 2,
          "nom": "etiqueta 2"
        }
      ],
      "data_publicacio": "01011980",
      "likes_rebuts":[
        {
          "usuari_id": 2,
          "data": "010219081"
        },
        {
          "usuari_id": 3,
          "data": "020219081"
        }
      ],
      "dislikes_rebuts":[
        {
          "usuari_id": 2,
          "data": "010219081"
        },
        {
          "usuari_id": 1,
          "data": "020219081"
        }
      ],
      "comentaris_rebut":[
        {
          "comentari_id": 1
        }
      ]

    },
    
    {
      "video_id": 2,
      "titol": "Titol 2",
      "descripcio": "Descripcio 2",
      "grandaria": 2000,
      "no_arxiu": "Nom Arxiu 2",
      "durada": 285,
      "thumbnail": "URL thumbnail 2",
      "num_reproduccion": 21,
      "total_likes": 1,
      "total_dislikes": 0,
      "estat": "privat",
      "etiquetes": [
        {
          "etiqueta_id": 1,
          "nom": "etiqueta 1"
        },
        {
          "etiqueta_id": 2,
          "nom": "etiqueta 2"
        }
      ],
      "data_publicacio": "02011980",
      "likes_rebuts":[
        {
          "usuari_id": 2,
          "data": "010219081"
        }
      ],
      "comentaris_rebut":[
        {
          "comentari_id": 2
        }
      ]

    }
  ],
  "canals":[
    {
      "canal_id": 1,
      "nom": "canal 1",
      "descripcio": "descripcio canal 1",
      "videos": [1,2],
      "data_creacio": "21011981"
    }
  ],
  "canals_subscrit": [2],
  "likes_donats": [1,2],
  "dislikes_donats": [4],
  "playlists":[
    {
      "playlist_id": 1,
      "nom": "playlist nom 1",
      "data_creacio": "23022022",
      "vidoes":[1,2],
      "estat": "publica"
    }
  ]
},
{
  "usuari_id": 2,
  "email": "email 2",
  "password": "password 2",
  "nom_usuari": "nom usuari 2",
  "data_naixement": "21011980",
  "sexe": "Dona",
  "pais": "pais 2",
  "codi_postal": "08002",
  "videos": [
    {
      "video_id": 3,
      "titol": "Titol 3",
      "descripcio": "Descripcio 3",
      "grandaria": 1000,
      "no_arxiu": "Nom Arxiu 3",
      "durada": 85,
      "thumbnail": "URL thumbnail 3",
      "num_reproduccion": 1,
      "total_likes": 0,
      "total_dislikes": 0,
      "estat": "ocult",
      "etiquetes": [
        {
          "etiqueta_id": 4,
          "nom": "etiqueta 4"
        },
        {
          "etiqueta_id": 5,
          "nom": "etiqueta 5"
        }
      ],
      "data_publicacio": "01011980",
      "comentaris_rebut":[
        {
          "comentari_id": 3
        }
      ]

    },
    
    {
      "video_id": 4,
      "titol": "Titol 4",
      "descripcio": "Descripcio 4",
      "grandaria": 2000,
      "no_arxiu": "Nom Arxiu 4",
      "durada": 285,
      "thumbnail": "URL thumbnail 4",
      "num_reproduccion": 21,
      "total_likes": 0,
      "total_dislikes": 1,
      "estat": "privat",
      "etiquetes": [
        {
          "etiqueta_id": 6,
          "nom": "etiqueta 6"
        },
        {
          "etiqueta_id": 7,
          "nom": "etiqueta 7"
        }
      ],
      "data_publicacio": "02011980",
      "dislikes_rebuts":[
        {
          "usuari_id": 1,
          "data": "010219081"
        }
      ],
      "comentaris_rebut":[
        {
          "comentari_id": 4
        }
      ]

    }
  ],
  "canals":[
    {
      "canal_id": 2,
      "nom": "canal 2",
      "descripcio": "descripcio canal 2",
      "videos": [3,4],
      "data_creacio": "21011981"
    }
  ],
  "canals_subscrit": [1],
  "dislikes_donats": [2],
  "playlists":[
    {
      "playlist_id": 2,
      "nom": "playlist nom 2",
      "data_creacio": "23022022",
      "vidoes":[3,4],
      "estat": "publica"
    }
  ]
}
]);

// Run a find command

db.usuaris.find();

// Crear Collection usuaris

db.comentaris.drop();

db.comentaris.insertMany([
{
  "comentari_id": 1,
  "video_id": 1,
  "data": "21012022",
  "hora": "170455",
  "text": "m'agrad molt el video",
  "usuari_id": 1,
  "likes_rebuts": [
    {
      "usuari_id": 1,
      "data": "22012022"
    },
    {
      "usuari_id": 2,
      "data": "22012022"
    }
  ],
  "dislikes_rebuts": [
    {
      "usuari_id": 2,
      "data": "22012022"
    }
  ]
},
{
  "comentari_id": 2,
  "video_id": 3,
  "data": "221012022",
  "hora": "120455",
  "text": "Molt bo el video i hio fas molt be",
  "usuari_id": 2,
  "likes_rebuts": [
    {
      "usuari_id": 2,
      "data": "22012022"
    }
  ],
  "dislikes_rebuts": [
    {
      "usuari_id": 1,
      "data": "22012022"
    }
  ]
}
]);

// Run a find command 
db.comentaris.find();