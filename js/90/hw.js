(function () {
  'use strict';

  class Student {
    constructor(first, last, age, grade) {
      this.first = first;
      this.last = last;
      this.age = age;
      this.grade = grade;
    }
  }

  const students = [
    new Student('Joe', 'Biden', 85, 0),
    new Student('Kamala', 'Harris', 50, 10),
    new Student('Donald', 'Trump', 84, 15),
    new Student('Melania', 'Trump', 52, 30)
  ];

  function printStudents(backwards, ...theStudents) {
    theStudents.forEach(student => {
      /*if(!backwards) {
        console.log(student.first, student.last, student.age, student.grade);
      } else {
        console.log(student.last, student.first, student.age, student.grade);
      }*/

      /*const { first, last, age, grade } = student;
      if (!backwards) {
        console.log(first, last, age, grade);
      } else {
        console.log(last, first, age, grade);
      }*/

      let { first: a, last: b, age, grade } = student;
      if (backwards) {
        /*const temp = first;
        first = last;
        last = temp;*/
        [a, b] = [b, a];
      }
      console.log(a, b, age, grade);
    });
  }

  printStudents(false, ...students);
  printStudents(true, ...students);

  function copyStudent(student) {
    //return new Student(student.last, student.first, student.age, student.grade);
    const { first, last, ...rest } = student;
    console.log(first, last, rest);
    // const {age, grade} = rest;
    return { last: first, first: last, ...rest }; // age, grade };
  }

  const copy = copyStudent(students[0]);
  //printStudents(false, copy);
  console.log(copy);
}());