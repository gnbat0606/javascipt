const names = ["Todo", "In progress", "Stuck", "Done"];
const boards = document.getElementById("boards");
const deleteCard = document.getElementById("deleteCard");

const inputValues = {
  title: "",
  desc: "",
  status: "",
  priority: "",
  id: "",
};

names.forEach((names) => {
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
  return `<div class="card" draggable="true" id="${inputValues.id}" >
    <div class="done">
      <i class="fa-solid fa-check"></i>
    </div>
    <div class="detail">
      <h4 class="h4">${inputValues.title}</h4>
      <p class="desText">${inputValues.desc}</p>
      <div class="priority">${inputValues.priority}</div>
    </div>
    <div class="actions">
      <div class="done">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="done" id="deleteCard">
        <i class="fa-solid fa-pen-to-square"></i>
      </div>
    </div>
  </div>`;
};

//+tsonh nemeh +card nemeh
const addBtns = document.querySelectorAll(".add-btn");
const modalContainer = document.getElementById("modalContainer");
addBtns.forEach((halo) => {
  halo.addEventListener("click", () => {
    modalContainer.style.display = "flex";
  });
});

//-tsonhiig gargah ghde submit button uyd
const title = document.getElementById("title");
const description = document.getElementById("description");
const stat = document.getElementById("stat");
const priority = document.getElementById("priority");
const cards = document.querySelectorAll(".cards");
const submitButton = document.getElementById("submitButton");
//
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  modalContainer.style.display = "none";

  inputValues.title = title.value;
  inputValues.desc = description.value;
  inputValues.status = stat.value;
  inputValues.priority = priority.value;

  const createdCard = cardCreator();

  if (title.value == "") {
    alert("title оруулна уу");
    throw new Error("title hooson bn");
  }
  if (description.value == "") {
    alert("description оруулна уу");
    throw new Error("title hooson bn");
  }

  inputValues.id = Date.now();

  if (stat.value == "todo") {
    cards[0].innerHTML += createdCard;
    inputValues.id = Date.now();
    console.log(inputValues.id);
  } else if (stat.value == "inprogress") {
    console.log(inputValues.id);
    cards[1].innerHTML += createdCard;
  } else if (stat.value == "stuck") {
    cards[2].innerHTML += createdCard;
  } else if (stat.value == "done") {
    cards[3].innerHTML += createdCard;
  }
});

//+tsonhiig gargah

window.addEventListener("click", (event) => {
  ``;
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
});
