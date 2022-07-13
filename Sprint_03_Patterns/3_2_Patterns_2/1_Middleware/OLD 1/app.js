
const fs = require('fs');

// Delcarar Funcio Middleware
const funcioMidelware = () => {
  const middlewares = [];

  const use = fn => middlewares.push(fn);

  const runMiddlewares = index => {
    const count = middlewares.length;
    if (index < count)
      middlewares[index].call(null, () => runMiddlewares(index + 1));
  }

  const get = () => {
    // Middlewares
    runMiddlewares(0);
    //console.log('get');
  }

  return {
    get,
    use
  }
}

// funció Calculadora
calculadora = (num1,num2,string) => {
  
// Crear la APP (Amb Midleware)
const app = funcioMidelware();

  if (string === "sumar") {
    let numero1 = num1;
    let numero2 = num2;

    app.use((next) => {
      // Primera Execució
      let numeroQuadrat1 = numero1 * numero1;
      let numeroQuadrat2 = numero2 * numero2;
      console.log(`La Suma és: ${numeroQuadrat1 + numeroQuadrat2}`);
      next();
    });

    app.use((next) => {
      // Primera Execució
      let numeroCub1 = numero1 * numero1 * numero1;
      let numeroCub2 = numero2 * numero2 * numero2;
       console.log(`La Suma és: ${numeroCub1 + numeroCub2}`);
      next();
    });

    app.use((next) => {
      // Primera Execució
      let numeroDiv1 = numero1 / 2;
      let numeroDiv2 = numero2 / 2;
      console.log(`La Suma és: ${numeroDiv1 + numeroDiv2}`);
      next();
    });

    
    app.get();
    
  }

}

// LLegir del Jason els Valors
let readData = JSON.parse(fs.readFileSync('./fitxer.json', 'utf8'));

calculadora(readData[0], readData[1],"sumar");