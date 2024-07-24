// const array = [
//   ["Bob", 25],
//   ["Alice", 30],
//   [54, "John"],
// ];
/////Бодлого№1 нэр болон насыг нь тус тусад нь хэвлэ/////
// let age = [];
// let names = [];

// array.forEach((person) => {
//   person.forEach((item) => {
//     if (typeof item === "string") {
//       age.push(item);
//     } else {
//       names.push(item);
//     }
//   });
// });
// console.log(age);
// console.log(names);
/////Бодлого№2 30тай таарсан array-н index болон хүний нэрийг хэвлэ /////
// let personId, itemEl;
// array.forEach((person, id) => {
//   person.forEach((item, el) => {
//     if (item === 30) {
//       itemEl = el;
//       personId = id;
//       console.log(personId);
//     }
//   });
// });
/////Бодлого№3 Сөрөг тоонууд хэддүгээр index дээр байгааг хэвлэ /////
// const array = [3, 7, -1, 8, -3];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] < 0) {
//     console.log(i);
//   }
// }
/////Бодлого№4 /////
//["Hello","World"]-->["Hello!","World!"]  болго
let array = ["Hello", "World"];
console.log(array);
