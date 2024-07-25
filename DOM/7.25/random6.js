// let a = Math.floor(Math.random() * 10);
const img1 = document.getElementById("img1");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const text = document.getElementById("text");
const restart = document.getElementById("restart");
const arr = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Dice-1.svg/2048px-Dice-1.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/3/34/Dice-2.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Dice-3.svg/600px-Dice-3.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Dice-4.svg/600px-Dice-4.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Dice-5.svg/2048px-Dice-5.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/1/14/Dice-6.svg",
];

// document.addEventListener("keypress", (event) => {
//   if (event.key == " ") {
//     let a = Math.floor(Math.random() * 6 + 1);
//     img1.src = arr[a - 1];
//   }
// });

restart.style.display = "none";

let a;
let b;

button1.addEventListener("click", () => {
  a = Math.floor(Math.random() * 6 + 1);
  img1.src = arr[a - 1];
  button1.style.display = "none";
});

button2.addEventListener("click", () => {
  b = Math.floor(Math.random() * 6 + 1);
  img2.src = arr[b - 1];
  button2.style.display = "none";
});

// a > b
//   ? (text.innerText = "player 1 winner")
//   : (text.innerText = "player 2 winner");
