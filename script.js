// elements
let displayBox = document.querySelector(".display");
let btn = document.querySelectorAll(".btn");
const calculate = document.querySelector(".calculate");
const AC = document.querySelector(".clear-all");
const C = document.querySelector(".clear-last");
// get all numbers and operators & show them on display box by clicking
btn.forEach((item) => {
  item.addEventListener("click", function (e) {
    const clickedItems = e.target.innerHTML;
    displayBox.innerHTML == 0
      ? (displayBox.innerHTML = clickedItems)
      : (displayBox.innerHTML += clickedItems);
  });
});
// calculate button
calculate.addEventListener("click", function () {
  let currentVal = displayBox.innerText;
  displayBox.innerText = eval(currentVal);
});
// clear all (AC)
AC.addEventListener("click", function () {
  displayBox.innerHTML = 0;
});
// clear last value (C)
C.addEventListener("click", function () {
  let currentVal = displayBox.innerText;
  currentVal.length === 1
    ? (displayBox.innerText = 0)
    : (displayBox.innerText = currentVal.substring(0, currentVal.length - 1));
});