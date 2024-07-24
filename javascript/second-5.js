const a = 1297;
const b = (a % 60) % 60;
const c = parseInt(a / 60);
const d = parseInt(a / 60 / 60);
console.log(d, "Цаг", c, "Минут", b, "Секунд");
