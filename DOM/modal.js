const createPost = document.getElementById("createPost");
const modal = document.getElementById("modal");
const submit = document.getElementById("submit");
const posted = document.getElementById("posted");
const modalContainer = document.getElementById("modalContainer");

createPost.addEventListener("click", () => {
  modalContainer.style.display = "block";
});

const input = document.getElementById("input");

submit.addEventListener("click", () => {
  posted.innerText = input.value;
  modalContainer.style.display = "none";
  if (input.value === undefined) {
    modalContainer.style.display = "flex";
  }
});

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    posted.innerText = input.value;
    modalContainer.style.display = "none";
    if (input.value === undefined) {
      modalContainer.style.display = "flex";
    }
  }
});
