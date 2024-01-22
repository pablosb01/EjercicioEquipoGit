/* Print the team in age order (name age). */

students.sort(function(a, b){
    return a.age - b.age;
});

students.forEach(function(student){
    console.log(student.surname);
});
