/* eslint no-restricted-globals: 'off' */
// Turn duration of the movies from hours to minutes

// Get the average of all rates with 2 decimals
function ratesAverage(movies) {
  let sum = 0;
  movies.forEach(function(movie, i, array) {
    sum += Number(movie.rate);
  });
  return sum / movies.length;
}

// Get the average of Drama Movies
function dramaMoviesRate(movies) {
  let sum = [];
  movies.forEach(function(movie, i, array) {
    if (movie.genre.includes("Drama")) {
      sum.push(i);
    }
  });
  console.log(sum);
  return sum;
}
dramaMoviesRate(movies);
// Order by time duration, in growing order

// How many movies did STEVEN SPIELBERG

// Order by title and print the first 20 titles

// Best yearly rate average
