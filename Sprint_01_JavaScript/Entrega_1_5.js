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


// File to Enter Name
let fileName = 'test.txt';

// Function Save to File
const WriteToFile = (enteredFile, entredText) => {

  fs.writeFile(enteredFile, entredText, function (err) {
    if (err) throw err;
    console.log('"N1E2: Fitxer Grabat amb Èxit');
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
    const homedir = require('os').homedir();
    let file = fs.readdirSync(homedir);
    console.log("N2e2: Arxius Direcoti Usuari =", '\n', file);
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
const WirteToHexBase642 = async  enteredFile => {

  const myPromise = new Promise((resolve, reject) => {
   fs.readFile(enteredFile, 'utf8', (error, fileContent) => {
    if (error != null) {
     reject(error);
     return;
    }
    //Resolve the Text Read
    resolve(fileContent);
   });
  });

  // Show Message calling myPromise
  console.log('N3e1: Cridant la myPromise');
  //Wait for the myPromise to be finsihed
  const dataRead = await myPromise;
  // Shoe mesasage myPromise finsihed
  console.log('N3e1: myPromise executada tEXT = ' + dataRead);

  
  //converting string into buffer
  const buf = Buffer.from(dataRead, 'ascii');
  
  // Convert it into hex
  var hexvalue = buf.toString('hex');

  fs.writeFile("Hex_" + fileName, hexvalue, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
  
      // success case, the file was saved
      console.log('N3e1: File Hex saved!');
  });

  
  // Convert it into base64
  var base64value = buf.toString('base64');

  fs.writeFile('base64_' + fileName, base64value, (err) => {
      // throws an error, you could also catch it here
      if (err) throw err;
  
      // success case, the file was saved
      console.log('N3Ee1: File Base64 saved!');
  });

  
 }

 // EXECUTE WirteToHexBase642()
 //WirteToHexBase642(fileName);

/*
N3e2
Crea una funció que guardi els fitxers del punt anterior ara encriptats,
amb l'algorisme aes-192-cbc, i esborri els fitxers inicials
*/


const crypto = require('crypto');
// set random encryption key
const ENC_KEY = "bf3c199c2470cb477d907b1e0917c17b";
// set random initialisation vector
const IV = "5183666c72eec9e4";
// ENC_KEY and IV can be generated as crypto.randomBytes(32).toString('hex');

// create Function Encrypt File (Asynch) 
const EncryptFile = async  filename => {

  // Promise1 = Read file "Hex_" + filename
  const myPromise1 = new Promise((resolve, reject) => {
   fs.readFile("Hex_" + filename, 'utf8', (error, fileContent) => {
    if (error != null) {
     reject(error);
     return;
    }
    //Resolve the Text Read
    resolve(fileContent);
   });
  });

  // Show Message  Read file "Hex_" + filename
  console.log('N3e2: Reading file "Hex_" + filename');
  //Wait for the myPromise1 to be finsihed
  const dataRead1 = await myPromise1;
  // Show Mesasage myPromise1 finsihed
  console.log('N3e2: Finished reading file "Hex_" = ' + dataRead1);

   // Encrypt Text "_Hex_" + filename
   let cipher1 = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
   let encrypted1 = cipher1.update(dataRead1, 'utf8', 'base64');
   encrypted1 += cipher1.final('base64');
 
   
   // Save File "Crypted_Hex_" + filename
   fs.writeFile("Crypted_Hex_" + filename, encrypted1, err => {
     if (err) {
       console.error("N3e2: saving Crypted_Hex_ file " + err)
       return
     };
     //file written successfully
     console.log("N3e2: Crypted_Hex_ + file saved = " + encrypted1);
     //return enteredText;
   });
 
   // Delete File "_Hex_" + filename
   try {
     fs.unlinkSync("Hex_" + filename)
     console.log("N3e2: File Hex_ Deleted");
     //file removed
   } catch(err) {
     console.error("N3e2: Delete File Hex_ Error "  + err)
   }
  
  // Promise2 = Read file "base64_" + filename
  const myPromise2 = new Promise((resolve, reject) => {
    fs.readFile("base64_" + filename, 'utf8', (error, fileContent) => {
     if (error != null) {
      reject(error);
      return;
     }
     //Resolve the Text Read
     resolve(fileContent);
    });
   });
 
  // Show Message  Read file "base64_" + filename
   console.log('N3e2: Reading file base64_ + file');
   //Wait for the myPromise2 to be finsihed
   const dataRead2 = await myPromise2;
   // Shoe mesasage myPromise2 finsihed
   console.log('N3e2: Finished reading file "base64_" = ' + dataRead2);


   // Encrypt Text "base64_" + filename
   let cipher2 = crypto.createCipheriv('aes-256-cbc', ENC_KEY, IV);
   let encrypted2 = cipher2.update(dataRead2, 'utf8', 'base64');
   encrypted2 += cipher2.final('base64');
 
  // Save File "Crypted_base64_" + filename
  fs.writeFile("Crypted_base64_" + filename, encrypted2, err => {
    if (err) {
      console.error("N3e2: saving Crypted_base64_file " + err)
      return
    };
    //file written successfully
    console.log("N3e2: Crypted_base64_ + file saved = " + encrypted1);
    //return enteredText;
  });

  // Delete File "base64__" + filename
  try {
    fs.unlinkSync("base64_" + filename)
    console.log("N3e2: File base64_ Deleted");
    //file removed
  } catch(err) {
    console.error("N3e2: Delete File base64_ Error "  + err)
  }

};

/*
// Execute "EncryptFile(fileName)" when  WirteToHexBase642() promise is Resolved
WirteToHexBase642(fileName)
  .then( () => {
    console.log("N3e2: Start Executing EncryptFile()");
    EncryptFile(fileName);
  });
*/


/*
N2E3
Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior,
 tornant a generar una còpia de l'inicial
*/



// Funcio que Decripta el fitxer entrat, i el graba afeggint-hi "Decrypted_"
var Decrypt = async  filename => {

  // Promise1 = Read file "Hex_" + filename
  const myPromise1 = new Promise((resolve, reject) => {
   fs.readFile("Crypted_Hex_" + filename, 'utf8', (error, fileContent) => {
    if (error != null) {
     reject(error);
     return;
    }
    //Resolve the Text Read
    resolve(fileContent);
   });
  });

  // Show Message  Read file "Hex_" + filename
  console.log('N3e3: Reading file "Crypted_Hex_');
  //Wait for the myPromise1 to be finsihed
  const dataRead1 = await myPromise1;
  // Show Mesasage myPromise1 finsihed
  console.log('N3e3: Finished reading file "Crypted_Hex_"');

  // Decrypt Text
  let decipher1 = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
  let decrypted1 = decipher1.update(dataRead1, 'base64', 'utf8');
  decrypted1 += decipher1.final('utf8');

  //converting string into buffer
  const buf = Buffer.from(decrypted1, 'hex');
  
  // Convert it into hex
  var utf8Value = buf.toString('ascii');
      
   // Save File "Crypted_Hex_" + filename
   fs.writeFile("Decrypted_Hex_" + filename, utf8Value, err => {
     if (err) {
       console.error("N3e3: saving Decrypted_Hex_ file " + err)
       return
     };
     //file written successfully
     console.log("N3e3: Decrypted_Hex_ + file saved = " + decrypted1);
     //return enteredText;
   });
   

  // Promise2 = Read file "base64_" + filename
  const myPromise2 = new Promise((resolve, reject) => {
      fs.readFile("Crypted_base64_" + filename, 'utf8', (error, fileContent) => {
       if (error != null) {
        reject(error);
        return;
       }
       //Resolve the Text Read
       resolve(fileContent);
      });
     });
   
     // Show Message  Read file "Hex_" + filename
     console.log('N3e3: Reading file "Crypted_base64_');
     //Wait for the myPromise2 to be finsihed
     const dataRead2 = await myPromise2;
     // Show Mesasage myPromise2 finsihed
     console.log('N3e3: Finished reading file "Crypted_base64_"');
   
     // Decrypt Text
     let decipher2 = crypto.createDecipheriv('aes-256-cbc', ENC_KEY, IV);
     let decrypted2 = decipher2.update(dataRead2, 'base64', 'utf8');
     decrypted2 += decipher2.final('utf8');
 
     //converting string into buffer
     const buf2 = Buffer.from(decrypted2, 'base64');
     
     // Convert it into hex
     var utf8Value2 = buf2.toString('ascii');
         
      // Save File "Crypted_Hex_" + filename
      fs.writeFile("Decrypted_base64__" + filename, utf8Value2, err => {
        if (err) {
          console.error("N3e3: saving Decrypted_base64_ file " + err)
          return
        };
        //file written successfully
        console.log("N3e3: Decrypted_base64_ + file saved = " + decrypted2);
        //return enteredText;
      });

};

// 1.- Execute "WirteToHexBase642()"
// 2.- When Promise from "WirteToHexBase642()" is Resolved => Execute "EncryptFile(fileName)"
// 3.- When Promise from "EncryptFile()" is Resolved => Execute "Decrypt(fileName)"

WirteToHexBase642(fileName)
  .then( () => {
    console.log("N3e3: Start Executing EncryptFile()");
    EncryptFile(fileName)
      .then( () => {
        console.log("N3e3: Start Executing Decrypt()");
        Decrypt(fileName);
    });
  });