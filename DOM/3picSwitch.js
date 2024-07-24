const prev = document.getElementById("prev");
const avatar = document.getElementById("avatar");
const next = document.getElementById("next");
const array = [
  "https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200",
  "https://lumiere-a.akamaihd.net/v1/images/hb_avatar_frontiersofpandora_tablet_2059_7d4a419e.jpeg",
  "https://ew.com/thmb/n99wCVEUGHnTaQXsxxytM1WdFfg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Avatar-The-Last-Airbender-and-Avatar-120622-34fbb37d29ff47e59407ec475a186981.jpg",
];
let a = 0;
avatar.src = array[a];
prev.style.display = "none";

next.addEventListener("click", () => {
  if (a < array.length - 1) {
    prev.style.display = "block";
    a++;
    avatar.src = array[a];
  } else {
    // a = 0;
    // avatar.src = array[a];
  }

  if (a === array.length - 1) {
    next.style.display = "none";
  }
});

prev.addEventListener("click", () => {
  if (a > 0) {
    next.style.display = "block";
    a = a - 1;
    avatar.src = array[a];
  } else {
    // a = 2;
    // avatar.src = array[a];
  }
  if (a === 0) {
    prev.style.display = "none";
  }
});
