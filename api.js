class MovieApi {
  constructor() {
    this.apiKey = "faea17309fb3822aa4d8eea6577c924e";
    this.imageBaseUrl = "http://image.tmdb.org/t/p/w500";
    this.popularUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;
    this.movies = document.querySelector(".movies");
    this.searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=`;
  }
  async getPopularMovies() {
    const response = await fetch(this.popularUrl);
    const movies = await response.json();
    this.displayInfo(movies);
  }

  async getMoviesByName(movieName) {
    const res = await fetch(`${this.searchUrl}${movieName}`);
    const data = await res.json();
    this.displayInfo(data);
  }
  displayInfo(movies) {
    this.movies.innerHTML = "";
    movies.results.forEach((movie) => {
      console.log("buradan sonra", movie);
      if (movie.poster_path != null && movie.poster_path != "") {
        this.movies.innerHTML += `
          <div class="movie">
            <img class="moviePicture" width="230" height="345"
              src="${this.imageBaseUrl}${movie.poster_path}">
            <div class="info">
                <h4 class="movieName">${movie.title}</h4>
                <h5 class="imdbRate ${this.changeRateBackColor(
                  movie.vote_average
                )}">${movie.vote_average.toFixed(1)}</h5>
            </div>
          </div>`;
      }
    });
  }

  changeRateBackColor(imdbPoint) {
    if (imdbPoint >= 8) {
      return "green";
    } else if (imdbPoint >= 7) {
      return "yellow";
    }
    return "red";
  }
}
