/*

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
      resolve("La Promise s'ha resolt");
    } else {

      let reason = new Error(`No existeix Aquest Id `);
      reject(reason);
    }
  });
  
  return promise

}
    

CheckPromise(true)
  .then(resolve => {
    console.log(resolve); //
  })
  .catch( reject => {
    console.log(reject); //
});

CheckPromise(false)
  .then(resolve => {
    console.log(resolve); //
  })
  .catch( reject => {
    console.log(reject); //
});

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

CheckSize (5, MostrarMissatge);

CheckSize (12, MostrarMissatge);

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

let getEmployee = enterId  => {
  return new Promise((resolve, reject) => {
    
    // Return the position in the Array of Employees
    const index = employees.findIndex(object => object.id === enterId);

    if (index < 0){ // No coincidence
    
      let reason = new Error(`No existeix Aquest Id `);
      reject(reason);
    }
    else { // enterId Exists in Aray Employees
      resolve(employees[index]);
    }
  });
}

getEmployee(2)
  .then(resolve => {
    console.log(resolve); //
  })
  .catch( reject => {
    console.log(reject); //
})

/*

Nivell 2
- Exercici 2
Crea una altra arrow function getSalary() similar a l'anterior
 que rebi com a paràmetre un objecte employee i retorni el seu salari.

*/

let getSalary = enterEmployee => {

  return new Promise((resolve, reject) => {

    // 1r => es comprova si l'objecte entrat existeix a la Array de employees; 2n => es comprova si la id entrada existeix a la array d'employees; 3r => es comprova si la id entrada existeix ala array de salaries 
    if (enterEmployee == undefined || employees.findIndex(object => object.id === enterEmployee.id) < 0 || salaries.findIndex(object => object.id === enterEmployee.id) < 0) {
      let reason = new Error(`No existeix Aquest Id `);
      reject(reason);
    }
    else {
      
      const index2 = salaries.findIndex(object => object.id === enterEmployee.id);
      resolve (salaries[index2].salary);
    }
  })
}

// Employee existeix a la array d'employees
getSalary(employees[1])
  .then(resolve => {
    console.log(`"employees[1]" salary = ${resolve}`); //
  })
  .catch( reject => {
    console.log(`"employees[1]" salary = ${reject}`);
})


// Employee No existeix a la array d'employees
getSalary(employees[4])
  .then(resolve => {    
    console.log(`"employees[4]" salary = ${resolve}`);
  })
  .catch( reject => {
    console.log(`"employees[4]" salary = ${reject}`);
})

// Objecte Employee Nou
getSalary({name: "Omar", id: 15})
  .then(resolve => {
    console.log(`"{name: 'Omar', id: 15}" salary = ${resolve}`);
  })
  .catch( reject => {
    console.log(`"{name: 'Omar', id: 15}" salary = ${reject}`);
})

/*

Nivell 2
- Exercici 3
Invoca la primera funció getEmployee() i després getSalary(),
 niant l'execució de les dues promises.

*/


// getEmployee(2)
//   .then(resolve => {
//             console.log(resolve); //
//     return resolve;
//   })
//   .then(resolve => {
//     getSalary(resolve).then(resolve => {
//       console.log(resolve); //
//       return resolve;
//     }) //
//   })
//   .catch( reject => {
//     console.log(reject); //
// })

getEmployee(2)
  .then(employee => {
    getSalary(employee)
    .then(salary => {
      console.log(employee, salary); //
    }) //
  })
  .catch( reject => {
    console.log(reject); //
})





/*

Nivell 3
- Exercici 1
Fixa un element catch a la invocació del nivell anterior
 que capturi qualsevol error i el mostri per la consola.

*/

getEmployee(2)
.then(employee => {
  getSalary(employee)
  .then(salary => {
    console.log(employee, salary); //
  }) //
})
.catch( reject => {
  console.log(reject); //
})

