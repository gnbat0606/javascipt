const a = 1;
const b = 3;
const c = 4;
const d = 0;
if (a < b && a < c && a < d) {
  console.log("Хамгийн бага тоо бол", a);
} else if (b < a && b < c && b < d) {
  console.log("Хамгийн бага тоо бол", b);
} else if (c < a && c < b && c < d) {
  console.log("Хамгийн бага тоо бол", c);
} else {
  console.log("Хамгийн бага тоо бол", d);
}
