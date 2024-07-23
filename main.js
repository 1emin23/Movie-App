const searchInput = document.querySelector("#searchInput");

const movieApi = new MovieApi();
runEvents();
function runEvents() {
  document.addEventListener("DOMContentLoaded", movieApi.getPopularMovies());
  searchInput.addEventListener("keypress", getMoviesByName);
}

function getMoviesByName(e) {
  if (e.keyCode == "13") {
    console.log(e.target.value);
    const movie_name = e.target.value.trim();
    if (movie_name != "" && movie_name != null) {
      console.log("burada");
      movieApi.getMoviesByName(movie_name);
    } else {
      movieApi.getPopularMovies();
    }
    e.preventDefault();
  }
}
