input = document.getElementById("inputId");
searchButton = document.getElementById("searchButton");
container = document.getElementById("container");
loading = document.getElementById("loading");

loading.style.display = "none";

input.addEventListener("keyup", async () => {
  container.innerHTML = "";
  loading.style.display = "flex";

  const { data } = await getGiphyData(input.value);

  loading.style.display = "none";

  data.forEach((element) => {
    const imgTag = `<img src =${element.images.original.url} />`;

    container.innerHTML += imgTag;
  });
});

searchButton.addEventListener("click", async () => {
  container.innerHTML = "";

  loading.style.display = "flex";

  const { data } = await getGiphyData(input.value);

  loading.style.display = "none";

  data.forEach((element) => {
    const imgTag = `<img src =${element.images.original.url} />`;

    container.innerHTML += imgTag;
  });
});

const getGiphyData = async (searchInput) => {
  const url = `https://api.giphy.com/v1/videos/search?q=${searchInput}&limit=20&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g`;
  const result = await fetch(url);

  return result.json();
};
