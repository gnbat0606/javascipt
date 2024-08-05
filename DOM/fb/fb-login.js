username = document.getElementById("username");
password = document.getElementById("password");
loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", () => {
  if (!username.value || !password.value) {
    alert("username esvel password hooson bna");
    return;
  }

  const dbpassword = window.localStorage.getItem(username.value);

  if (dbpassword == password.value) {
    alert("succesfully logged in");
  } else {
    alert("username password buruu bna");
  }
});
