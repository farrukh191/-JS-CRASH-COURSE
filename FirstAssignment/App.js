// question # 01

// let firstNumber = +prompt('Enter first number');
// let secondNumber = +prompt('Enter second number');
// firstNumber > secondNumber ?
//     console.log(`${firstNumber} is greater`)
//     :
//     console.log(`${secondNumber} is greater`);


// question # 02

// let num = parseInt(prompt('Enter number check is positive or negative'));
// num > 0 ? console.log('The sign is +') : console.log('The sign in -');


// question # 03

// let largest = 0;
// for (let count = 1; count <= 5; count++) {
//     let temp = +prompt(`Enter ${count} Number`);
//     temp > largest ? largest = temp : null;
// }
// console.log(`Largest Number is ${largest}`);


// question # 04

// let iteration = 0;
// for (iteration; iteration <= 15; iteration++) {
//     iteration % 2 == 0 ?
//         console.log(`${iteration} is even`)
//         :
//         console.log(`${iteration} is odd`)
// }


// question # 05

// let marks = +prompt('Enter Marks : ');
// let grade;
// switch (true) {
//     case (marks <= 100 && marks > 90):
//         { grade = 'A'; }
//         break;
//     case (marks <= 90 && marks > 80):
//         { grade = 'B'; }
//         break;
//     case (marks <= 80 && marks > 70):
//         { grade = 'C'; }
//         break;
//     case (marks <= 70 && marks > 60):
//         { grade = 'D'; }
//         break;
//     case (marks <= 60):
//         { grade = 'F'; }
//         break;
//     default:
//         grade = 'UNDEFINED'
// }
// console.log(`Student Mark is ${marks} and grade is ${grade}`);


// question # 06

// for (let num = 1; num <= 100; num++) {
//     if (num % 3 == 0 && num % 5 == 0) {
//         console.log('FizzBuzz');
//     }
//     else if (num % 5 == 0) {
//         console.log('Buzz');
//     }
//     else if (num % 3 == 0) {
//         console.log('Fizz');
//     }
//     else {
//         console.log(num);
//     }
// }



// question # 07

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write('* ');
//     }
//     document.write('<br />')
// }