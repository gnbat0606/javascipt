// const arr1 = [1, 2, 234, 123, 556, 123, 9, 19, 12, 976];
// const arr2 = [99, 123, 544, 998];
////////////////////////////-------Бодлого№1-------////////////////////////////////
// let a = 0;
// for (let i = 0; i < arr1.length; i++) {
//   a = a + arr1[i];
//   console.log(a);
// }
////////////////////////////-------Бодлого№2-------////////////////////////////////
// let a = 0;
// for (let i = 0; i < arr1.length; i++) {
//   a = a + arr1[i];
//   let b = a / arr1.length;
//   console.log(b);
// }
////////////////////////////-------Бодлого№3-------////////////////////////////////
// let a = 0;
// for (let i = 0; i < arr1.length; i++) {
//   if (a < arr1[i]) {
//     a = arr1[i];
//     console.log(a);
//   }
// }
////////////////////////////-------Бодлого№4-------////////////////////////////////
// let a = "Hello";
// let reverse = [];
// for (let i = a.length - 1; i >= 0; i--) {
//   reverse = reverse + a[i];
// }
// console.log(reverse);
////////////////////////////-------Бодлого№5-------////////////////////////////////
// let a = "Hello";
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[i] == a[j]) {
//       console.log(a[i], "давхардаж орсон байна");
//     }
//   }
// }
////////////////////////////-------Бодлого№6-------////////////////////////////////
// for (let i = 0; i < arr1.length; i++) {
//   for (let j = 0; j < arr2.length; j++) {
//     if (arr1[i] == arr2[j]) {
//       console.log(arr1[i], "огтлолцов");
//     }
//   }
// }
////////////////////////////-------Бодлого№7-------////////////////////////////////
// for (let i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }
////////////////////////////-------Бодлого№8-------////////////////////////////////
// const a = 3;
// const b = [];
// const c = "*";
// for (i = 0; i <= a; i++) {
//   if (aa) {
//   }
// }
////////////////////////////-------Бодлого№11-------////////////////////////////////
//----Палиндром тоо мөн бол true биш бол false буцаа//
// let num = 23232;
// const b = num.toString();
// let a = [];
// let isPalindrome = false;

// for (let i = b.length - 1; i >= 0; i--) {
//   a.push(b[i]);
// }
// for (let j = 0; j < b.length; j++) {
//   if (a[j] === b[j]) {
//     isPalindrome = true;
//   } else {
//     isPalindrome = false;
//     break;
//   }
// }
// console.log(b, "is palindrome=", isPalindrome);
////////////////////////////-------Бодлого№12-------////////////////////////////////
// ----Өгөгдсөн тоо анхны тоо мөн эсэхийг шалгаад мөн бол TRUE биш бол FALSE буцаа
// const primeNum = 2;
// result = true;
// for (i = 2; i < primeNum; i++) {
//   if (primeNum % i === 0) {
//     result = false;
//   }
// }
// console.log(result);
////////////////////////////-------Бодлого№13-------////////////////////////////////
///---- num хүртэлх тооны анхны тоонуудыг буцаа
// const num = 11;
// if (num === 2) {
//   console.log(num);
// } else {
//   for (let i = 2; i <= num; i++) {
//     let result = true;
//     for (j = 2; j < i / 2; j++) {
//       if (i % j === 0) {
//         result = false;
//       }
//     }

//     if (result == true) {
//       console.log(i);
//     }
//   }
// }
////////////////////////////-------Бодлого№14-------////////////////////////////////
///---- N тоо хүртэлх бүх фибоначийн тоог ол
