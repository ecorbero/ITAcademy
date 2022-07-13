
const { convertToEuro } = require('./decorator');

// Class Creadora d'articles
class CrearArticles {
    constructor(name, price, curency) {
        this.name = name;
        this.price = price;
        this.curency = curency;
    }
};

// Crear uns artcicles:
let article1 = new CrearArticles("Boli", 2, "USD");
let article2 = new CrearArticles("Llapis", 1.5, "GBP");
let article3 = new CrearArticles("Retolador", 5, "CHF");
let article4 = new CrearArticles("Carpeta", 2300, "JPY");
let article5 = new CrearArticles("Arxivador", 25, "CAD");
let article6 = new CrearArticles("Grapadora", 287, "CNY");


// funció que Decora la funció introduïda com a parametre (convertToEuro)
const funcDecorator = (decorator) =>  {
    return function (obj) {
        // LLegir els valors de l'objecte introduït
        let currency = obj.curency;    
        let amount = obj.price;
        // Executar la funció decorator (en aquest cas, convertToEuro)
        let preuFinal = decorator.call(this, currency, amount);
        return console.log(`El preu en Euros de ${obj.name} és de ${preuFinal}€ (preu original = ${obj.price} ${obj.curency})`);
        
    }
  }

  
// Crear una Funció Decorada de convertToEuro
const decoratedConverter = funcDecorator(convertToEuro);

// Mostar per Consola el preu de diversos articles en Euros
//console.clear();
decoratedConverter(article1);
decoratedConverter(article2);
decoratedConverter(article3);
decoratedConverter(article4);
decoratedConverter(article5);
decoratedConverter(article6);
console.log();
