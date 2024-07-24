const hasah = document.getElementById("hasah");
const number = document.getElementById("number");
const nemeh = document.getElementById("nemeh");

nemeh.addEventListener("click", () => {
  const num = Number(number.innerText);
  number.innerText = num + 1;
});

hasah.addEventListener("click", () => {
  const num = Number(number.innerText);
  if (num > 0) {
    number.innerText = num - 1;
  }
});
