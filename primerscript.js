students.sort(function(a, b) { // sort ordena los elementos de array
    let surnameA = a.surname.toUpperCase(); // crea variable surname y 
    let surnameB = b.surname.toUpperCase(); //toUpperCase lo hace mayuscula

    if (surnameA < surnameB) {             
        return -1;
    } else if (surnameA > surnameB) {   
        return 1;
    } else {
        return 0;
    }
});

students.forEach(function(student) {
    console.log(student);
});