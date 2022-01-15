// variables
let displayBox = document.querySelector(".display");
let btn = document.querySelectorAll(".btn");
const calculate = document.querySelector(".calculate");
const AC = document.querySelector(".clear-all");
const C = document.querySelector(".clear-last");

// get all numbers and operators & show them on display box by clicking
btn.forEach((item) => {
  item.addEventListener("click", function (e) {
    const x = e.target.innerHTML;
    if (displayBox.innerHTML == 0) {
      return (displayBox.innerHTML = x);
    }
    return (displayBox.innerHTML += x);
  });
});
// calculate button
calculate.addEventListener("click", function () {
  let result = displayBox.innerText;
  displayBox.innerText = eval(result);
});
// clear all (AC)
AC.addEventListener("click", function () {
  displayBox.innerHTML = 0;
});
// clear last (C)
C.addEventListener("click", function () {
  let txt = displayBox.innerText;
  if (txt.length === 1) {
    displayBox.innerText = 0;
  } else {
    displayBox.innerText = txt.substring(0, txt.length - 1);
  }
});
