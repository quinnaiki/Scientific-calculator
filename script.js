let display = document.getElementById("display");
let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendDigit(digit) {
  currentNumber += digit;
  display.value = currentNumber;
}

// function appendOperator(op) {
//   previousNumber = currentNumber;
//   currentNumber = "";
//   operator = op;
// }

// function calculate() {
//   let result = 0;
//   switch (operator) {
//     case "+":
//       result = parseFloat(previousNumber) + parseFloat(currentNumber);
//       break;
//     case "-":
//       result = parseFloat(previousNumber) - parseFloat(currentNumber);
//       break;
//     case "*":
//       result = parseFloat(previousNumber) * parseFloat(currentNumber);
//       break;
//     case "/":
//       result = parseFloat(previousNumber) / parseFloat(currentNumber);
//       break;
//   }
//   display.value = result;
//   currentNumber = result;
//   previousNumber = "";
//   operator = "";
// }

function calculate() {
  display.value = eval(display.value);
}

function clear() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  display.value = "";
}

function sin() {
  let result = Math.sin(parseFloat(currentNumber));
  display.value = result;
}

function cos() {
  let result = Math.cos(parseFloat(currentNumber));
  display.value = result;
}

function tan() {
  let result = Math.tan(parseFloat(currentNumber));
  display.value = result;
}

function log() {
  let result = Math.log(parseFloat(currentNumber));
  display.value = result;
}

function square() {
  let result = Math.pow(parseFloat(currentNumber), 2);
  display.value = result;
}

function sqrt() {
  let result = Math.sqrt(parseFloat(currentNumber));
  display.value = result;
}

function cbrt() {
  let result = Math.cbrt(parseFloat(currentNumber));
  display.value = result;
}

function pi() {
  let result = Math.PI;
  display.value = result;
}

function ran() {
  let result = Math.random(parseFloat(currentNumber));
  display.value = result;
}