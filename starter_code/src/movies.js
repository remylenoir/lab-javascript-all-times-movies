/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let sum = 0;
  movies.forEach(function(movie) {
    sum += Number(movie.rate);
  });
  let average = sum / movies.length;
  return Number(average.toFixed(2));
}
console.log(ratesAverage(movies));

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  // let sum = 0;
  // let dramaArray = [];
  // movies.forEach(function(movie, i) {
  //   if (movie.genre.includes("Drama")) {
  //     sum += Number(movie.rate);
  //   }
  //   console.log(i);
  // });
  // let average = sum / dramaArray.length;
  // console.log(sum);
  // let sum = 0;
  // let average;
  // dramaArray.forEach(function(movie) {
  //   sum += Number(movie.rate);
  //   average = sum / dramaArray.length;
  //   if (!movie.genre.includes("Drama")) {
  //     return undefined;
  //   }
  //   if (movie.genre.includes("Drama")) {
  //     return Number(average.toFixed(2));
  //   }
  // });
}
dramaMoviesRate(movies);
// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG
function howManyMovies(arr) {
  let dramaAndSS = "This is a Steven Spielberg Drama movie";
  let SSmovies = arr.filter(function(movie, i) {
    if (movie.director === "Steven Spielberg" && movie.genre.includes("Drama")) {
      console.log(`${dramaAndSS}: ${movie.title}`);
    } else {
    }
  });
}
howManyMovies(movies);

// Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  for (let i = 0; i < 20; i++) {
    arr.forEach(function(movie) {
      return arr.sort();
    });
  }
}
orderAlphabetically(movies);
// Best yearly rate average
