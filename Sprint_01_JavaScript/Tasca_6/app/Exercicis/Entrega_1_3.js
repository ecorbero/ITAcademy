
/*
=========================================
Entrega 1.3. PROMISES AND CALLBACKST
=========================================


Nivell 1
- Exercici 1
Crea una funció que retorni una Promise que invoqui la 
funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera que 
imprimeixin un missatge diferent depenent de si la Promise
 es resol o no.

*/


let CheckPromise = boolVar => {


  const promise = new Promise((resolve, reject) => {
  
    if (boolVar) {
      resolve("value is True");
    } else {
      let reason = new Error("El valor no És Cert!!!");
      reject(reason);
      // Throwing an error also rejects the promise.
      throw reason;
    }
  });
  
  promise
    .then(result => {
      console.log(result); // 
    })
    .catch( error => {
      console.log(error); // 
  });

}
    

//CheckPromise(true);
//CheckPromise(false);

/*

Nivell 1
- Exercici 2
Crea una arrow function que rebi un paràmetre i una funció callback
 i li passi a la funció un missatge o un altre 
 (que s'imprimirà per consola) en funció del paràmetre rebut.

*/


let MostrarMissatge = (nom) =>  {
  console.log(nom);
}

let CheckSize = (parametre, callback) => {
  if (parametre  < 10){

    callback("És talla petita");
  }
  else{

    callback("És talla gran");

  }
}

//CheckSize (5, MostrarMissatge);

//CheckSize (12, MostrarMissatge);

/*

Nivell 2
- Exercici 1
Donats els objectes employees i salaries, crea una arrow function 
getEmployee() que retorni una Promise efectuant la cerca en l'objecte
 pel seu id.

*/


let employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}];

let salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}];

let GetEmployee = userId => {

  var numberOfEmployees = employees.length;
  //console.log(numberOfEmployees);

  return promise = new Promise((resolve, reject) => {

    if (userId > 0 && userId <= numberOfEmployees) {
      resolve(employees[(userId - 1)]);
    } else {
      let reason = new Error(`GetEmployee: No hi ha usuari amb aquesta id ${userId}`);
      reject(reason);
      // Throwing an error also rejects the promise.
      throw reason;
    }
  });

}

/*
GetEmployee(2)
  .then(resolve => {
    console.log(resolve); //
  })
  .catch( reject => {
    console.log(reject); //
})
*/

/*

Nivell 2
- Exercici 2
Crea una altra arrow function getSalary() similar a l'anterior
 que rebi com a paràmetre un objecte employee i retorni el seu salari.

*/

let GetSalary = enterEmployee => {

  return new Promise((resolve, reject) => {


    if (enterEmployee == undefined)
    {
      // console.log("No Existeix");

      let reason = new Error(`No existeix Aquest Id `);
      reject(reason);
      // Throwing an error also rejects the promise.
      throw reason;
    }
    else {
      // console.log("Existeix");
      let returnId;
      for (let index = 0; index < salaries.length; index++) {
        if (salaries[index].id == enterEmployee.id){
          returnId = index;
        }

      }
      resolve (salaries[returnId].salary);
    }
  })
}

/*
GetSalary(employees[0])
  .then(resolve => {
    console.log(resolve); //
  })
  .catch( reject => {
  console.log(reject); //
})
*/
/*

Nivell 2
- Exercici 3
Invoca la primera funció getEmployee() i després getSalary(),
 niant l'execució de les dues promises.

*/


/*
GetEmployee(2)
  .then(resolve => {
    console.log(resolve); //
    return resolve;
  })
  .then(resolve => {
    GetSalary(resolve).then(resolve => {
      console.log(resolve); //
      return resolve;
    }) //
  })
*/


/*

Nivell 3
- Exercici 1
Fixa un element catch a la invocació del nivell anterior
 que capturi qualsevol error i el mostri per la consola.

*/


let getEmployee = userId => {

  var numberOfEmployees = employees.length;
  //console.log(numberOfEmployees);

  return promise = new Promise((resolve, reject) => {

    if (userId > 0 && userId <= numberOfEmployees) {
      resolve(employees[(userId - 1)]);
    } else {
      let reason = new Error(`getemployee: No hi ha usuari amb id  ${userId}`);
      reject(reason);
      // Throwing an error also rejects the promise.
      throw reason;
    }
  });

}

let getSalary = enterEmployee => {

  return new Promise((resolve, reject) => {
    if (enterEmployee == undefined)
    {
      // console.log("No Existeix");

      let reason = new Error(`GetSalary: No existeix Aquest Id `);
      reject(reason);
      // Throwing an error also rejects the promise.
      throw reason;
    }
    else {
      // console.log("Existeix");
      let returnId;
      for (let index = 0; index < salaries.length; index++) {
        if (salaries[index].id == enterEmployee.id){
          returnId = index;
        }

      }
      resolve (salaries[returnId].salary);
    }
  })
}

/*
getEmployee(6)
  .then(resolve => {
    console.log(resolve); //
    return resolve;
  })
  .then(resolve => {
    getSalary(resolve).then(resolve => {
      console.log(resolve); //
      return resolve;
    }) //
  })
  .catch( reject => {
    console.log(reject); //
})
*/




module.exports.GetSalary = GetSalary;
module.exports.GetEmployee = GetEmployee;