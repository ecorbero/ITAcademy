const fs = require('fs');

const { join } = require("path");

const inbox = join(__dirname, "inbox");
const outbox = join(__dirname, "outbox");

const reverseText = str =>  str.split("").reverse().join("");

/*
//  Solució 1: Amb Funcions Predefinides

// Read Directory Function:
const ReadDirectory = inputDir => {
  try {
    const arrayFiles = fs.readdirSync(join(inputDir))
    return arrayFiles;
  } catch (err) {
    console.error(err)
  }
};

// Read File Function
const ReadFile = inputFile => {
  try {
    // read file
    const data = fs.readFileSync(join(inbox, inputFile), 'utf8')
    return data
  } catch (err) {
    console.error(err)
  }
};

// Write File Function
const WriteFile =  (inputFile, inputData) => {
  try {
    // reverse and write data
    fs.writeFileSync( join(outbox, inputFile), reverseText(inputData) )
    // console Success
    console.log(`${inputFile} was successfully saved in the outbox!`);
  } catch (err) {
    console.error(err)
  }
};

// Read All Files from directory, and add them to an array
let readDir = ReadDirectory(inbox); 
// Loop All Files in the array
readDir.forEach(file => {
  // read data in the file
  let dataToWrite = ReadFile(file);
  // reverse text and write data to file
  WriteFile (file, dataToWrite);
});
*/
/* //  Solució 2: Amb  fs.promises API (utilitzant .ten)

fs.promises.readdir(inbox)
.then(filenames => {
  for (let filename of filenames) {
      fs.promises.readFile(join(inbox, filename), "utf8")
      .then(data => fs.promises.writeFile(join(outbox, filename), reverseText(data)), 
      error => console.log("Error: File error"))
      .then(files => console.log(`${filename} was successfully saved in the outbox!`), 
      error => console.log("Error: Folder outbox inaccessible"))
  }
}, 
error => console.log("Error: Folder inbox inaccessible"))
*/

// Solució 3: Amb Async / Await
( async () =>  {
  try {
    const filenames =  await fs.promises.readdir(inbox);

    for (const filename of filenames) {
      
      const data = await fs.promises.readFile(join(inbox, filename), "utf8" );
      await fs.promises.writeFile(join(outbox, filename), reverseText(data) );
      console.log(`${filename} was successfully saved in the outbox!`);
      
    };
  } 
  catch (error) {
    console.error(error);
  }

})();