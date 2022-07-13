# 3.2. Patterns : Nivell 1, Middleware

Executar: "node app"

## Bibliografia:

Per entendre com fer un Middleware en JavaScript hem seguit aquest tutorial. Tot i que està en portuguès, s'entén força bé.

https://www.youtube.com/watch?v=E5JaeELl2RE

## Desenvolupament:

1. Creem la classe Middleware
2. Creem la classe Calculadora
3. Creem l'arxiu "data.Json", amb diferents valors
4. Creem l'arxiu "app.js", i hi importem les classes Middleware i Calculadora
5. Guardem els valors del Json a la variable "readData"
6. Creem un objecte "calculator", amb la classe Calculadora
7. Creem un objecte "app", incorporant el Middleware a la calculator
8. Definim els usos del Middleware (al quadrat, al cub i dividir per dos)
9. Cridem l'objecte "calculator" amb les funcions de suma (add), resta (substrat) i multiplicació (multiply)
10. Cridem l'objecte "app" (calculator amb Middleware) amb les esmentades funcions
