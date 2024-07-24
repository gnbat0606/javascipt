// ------------->Bodlog 1-1<--------------

// const movie = {
//   title: "Inception",
//   director: "Christopher Nolan",
//   year: 2010,
// };
// const text = `${movie.title} ${movie.director} ${movie.year}`;
// console.log(text);

//------------->Bodlog 1-2<--------------

// const album = {
//   title: "Abbey Road",
//   artist: "The Beatles",
//   releaseYear: 1969,
// };
// const text = `${album.title} ${album.artist} ${album.releaseYear}`;
// console.log(text);

//------------->Bodlog 1-3<--------------

// const album = {
//   title: "Thriller",
//   artist: "Michael Jackson",
//   releaseYear: 1982,
//   genre: "Pop",
// };
// const text = `${album.title} ${album.releaseYear} ${album.genre} ${album.artist}`;
// console.log(text);

//------------->Bodlog 2-1<--------------

// const employees = [
//   { name: "John", salary: 50000 },
//   { name: "Jane", salary: 60000 },
//   { name: "Jim", salary: 45000 },
// ];
// const names = employees
//   .filter(({ salary }) => salary >= 50000)
//   .map(({ name }) => name);
// console.log(names);

//------------->Bodlog 2-2<--------------

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 400 },
// ];
// const names = products
//   .filter(({ price }) => price >= 1000)
//   .map(({ name }) => name);
// console.log(names);

//------------->Bodlog 2-3<--------------

// const books = [
//   { title: 1984, author: "George Orwell" },
//   { title: "Brave New World", author: "Aldous Huxley" },
//   { title: "Fahrenheit 451", author: "Ray Bradbury" },
// ];
// const titles = books.filter(({ title }) => typeof title === "number");
// console.log(titles);

//------------->Bodlog 3-1 price ni 150+ baih, ternary ashigla<--------------

// const gadgets = [
//   { name: "Smartphone", price: 699 },
//   { name: "Smartwatch", price: 199 },
//   { name: "Bluetooth Speaker", price: 49 },
// ];
// const names = gadgets.filter(({ price }) => price >= 150);
// names.length > 0 ? console.log(names) : console.log("not found");

//------------->Bodlog 3-2: price ni 2-s ih bga tentsuu<--------------

// const groceries = [
//   { name: "Apple", price: 1 },
//   { name: "Milk", price: 3 },
//   { name: "Bread", price: 2 },
// ];
// const names = groceries.filter(({ price }) => price >= 2);
// names.length > 0 ? console.log(names) : console.log("Not found");

//------------->Bodlog 3-3: Price 100 as ih<--------------

// const furniture = [
//   { name: "Chair", price: 45 },
//   { name: "Table", price: 150 },
//   { name: "Lamp", price: 25 },
// ];
// const names = furniture
//   .filter(({ price }) => price > 100)
//   .map(({ name }) => name);
// names.length > 0 ? console.log(names) : console.log("Not found");

//------------->Bodlogo 4-1:  Ovog neriig hevle<--------------

// const authors = [
//   { firstName: "Mark", lastName: "Twain" },
//   { firstName: "Ernest", lastName: "Hemingway" },
//   { firstName: "Jane", lastName: "Austen" },
// ];
// const fullname = authors.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );
// console.log(fullname);

//------------->Bodlogo 4-2:  Ovog neriig hevle<--------------

// const students = [
//   { firstName: "Alice", lastName: "Johnson" },
//   { firstName: "Bob", lastName: "Brown" },
//   { firstName: "Carol", lastName: "Davis" },
// ];

// const fullname = students.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );
// console.log(fullname);

//------------->Bodlogo 4-3:  Ovog neriig hevle<--------------

// const musicians = [
//   { firstName: "Ludwig", lastName: "Beethoven" },
//   { firstName: "Wolfgang", lastName: "Mozart" },
//   { firstName: "Johann", lastName: "Bach" },
// ];

// const fullname = musicians.map(
//   ({ firstName, lastName }) => `${firstName} ${lastName}`
// );
// console.log(fullname);

//------------->Bodlogo 5-1:  Ovog neriig hevle<--------------

// const movies = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Dark Knight", year: 2008 },
// ];
// const yearsago = movies.map(({ year }) => 2024 - year);
// console.log(yearsago);

//------------->Bodlogo 5-1:  Ovog neriig hevle<--------------

// const albums = [
//   { title: "Abbey Road", year: 1969 },
//   { title: "The Wall", year: 1979 },
//   { title: "Thriller", year: 1982 },
// ];
// const yearsago = albums.map((object) => ({
//   Writtenyear: new Date().getFullYear() - object.year,
//   ...object,
// }));
// console.log(yearsago);

//------------->Bodlogo 5-2:  Ovog neriig hevle<--------------

// const plays = [
//   { title: "Hamlet", year: 1603 },
//   { title: "A Midsummer Night's Dream", year: 1595 },
//   { title: "Death of a Salesman", year: 1949 },
// ];
// const play = plays.map((object) => ({
//   Writtenyear: new Date().getFullYear() - object.year,
//   ...object,
// }));
// console.log(play);

//------------->Bodlogo 5-2:  Ovog neriig hevle<--------------
