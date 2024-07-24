const a = 16;
const b = 10;
const c = 20;
// Бодлого№1
const minut = a * 60;
console.log(minut, "minut");
// Бодлого№2
const odd = b % 2;
if (odd == 1) {
  console.log("odd");
} else console.log("even");
// Бодлого№3
if (a < b) {
  if (b < c) {
    console.log("True");
  } else console.log("False");
} else console.log("False");
// Бодлого№4
if (a < b) {
  if (b < c) {
    console.log(c);
  } else console.log(b);
} else if (a < c) {
  console.log(c);
} else {
  console.log(a);
}
// Бодлого№5
if (a < b) {
  if (b < c) {
    console.log(c, b, a);
  } else if (a < c) {
    console.log(b, c, a);
  } else console.log(b, a, c);
} else if (a < c) {
  console.log(c, a, b);
} else if (b < c) {
  console.log(a, c, b);
} else {
  console.log(a, b, c);
}
