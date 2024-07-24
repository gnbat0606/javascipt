const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
let uildel = document.getElementById("uildel");
const button = document.getElementById("button");
const result = document.getElementById("result");
// let number1 = Number(num1.value);
// let number2 = Number(num2.value);

button.addEventListener("click", () => {
  switch (uildel.value) {
    case "+":
      result.innerText = Number(num1.value) + Number(num2.value);
      break;
    case "-":
      result.innerText = Number(num1.value) - Number(num2.value);
      break;
    case "*":
      result.innerText = Number(num1.value) * Number(num2.value);
      break;
    case "/":
      result.innerText = Number(num1.value) / Number(num2.value);
      break;
    case "%":
      result.innerText = Number(num1.value) % Number(num2.value);
      break;
    default:
      throw new Error("");
      break;
  }
});
