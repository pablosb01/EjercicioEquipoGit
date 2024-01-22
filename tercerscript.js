let sumaEdades = 0;

for(let i = 0; i < students.length; i++){
    sumaEdades = sumaEdades + students[i].age;
}

let edadMedia = sumaEdades / students.length;

console.log(edadMedia);
