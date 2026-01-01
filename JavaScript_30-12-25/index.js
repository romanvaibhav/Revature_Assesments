const num = document.getElementById("number");
const num2 = document.getElementById("number2");
const display = document.getElementById("display");
function printNum() {
  let sum = parseInt(num.value) + parseInt(num2.value);
  console.log(sum);
  display.innerHTML = sum;
}

function subNum() {
  let sum = parseInt(num.value) - parseInt(num2.value);
  console.log(sum);
  display.innerHTML = sum;
}

function divNum() {
  let sum = parseInt(num.value) / parseInt(num2.value);
  console.log(sum);
  display.innerHTML = sum;
}
function multiNum() {
  let sum = parseInt(num.value) * parseInt(num2.value);
  console.log(sum);
  display.innerHTML = sum;
}

let array = [];
let n = 5;
for (let i = 0; i < n; i++) {
  let Fruit = prompt("Enter Fruit name:");
  console.log(Fruit);
  array.push(Fruit);
}
console.log("Fruits:", array);
