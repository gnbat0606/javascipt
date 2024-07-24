const a = 5;
const b = 5;
const c = 5;
const d = 4;
if (a > 5) {
  if (b > 5) {
    if (c > 5) {
      if (d > 5) {
        console.log(a * b * c * d);
      } else {
        console.log(a * b * c);
      }
    } else if (d > 5) {
      console.log(a * b * d);
    } else {
      console.log(a * b);
    }
  } else if (c > 5) {
    if (d > 5) {
      console.log(a * c * d);
    } else {
      console.log(a * c);
    }
  } else if (d > 5) {
    console.log(a * d);
  } else {
    console.log(a);
  }
} else if (b > 5) {
  if (c > 5) {
    if (d > 5) {
      console.log(b * c * d);
    } else {
      console.log(b * c);
    }
  } else if (d > 5) {
    console.log(b * d);
  } else {
    console.log(b);
  }
} else if (c > 5) {
  if (d > 5) {
    console.log(c * d);
  } else console.log(c);
} else {
  console.log(d);
}
