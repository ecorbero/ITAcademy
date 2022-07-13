# 3.2. Patterns : Nivell 2. Decorator

Executar: "node app"

## Bibliografia:

Per entendre com fer un Decorator hem seguit el tutorial d'aquesta pàgina web:

 https://blog.logrocket.com/understanding-javascript-decorators/#:~:text=A%20decorator%20(also%20known%20as,treated%20as%20first%2Dclass%20citizens

Basant-nos en el tutorial, hem creat tot el codi de nou.

## Desenvolupament:

A l'arxiu "decorator.js" hem creat una funció que entrant un nombre ('amount') i un nom de moneda ('currency'), retorna un nombre ('valorTwoDecimals') que serà el valor en euros. Els valors de conversió es llegiran de l'arxiu "currency_conversions.json".

Creem un arxiu "app.js", on importem la funció que hem creat a l'arxiu "decorator.js", i l'anomenem "convertToEuro". Construïm un classe que crea objectes, amb 'name', 'price' i 'currency'. Creem 6 objectes, amb preus i monedes diferents. Després creem la funció "funcDecorator" que decora la funció "convertToEuro". Entrant un objecte article a la funció "funcDecorator", ens retornarà per consola el preu en euros de l'article, amb el seu nom i el preu original. Creem una funció nova, "decoratedConverter", utilitzant "funcDecorator(convertToEuro)". Per acabar executem la funció "decoratedConverter" amb els diferents articles que hem creat anteriorment.

