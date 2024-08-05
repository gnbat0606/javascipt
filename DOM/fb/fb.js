//signup page
registerButton = document.getElementById("registerButton");
usernameInput = document.getElementById("usernameInput");
passwordInputFirst = document.getElementById("passwordInputFirst");
passwordInputSecond = document.getElementById("passwordInputSecond");

registerButton.addEventListener("click", () => {
  if (
    !usernameInput.value ||
    !passwordInputFirst.value ||
    !passwordInputSecond.value
  ) {
    alert("ali neg ni hooson bna");
    return;
  }
  if (passwordInputFirst.value != passwordInputSecond.value) {
    alert("password taarahgui baina");
    return;
  }

  window.localStorage.setItem(usernameInput.value, passwordInputFirst.value);
  alert("Amjilttai burtgegdlee ");
  window.location.href = "./fb-login.html";
});
