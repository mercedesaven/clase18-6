const student = {
    first_name:"",
    last_name:"",
    birthdate:""
}

let allStudents = [ ]

// no lleva parametro dentro porque el contenido esta en el DOM. 
const createStudent = () => {
    let firstNameField = document.getElementById('first_name')
    let lastNameField = document.getElementById('last_name')
    let birthDateField = document.getElementById('birthdate')
    //console.log(firstNameField.value)
    //console.log(lastNameField.value)
    //console.log(birthDateField.value)
    let student = {
        first_name: firstNameField.value, 
        last_name: lastNameField.value,
        birthdate: birthDateField.value,
     }
     allStudents.push(student)
  console.log(allStudents)
}

