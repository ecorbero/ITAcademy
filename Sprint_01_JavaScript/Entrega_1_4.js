/*
Nivell 1
- Exercici 1
Donats els objectes employees i salaries, crea una arrow function
 getEmployee que retorni una Promise efectuant la cerca en l'objecte
  pel seu id. Crea una altra arrow function getSalary que rebi 
  com a paràmetre un objecte employee i retorni el seu salari.


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


let GetEmployee = enterId  => {
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

GetEmployee(2)
  .then(resolve => {
    console.log("N1e1 Empleat =", resolve); //
  })
  .catch( reject => {
    console.log("N1e1 Empleat = ", reject); //
})


let GetSalary = enterEmployee => {

  return new Promise((resolve, reject) => {

    // 1r => es comprova si l'objecte entrat existeix a la Array de employees; 2n => es comprova si la id entrada existeix a la array d'employees; 3r => es comprova si la id entrada existeix ala array de salaries 
   if (enterEmployee == undefined || employees.findIndex(object => object.id === enterEmployee.id) < 0 || salaries.findIndex(object => object.id === enterEmployee.id) < 0) {
        let reason = new Error(`N1e1. No existeix Aquest Id `);
      reject(reason);
    }
    else {
      // Return the position in the Array of Employees
      const index = salaries.findIndex(object => object.id === enterEmployee.id);
      resolve (salaries[index].salary);
    }
  })
}

GetSalary(employees[1])
  .then(resolve => {
    console.log("N1e1 Salari Empleat =", resolve); //
  })
  .catch( reject => {
    console.log(reject); //
})

/*
- Exercici 2
Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla
 el nom de l'empleat i el seu salari, usant les funcions que has definit 
 a l'exercici anterior.
*/

const PrintNameAndSalary = async (employeeID) => {
  const employe = await GetEmployee(employeeID);
  const employeName = employe.name;
  const employeSalary = await GetSalary(employe);
  
  console.log("N1e2, Nom empleat = " + employeName);
  console.log("N1e2, Salari empleat = " + employeSalary);
};

PrintNameAndSalary(1);



/*
Nivell 2
- Exercici 1
Crea una nova funció asíncrona, que cridi a una altra funció,
que retorni una Promise que efectuï la seva funció resolve() 
després de 2 segons de la seva invocació.
*/

const OtherFunction = bool => {
  return new Promise((resolve,reject) => {          // que retorni una Promise 
    setTimeout(() => {                              // després de 2 segons de la seva invocació
      
      if (bool){
        resolve ("N2e1. Després de 2 segons");      // efectuï la seva funció resolve()
      }
      else{
        reject(new Error('N2e1. No hi ha dades'));
      }
    }, (2000));                                       // 2 segons de la seva invocació
  });
}
 
const AsyncFunction = async (bool) => {       // Crea una nova funció asíncrona
  
  try {
    const showResult = await OtherFunction(bool);     // que cridi a una altra funció
    console.log (showResult);
  } catch (error) {
    console.error(error);
  }

}

AsyncFunction(true);

/*
const ShowSalary = enterEmployee => {
  return new Promise((resolve,reject) => {                  // que retorni una Promise 
    setTimeout(() => {                                      // després de 2 segons de la seva invocació
      // Return the position in the Array of Salaries
      const index = salaries.findIndex(object => {
        return object.id === enterEmployee;
      });
      if (index > 0){
        resolve (salaries[index].salary);                    // efectuï la seva funció resolve()
      }
      else{
        reject(new Error('No hi ha dades'));
      }
    }, (2000));
  });
}

const PrintSalary = async (employeeID) => {               // Crea una nova funció asíncrona
  const salaryAmount = await ShowSalary(employeeID);      // que cridi a una altra funció
  console.log (salaryAmount);
}

PrintSalary(2);
*/

/*
Nivell 3
- Exercici 1
Captura tots els errors possibles dels nivells 1 i 2.
*/

const CheckErrors = async (bool, id) => {       // Crea una nova funció asíncrona
  
  try {
    const showResult = await OtherFunction(bool);     // que comprovi la funció ShowResult, primer
    const showResult2 = await PrintNameAndSalary(id); // que comprovi la funció PrintNameAndSalary, segon
    console.log (`N3e1. Tot Correcte`);
  } catch (error) {
        console.log(`N3e1. Error: ${error}`);          // mostra per consola qualsevol error de les funcions anteriors

  }

}

// id employee no existeix
CheckErrors(true, 6);
// valor OtherFunction = false
CheckErrors(false, 1);
// Els dos anteriors
CheckErrors(false, 6);
