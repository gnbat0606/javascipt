const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const hariu = document.getElementById("result");
  hariu.innerText = Number(num1.value) * Number(num2.value);
});
