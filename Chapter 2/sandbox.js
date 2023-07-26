/* alert("Hello world!");
 console.log("1");

let age = 25;
let year = 2023;

console.log(age, year);

age = 50;
console.log(age);

const points = 300;

console.log(points);

const and let are the new ways to create variables
const cannot be changed later on

var score = 10;
var is the older way
console.log(score);*/

//strings
console.log("hello world");
let email = "nick@example.com";

//string concatenation
let firstName = "Nick";
let lastName = "Foley";

let fullName = firstName + " " + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toLocaleUpperCase());

let lowerName = fullName.toLocaleLowerCase();

console.log(lowerName);

//argument
let index = email.indexOf("@");
console.log(index);

// let result = email.lastIndexOf('o');

// let result = email.slice(0,4);

// let result = email.substring(4,10);

let result = email.replace("n", "d");

console.log(result);

let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

// order of operations - B I D M A S

// concatenate way

let conactWay = "My name is " + fullName;
console.log(conactWay);

// template string way
let templateString = `The email ${email} is associated with ${fullName}`;
console.log(templateString);

// creating html template
let htmlTemplate = `
<h2>${fullName}</h2>
<p>${email}</p>
`;

console.log(htmlTemplate);

/* Arrays

Array.push adds an element at the end,
array.pop removes the last element*/
