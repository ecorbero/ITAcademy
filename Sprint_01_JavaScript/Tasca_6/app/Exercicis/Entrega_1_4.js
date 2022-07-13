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


let GetEmployee = (enterId) => {
  return new Promise((resolve, reject) => {
    
    // Return the position in the Array of Employees
    const index = employees.findIndex(object => {
      return object.id === enterId;
    });

    if (index < 0){ // No coincidence
    
      let reason = new Error(`No existeix Aquest Id `);
      reject(reason);
      // Throwing an error also rejects the promise.
      throw reason;
    }
    else { // enterId Exists in Aray Employees
      resolve(employees[index]);
    }
  })
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


let GetSalary = (enterEmployee) => {
  const employeeId = enterEmployee.id;

  // Return the position in the Array of Salaries
  const index = salaries.findIndex(object => {
    return object.id === employeeId;
  });

  return salaries[index].salary;

}

//console.log(GetSalary(employees[1]));


/*
- Exercici 2
Crea una funció asíncrona que rebi un id d'empleat i imprimeixi per pantalla
 el nom de l'empleat i el seu salari, usant les funcions que has definit 
 a l'exercici anterior.
*/

const PrintNameAndSalary = async (employeeID) => {
  return GetEmployee(employeeID);
}

/*
PrintNameAndSalary(1)
  .then(resolve => {
    console.log(`El nom de l'empleat és ${resolve.name}`);
    console.log(`El salari de l'empleat és ${GetSalary(resolve)}`);
    
  })
*/

/*
let PrintNameAndSalary = employeeID => {
  setTimeout (() => {
    GetEmployee(employeeID)
    .then(resolve => {
      console.log(`El nom de l'empleat és ${resolve.name}`);
      console.log(`El salari de l'empleat és ${GetSalary(resolve)}`);
    })
    .catch( reject => {
      console.log(reject); //
    })
 
  }  , 2000);
}

PrintNameAndSalary(1);
*/

/*
Nivell 2
- Exercici 1
Crea una nova funció asíncrona, que cridi a una altra funció,
que retorni una Promise que efectuï la seva funció resolve() 
després de 2 segons de la seva invocació.
*/


const ShowSalary = enterEmployee => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      // Return the position in the Array of Salaries
      const index = salaries.findIndex(object => {
        return object.id === enterEmployee;
      });
      if (index > 0){
        resolve (salaries[index].salary);
      }
      else{
        reject(new Error('No hi ha dades'));
      }
    }, (2000));
  });
}

const PrintSalary = async (employeeID) => {
  const salaryAmount = await ShowSalary(employeeID);
  console.log (salaryAmount);
}

//PrintSalary(2);

/*
Nivell 3
- Exercici 1
Captura tots els errors possibles dels nivells 1 i 2.
*/

/*
PrintNameAndSalary(6)
  .catch( reject => {
    console.log(reject); //
})
*/


const PrintSalary2 = async (employeeID) => {
  try {

    const salaryAmount = await ShowSalary(employeeID);
    console.log (salaryAmount);
  } catch (errorMessage){

    console.log (errorMessage);
  }

}

//PrintSalary2(4);


module.exports.GetSalary = GetSalary;
module.exports.GetEmployee = GetEmployee;