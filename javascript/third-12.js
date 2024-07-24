let day;
let a = 1415 % 10;
switch (a) {
  case 1:
    day = "mon";
    break;
  case 2:
    day = "tue";
    break;
  case 3:
    day = "wed";
    break;
  case 4:
    day = "thu";
    break;
  case 5:
    day = "fri";
    break;
  case 6:
    day = "mon";
    break;
  case 7:
    day = "tue";
    break;
  case 8:
    day = "wed";
    break;
  case 9:
    day = "thu";
    break;
  case 0:
    day = "fri";
    break;

  default:
    throw new console.error(" error ");
    break;
}
console.log(day);
