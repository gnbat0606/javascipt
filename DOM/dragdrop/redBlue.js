const reset = document.getElementById("reset");
const left = document.getElementById("left");
const right = document.getElementById("right");
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let win = document.getElementById("win");
let num1 = number1.innerText;
let num2 = number2.innerText;

reset.addEventListener("click", () => {
  number1.innerText = 50;
  number2.innerText = 50;
  num1 = 50;
  num2 = 50;
  left.style.width = "50%";
  right.style.width = "50%";
});

window.addEventListener("keypress", (event) => {
  if (event.code === "Space") {
    if (num1 < 100) {
      num1++;
      num2--;
      left.style.width = `${num1}%`;
      right.style.width = `${num2}%`;
      number1.innerText = num1;
      number2.innerText = num2;
      console.log();
      if (num1 == 100) {
        win.innerText = "red wins";
      }
    }
  }
});

left.addEventListener("click", () => {
  if (num1 < 100) {
    num1++;
    num2--;
    left.style.width = `${num1}%`;
    right.style.width = `${num2}%`;
    number1.innerText = num1;
    number2.innerText = num2;
    console.log();
    if (num1 == 100) {
      win.innerText = "red wins";
    }
  }
});

right.addEventListener("click", () => {
  if (num2 < 100) {
    num1--;
    num2++;
    left.style.width = `${num1}%`;
    right.style.width = `${num2}%`;
    number1.innerText = num1;
    number2.innerText = num2;
    console.log();
    if (num2 == 100) {
      win.innerText = "blue wins";
    }
  }
});
