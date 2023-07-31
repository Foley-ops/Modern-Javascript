// Lesson 46

/*
const para = document.querySelector("body > h1");

console.log(para);

const paras = document.querySelectorAll("p");

const errors = document.querySelectorAll(".error");

paras.forEach((para) => {
  console.log(para);
});

console.log(errors);
*/

// Lesson 47

/*
// get an element by ID

const title = document.getElementById("page-title");
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName("error");
console.log(errors);
console.log(errors[0]);

// get elements byy their tag name
const paras = document.getElementsByTagName("p");
console.log(paras);
*/

// Lesson 48

/*

const para = document.querySelector("p");

// console.log(para.innerText);
// para.innerText = "ninjas are awesome!";

const paras = document.querySelectorAll("p");

// paras.forEach((para) => {
//   console.log(para.innerText);
// });

const content = document.querySelector(".content");

// console.log(content.innerHTML);

// content.innerHTML += "<h2>this is a new h2</h2>";
// console.log(content);

const people = ["mario", "luigi", "yoshi"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
 */

// Lesson 49
/*
const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://oldschool.runescape.wiki/");
link.innerText = "Oldschool RS Wiki";

const mssg = document.querySelector("p");

console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
mssg.setAttribute("style", "color: green;");
*/

// Lesson 50

/*
const title = document.querySelector("h1");

// title.setAttribute("style", "margin: 50px");

console.log(title.style);
console.log(title.style.color);

title.style.margin = "50px";
title.style.color = "crimson";
title.style.fontSize = "60px";
title.style.margin = "";
*/

// Lesson 52
/*

const article = document.querySelector("article");

// console.log(article.children);
// console.log(Array.from(article.children));

// Array.from(article.children).forEach((child) => {
//   child.classList.add("articleElement");
// });

const title = document.querySelector("h2");

console.log(title.parentElement);
console.log(title.parentElement.parentElement);
console.log(title.nextElementSibling);
console.log(title.previousElementSibling);

*/

// Lesson 53
// lesson 54
// lesson 55
/* 

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("you clicked me");
// });

const ul = document.querySelector("ul");
// ul.remove();

const button = document.querySelector("button");

const input = document.querySelector("input");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  // adds to bottom - ul.append(li);
  // ul.innerHTML += "<li>something new</li>";
  ul.prepend(li);
});

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log("you clicked me");
    // console.log(e);
    // console.log(e.target);
    // console.log(item);
    // e.target.style.textDecoration = "line-through";
    console.log("event in LI");
    e.stopPropagation();
    e.target.remove();
  });
});

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
 */

// Lesson 56
/* 
const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", () => {
  console.log("OI! My content is copyright");
});

const box = document.querySelector(".box");

box.addEventListener("mousemove", (e) => {
  // console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX} y pos ${e.offsetY}`;
});

document.addEventListener("wheel", (e) => {
  console.log(e.pageX, e.pageY);
});
 */

// Lesson 57
