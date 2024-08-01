/*
drag2 dragstart1; dragend3;
drop: dragcenter, dragover, drop, dragleave
*/
// chireh bolomjtoi 2 tag ni img tag, anchor tag
// draggabl= "true"

const items = document.querySelectorAll(".items");
const holes = document.querySelectorAll(".holes");

items.forEach((number, index) => {
  number.setAttribute("id", `number-${index}`);
});
items.forEach((number) => {
  number.setAttribute("draggable", "true");
});

holes.forEach((number, index) => {
  number.setAttribute("id", `hole-${index}`);
});

console.log(items);

items.forEach((number) => {
  number.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
    event.target.style.backgroundColor = "green";
  });
});

items.forEach((number) => {
  number.addEventListener("dragend", (event) => {
    event.target.style.backgroundColor = "#c0c0c0";
  });
});

holes.forEach((number) => {
  number.addEventListener("drop", (event) => {
    const itemid = event.dataTransfer.getData("text/plain");
    holes.preventChild();
    holes.target.appendChild(document.getElementById(itemid));
  });
});
