const arr = ["Todo", "In progress", "Stuck", "Done"];
const boards = document.getElementById("boards");
arr.forEach((names) => {
  boards.innerHTML += `<div class="board">
          <div class="board-header"> ${names} <span class="count">0</span></div>
          <div class="cards" id="todo">
            <div class="card">
              <div class="done"><i class="fa-solid fa-check"></i></div>
              <div class="detail">
                <h4>Todo</h4>
                <p>This is a Todo card</p>
                <div class="priority">High</div>
              </div>
              <div class="actions">
                <div class="done"><i class="fa-solid fa-xmark"></i></div>
                <div class="done">
                  <i class="fa-solid fa-pen-to-square"></i>
                </div>
              </div>
            </div>
          </div>
          <div id="addBtn" class="add-btn">
            <i class="fa-solid fa-plus"></i>
            <div>Add card</div>
          </div>
        </div>`;
});

const addBtn = document.getElementById("addBtn");
const modalContainer = document.getElementById("modalContainer");

console.log(boards);

console.log(boards.innerHTML);

addBtn.addEventListener("click", () => {
  console.log(addBtn);
  modalContainer.style.display = "flex";
});

const away = document.getElementById("away");
away.addEventListener("click", () => {
  modalContainer.style.display = "none";
});
