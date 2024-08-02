const names = [
  {
    name: "Todo",
    id: "todo",
  },
  {
    name: "In progress",
    id: "inprogress",
  },
  { name: "Stuck", id: "stuck" },
  {
    name: "Done",
    id: "done",
  },
];
const boards = document.getElementById("boards");

const inputValues = {
  title: "",
  desc: "",
  status: "",
  priority: "",
  id: "",
};

names.forEach((name) => {
  boards.innerHTML += `<div class="board" id="${name.id}">
          <div class="board-header"> ${name.name} <span class="count">0</span></div>
          <div class="cards" ></div>
          <div id="addBtn" class="add-btn">
            <i class="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>`;
});

const cardCreator = () => {
  return `<div class="card" draggable="true" ondragstart="dragCard(${inputValues.id})" id="${inputValues.id}" >
    <div class="done" id="doneButton" onclick="doneCard(${inputValues.id})" >
      <i class="fa-solid fa-check" ></i>
    </div>
    <div class="detail">
      <h4 class="h4">${inputValues.title}</h4>
      <p class="desText">${inputValues.desc}</p>
      <div class="priority">${inputValues.priority}</div>
    </div>
    <div class="actions">
      <div class="done" onclick="removeCard(${inputValues.id})">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="done" >
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
    description.value = "";
    title.value = "";
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

  if (title.value == "") {
    alert("title оруулна уу");
    throw new Error("title hooson bn");
  }
  if (description.value == "") {
    alert("description оруулна уу");
    throw new Error("title hooson bn");
  }

  inputValues.id = Date.now();

  const createdCard = cardCreator();

  if (stat.value == "todo") {
    cards[0].innerHTML += createdCard;
  } else if (stat.value == "inprogress") {
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

const removeCard = (id) => {
  let card = document.getElementById(id);
  const cardDad = card.parentNode;
  cardDad.removeChild(card);
};

const dragCard = (id) => {
  let card = document.getElementById(id);
};

cards.forEach((card) => {
  card.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text", event.target.id);
  });
});

const board = document.querySelectorAll(".board");

const doneButton = document.getElementById("doneButton");
const doneCard = (id) => {
  let card = document.getElementById(id);
  cards[3].appendChild(card);
  card.childNodes[1].style.backgroundColor = "black";
  card.childNodes[1].childNodes[1].style.color = "white";
};

board.forEach((number) => {
  number.addEventListener("dragover", (event) => {
    event.preventDefault();
  });
  number.addEventListener("drop", (event) => {
    const cardId = event.dataTransfer.getData("text");
    const cards = event.currentTarget.querySelector(".cards");

    const whichItem = document.getElementById(cardId);

    if (event.currentTarget.id === "done") {
      whichItem.childNodes[1].style.backgroundColor = "black";
      whichItem.childNodes[1].childNodes[1].style.color = "white";
    } else {
      whichItem.childNodes[1].style.backgroundColor = "white";
      whichItem.childNodes[1].childNodes[1].style.color = "black";
    }

    cards.appendChild(document.getElementById(cardId));
  });
});
