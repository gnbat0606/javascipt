const cards = document.getElementById("cards");
const input = document.getElementById("input");
const searchButton = document.getElementById("searchButton");

// const weathers = [
//   {
//     city: "New York",
//     temperature: "28°",
//     weather: "Sunny",
//     icon: "sunny",
//     day: "day",
//     time: new Date().toLocaleTimeString("en-US"),
//   },
//   {
//     city: "London",
//     temperature: "18°",
//     weather: "Cloudy",
//     icon: "cloudy",
//     day: "night",
//     time: new Date().toLocaleTimeString("en-GB"),
//   },
//   {
//     city: "Tokyo",
//     temperature: "30°",
//     weather: "Rainy",
//     icon: "rainy",
//     day: "day",
//     time: new Date().toLocaleTimeString("ja-JP"),
//   },
//   {
//     city: "Sydney",
//     temperature: "22°",
//     weather: "Partly Cloudy",
//     icon: "cloud-bold",
//     day: "day",
//     time: new Date().toLocaleTimeString("en-AU"),
//   },
//   {
//     city: "Paris",
//     temperature: "25°",
//     weather: "Clear",
//     icon: "sun-cloudy",
//     day: "night",
//     time: new Date().toLocaleTimeString("fr-FR"),
//   },
// ];

// cloudy   <i class="fa-solid fa-cloud"></i>
// sun-cloudy  <i class="fa-solid fa-cloud-sun"></i>
// sun   <i class="fa-regular fa-sun"></i>
// cloud-bold   <i class="fa-solid fa-cloud-bolt"></i>
// rainy   <i class="fa-solid fa-cloud-rain"></i>

// const iconComponent = (icon) => {
//   if (icon === "cloudy") {
//     return `<i class="fa-solid fa-cloud"></i>`;
//   } else if (icon === "sun-cloudy") {
//     return `<i class="fa-solid fa-cloud-sun"></i>`;
//   } else if (icon === "sunny") {
//     return `<i class="fa-regular fa-sun"></i>`;
//   } else if (icon === "cloud-bold") {
//     return `<i class="fa-solid fa-cloud-bolt"></i>`;
//   } else if (icon === "rainy") {
//     return `<i class="fa-solid fa-cloud-rain"></i>`;
//   }
// };

const isDay = (day) => {
  if (day === "day") {
    return `https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/iStock-104472907-ec1d53a7c5724086414f13ae0dab8e1b.jpg`;
  } else if (day == "night") {
    return `https://science.nasa.gov/wp-content/uploads/2023/06/lospadresmilkyway-credit-prestondyches-cc-by-nc-2.0-jpg.webp?w=4096&format=png`;
  }
};

// const cardComponent = ({ city, time, temperature, weather, icon, day }) => {
//   return `<div class="card" style="background-image: url(${day})" >
//         <div class="top">
//           <div class="top-left">
//             <div class="location">${city}</div>
//             <div class="location-time">${time}</div>
//           </div>
//           <div class="temperature">${temperature}</div>
//         </div>
//         <div class="bottom">
//             <div class="cloud">${weather}</div>
//             <div class="icons">
//               ${icon}
//             </div>
//           </div>
//       </div>`;
// };

const getWeatherData = async (locationToFind) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${locationToFind}&units=Metric&appid=7c91776fb1267161889e298c3e7ceb4b`;
  const result = await fetch(url);

  return result.json();
};

searchButton.addEventListener("click", async () => {
  const { weather, main, name, timezone } = await getWeatherData(input.value);

  cards.innerHTML = "";

  cards.innerHTML += `<div class="card" style="background-image: url("") >
  <div class="top">
  <div class="top-left">
  <div class="location">${name}</div>
  <div class="location-time">${timezone}</div>
  </div>
  <div class="temperature">${main.temp}°</div>
  </div>
  <div class="bottom">
  <div class="cloud">${weather[0].main}</div>
  <div class="icons">
  ${"04n"}
  </div>
  </div>
  </div>`;
});

// const render = (event) => {
//   cards.innerHTML = "";
//   event.forEach((element) => {
//     cards.innerHTML += cardComponent(element);
//   });
// };

// input.addEventListener("keyup", (event) => {
//   if (event.target.value == "") {
//     render(weathers);
//   } else {
//     const data = weathers.filter((el) => {
//       return el.city.toLowerCase().includes(event.target.value.toLowerCase());
//     });
//     render(data);
//   }
// });
