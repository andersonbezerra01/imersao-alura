const searchInput = document.getElementById("search-input");
const resultsArtist = document.getElementById("result-artist");
const resultsPlaylist = document.getElementById("result-playlists");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
    .then((response) => response.json())
    .then((results) => displayResults(results));
}

function displayResults(results) {
  resultsPlaylist.classList.add("hidden");
  const artistName = document.getElementById("artist-name");
  const artistImage = document.getElementById("artist-img");
  results.forEach((element) => {
    artistName.innerText = element.name;
    artistImage.src = element.urlImg;
  });
  resultsArtist.classList.remove("hidden");
}

document.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  console.log(searchTerm);
  if (searchTerm === "") {
    resultsArtist.classList.add("hidden");
    resultsPlaylist.classList.remove("hidden");
    return;
  }
  requestApi(searchTerm);
});