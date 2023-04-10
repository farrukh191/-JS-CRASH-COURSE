let student = {
    name: 'fahad kamran',
    roll: 'JS-124387',
    courseName: 'JS-CRASH-COURSE',
    age: 24,
    qualification: 'graduate',
    mentor: 'Ishaq Bhojani',
    cnic: 'xxxxx-xxxxxxx-x'
}

// QUESTION # 01

// function myClosures(num1) {
//     return function (num2) {
//         return num1 + num2;
//     }
// }

// let sum = myClosures(5);
// console.log('Q # 1 ===>', sum(6));

// QUESTION # 02

// let dummyArr = ['faizan', 'shayan', 'anas', 'zubair', 'fahad', 'hilal', 'junai', 'asad', 'ishaq', 'bhojani'];
// let count = 0;
// const findFunction = (str) => {
//     console.log('fdsa')
// }
// findFunction('asad');

// QUESTION # 03

//  const addPara = (str) => {

//     // create new element <p></p>
//     let newPara = document.createElement('p');
//     let newParaText = document.createTextNode(str);
//     newPara.appendChild(newParaText);

//     document.body.appendChild(newPara)
// }
// // pass argument paragraph text

// addPara('Add this paragraph from DOM manipulation');

// QUESTION # 04

// const unorderList = (str) => {
//     // create unorder List
//     let myUl = document.getElementById('unorderList');
//     // create list item
//     let myLi = document.createElement('li');
//     let liText = document.createTextNode(str);
//     myLi.appendChild(liText);
//     myUl.appendChild(myLi)
// }
// unorderList('Lorem ipsum, dolor sit amet consectetur adipisicing elit.');

// QUESTION # 05

// const changeBgColor = (id, color) => {
//     document.getElementById(id).style.backgroundColor = color;
// };
// changeBgColor('body', 'dodgerblue');

// QUESTION # 06

// const setLocalStorage = (key, obj) => {
//     localStorage.setItem(key, JSON.stringify(obj));
// }
// setLocalStorage('student', student);

// QUESTION # 07

// const getLocalStorage = (key) => {
//     console.log(localStorage.getItem(key));
// }
// getLocalStorage('student');


// QUESTION # 08

// const setLocalData = (data) => {
//     Object.keys(data).forEach(function (key) {
//         localStorage.setItem(key, data[key]);
//     });
//     let newObj = new Object();
//     Object.keys(data).forEach(function (key) {
//         newObj[key] = localStorage.getItem(key)
//     });
//     return newObj;
// }
// let getNewObject = setLocalData(student);
// console.log('new object get localstorage', getNewObject);