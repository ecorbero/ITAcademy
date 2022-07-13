/*
Nivell 1 - Exercici 1
Crea una funció que imprimeixi recursivament un missatge per la consola,
 amb demores d'un segon.
 */

 // Import Modules
const fs = require('fs');
const zlib = require('zlib');

 (foo = () => {
  setTimeout(() => {
    console.log("N1E1: processant... espera 15 segons");
    foo();
  }, 1000);
 })();
 
 /*
 Nivell 1 - Exercici  2
Crea una funció que, en executar-la, escrigui una frase en un fitxer.
 
*/

// Create WriteToFile Function

// File to Enter Name
let fileName = './files/test.txt';

// Function Save to File
const WriteToFile = (enteredFile, entredText) => {

  fs.writeFile(enteredFile, entredText, err => {
    if (err) {
      console.error(err)
      return
    };
    //file written successfully
    console.log("N1E2: Missatge Grabat = " + entredText);
  });

};

// Execute WriteToFile Function
WriteToFile(fileName, `A veure si surt el sol d'una vegada!`);

 /*
 Nivell 1 - Exercici  3
Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.
 
*/


// Function Read From File 
const ReadFromFile = (enteredFile) => {

  fs.readFile(enteredFile, 'utf8' , (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    // Show Read Message
    console.log("N1E3: missatge llegit = " + data)
  })

}

// Execute  Read From File 
ReadFromFile(fileName);


/*
 Nivell 2 - Exercici 1
Crea una funció que comprimeixi el fitxer del nivell 1.
 
*/


// Create Gzip Function
const gzip = zlib.createGzip();

// Function Compress File
const CompressFile = (enteredFile) => {

  const inp = fs.createReadStream(enteredFile); 
  const out = fs.createWriteStream(enteredFile + ".gz"); 
  inp.pipe(gzip).pipe(out);

  // Show Message Compressing Sucsess
  console.log("N2E1: Fitxer Comprimit");
  
}

// Function Compress File
CompressFile(fileName);

/*
 Nivell 2 - Exercici 2
Crea una funció que llisti per la consola 
el contingut del directori d'usuari de l'ordinador utilizant Node Child Processes.
 
*/

// Import Modules


// Create ShowFiles Function
const ShowFiles = () => {
  const { exec } = require('child_process');
  exec ('ls', () => {
    let file = fs.readdirSync("./");
    console.log(file);
  })

}

// Execute ShowFiles Function
ShowFiles();

/*
Nivell 3
- Exercici 1 (N3E1)
    Crea una funció que creï dos fitxers codificats en hexadecimal 
    i en base64 respectivament, a partir del fitxer del nivell 1
*/


// Function Read From File With Promise (Asynch) 
const ReadFromFile2 = filePath => {
    return new Promise((resolve, reject) => {
     fs.readFile(filePath, 'utf8', (error, fileContent) => {
      if (error != null) {
       reject(error);
       return;
      }
      //Resolve the Text Read
      resolve(fileContent);
     });
    });
   }

// Function Write to Hex
const WriteToHex = (parametre) => {

    //converting string into buffer
    const buf = Buffer.from(parametre, 'ascii');
    //with buffer, convert it into hex
    var hexvalue = buf.toString('hex');

    fs.writeFile(fileName + ".Hex", hexvalue, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
    
        // success case, the file was saved
        console.log('N3E1: File Hex saved!');
    });

    // Return the Hex Value
    return hexvalue;
}

// Function Write to Base64
const WriteToBase64 = (parametre) => {

    //converting string into buffer
    const buf = Buffer.from(parametre, 'ascii');
    //with buffer, convert it into hex
    var base64value = buf.toString('base64');

    fs.writeFile(fileName + ".png", base64value, (err) => {
        // throws an error, you could also catch it here
        if (err) throw err;
    
        // success case, the file was saved
        console.log('N3E1: File Base64 saved!');
    });

    // Return the Base64 Value
    return base64value;
}



// Execute ReadFromFile Function Promise, i el resultat escriu-ho en dos fitxers (hex i base64)
ReadFromFile2(fileName)
    .then(value => {
        console.log("N3E1: " + WriteToHex(value));
        console.log("N3E1: " + WriteToBase64(value));
    
    });


/*
N2E2
Crea una funció que guardi els fitxers del punt anterior ara encriptats,
amb l'algorisme aes-192-cbc, i esborri els fitxers inicials
*/


const crypto = require('crypto');
 // set random encryption key
const ENC_KEY = "bf3c199c2470cb477d907b1e0917c17b";
 // set random initialisation vector
const IV = "5183666c72eec9e4";
// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');

// Funcio que encripta el text entrat, i el graba afeggint-hi "Crypted"
var Encrypt = ((enteredFile,enteredText) => {
  
  // Encrypt Text
  let cipher = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
  let encrypted = cipher.update(enteredText, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  //return encrypted;

  // Save File
  fs.writeFile(enteredFile + "Crypted", encrypted, err => {
    if (err) {
      console.error(err)
      return
    };
    //file written successfully
    console.log("N2E2: Missatge Grabat = " + enteredText);
    return enteredText;
  });
    
  /*
  // Delete File
  try {
    fs.unlinkSync(enteredFile)
    console.log("N2E2: File Deleted");
    //file removed
  } catch(err) {
    console.error("N2E2: Delete File Error "  + err)
  }
  */
});

// Nom del fitxer a processaar
let fileName1 = "./files/test.txt";

//fileName = "./files/test.txt.Hex";

// Executa la funció ReadFromFile2 amb el fitxer proporcionat, espera,i despés executa la funció Encrypt
setTimeout(() => {
  console.log("N2E2: Settimeout de 5 segons");
  ReadFromFile2(fileName1)
    .then(value => {
        Encrypt(fileName,value)
        console.log("N2E2 entrant text per a grabar fitxer 1 ");
    
    });
   
}, 5000);


/*
N2E3:
Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior,
 tornant a generar una còpia de l'inicial
*/


// Funcio que encripta el text entrat, i el graba afeggint-hi "Crypted"
var Decrypt = ((enteredFile,enteredText) => {
  
  // Decrypt Text
  let decipher = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
  let decrypted = decipher.update(enteredText, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  //return encrypted;

  // Save File
  fs.writeFile(enteredFile + "DeCrypted", decrypted, err => {
    if (err) {
      console.error(err)
      return
    };
    //file written successfully
    console.log("N2E3: Missatge Grabat = " + enteredText);
    return enteredText;
  });

   /* 
  // Delete File
  try {
    fs.unlinkSync(enteredFile)
    console.log("N2E3: File Deleted");
    //file removed
  } catch(err) {
    console.error("N2E3: Delete File Error "  + err)
  }
  */
});

// Nom del fitxer a processaar
fileName2 = "./files/test.txtCrypted";

//fileName = "./files/test.txt.Hex";

// Executa la funció ReadFromFile2 amb el fiotxer proporcionat, espera,i despés executa la funció Encrypt
setTimeout(() => {
  console.log("N2E3: Settimeout de 10 segons");
  ReadFromFile2(fileName2)
      .then(value => {
        Decrypt(fileName,value)
          console.log("N2E3 entrant text per a grabar fitxer 1 ");
      
      });
   
  }, 10000);