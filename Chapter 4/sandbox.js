// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// const greet = function(){
//     return 'Hello';
// };

// const greet = () => "Hello";

// const result = greet();

// console.log(result);

// const bill = (products, tax) => {
//   let total = 0;
//   for (let i = 0; i < products.length; i++) {
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// };

// console.log(bill([10, 15, 30], 0.2));

// const name = 'shaun';

// // functions

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);

// // methods

// let resultTwo = name.toUpperCase();
// console.log(resultOne, resultTwo);

// callbacks & foreach

// const myFunc = (callbackFunc) => {
//   let value = 50;
//   callbackFunc(value);
// };

// myFunc((value) => {
//   console.log(value);
// });

// let people = ["John", "bob", "jane", "she", "fred"];

// const logPerson = (person, index) => {
//   console.log(`${index}: hello ${person}`);
// };

// people.forEach(logPerson);

// practical
const ul = document.querySelector(".people");

const people = ["John", "bob", "jane", "she", "fred"];

let html = ``;

people.forEach((person) => {
  // create hmtl template for each person
  html += `<li style="color: purple">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;
