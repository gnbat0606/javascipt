const arr = ["Todo", "In progress", "Stuck", "Done"];
const boards = document.getElementById("boards");

const inputValues = {
  title: "",
  desc: "",
  status: "",
  priority: "",
};

arr.forEach((names) => {
  boards.innerHTML += `<div class="board" id="board">
          <div class="board-header"> ${names} <span class="count">0</span></div>
          <div class="cards"></div>
          <div id="addBtn" class="add-btn">
            <i class="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>`;
});

const cardCreator = () => {
  return `<div class="card">
    <div class="done">
      <i class="fa-solid fa-check"></i>
    </div>
    <div class="detail">
      <h4 class="h4">${inputValues.status}</h4>
      <p class="desText">${inputValues.title}</p>
      <div class="priority">${inputValues.desc}</div>
    </div>
    <div class="actions">
      <div class="done">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="done">
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
    </div>
  </div>`;
};

//+tsonh nemeh +card nemeh
const addBtns = document.querySelectorAll(".add-btn");
const modalContainer = document.getElementById("modalContainer");
addBtns.forEach((button) => {
  button.addEventListener("click", () => {
    modalContainer.style.display = "flex";
  });
});

//-tsonhiig gargah ghde submit button uyd
//+++ value log
const title = document.getElementById("title");
const description = document.getElementById("description");
const stat = document.getElementById("stat");
const priority = document.getElementById("priority");
////////////////////////
const cards = document.querySelectorAll(".cards");
// const h4 = document.querySelectorAll(".h4");
// const desText = document.querySelectorAll(".desText");
// const priorityText = document.querySelectorAll(".priority");
////////////////////////
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.style.display = "none";

  inputValues.title = title.value;
  inputValues.desc = description.value;
  inputValues.status = stat.value;
  inputValues.priority = priority.value;

  const craetedCard = cardCreator();

  // cards.forEach(())

  if (stat.value == "todo") {
    cards[0].innerHTML += craetedCard;
  }
});

//+tsonhiig gargah
window.addEventListener("click", (event) => {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
});

//
