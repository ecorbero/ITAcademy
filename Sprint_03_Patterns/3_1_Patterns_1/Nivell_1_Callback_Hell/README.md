# 3_1_Patterns - Nivell 1: Callback Hell

Executa "node callback_hell"

## Solució 1: Amb Funcions Predefinides que retornen una Promise

Definim les funcions ReadFile i WriteFile, que retornen una Promise. Les cridem després al FOREACH Loop, i les anidem amb un .then i un .catch.

Tot i que el codi és una mica més llarg que les altres solucions, em sembla el més clar de tots (i més endreçat).

## Solució 2: Amb  fs.promises API (utilitzant .then)

Utilitzem la API fs.promises per a les funcions readdir, readFile i writeFile. I resolem les promises al FOR Loop.

El codi és més curt, però em sembla menys intel·ligible.

## Solució 3: Amb  fs.promises API (Amb Async / Await)

Utilitzem AWAIT per anar resolent totes les promises. Fem  un TRY ... CATCH per si hi ha errors.




