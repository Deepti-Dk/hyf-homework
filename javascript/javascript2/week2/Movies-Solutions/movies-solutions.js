console.log('Welcome to the movies queries');
console.log(movies[0]);

/**************movies with a short title */
const shortTitle = movies.filter((name) => name.title.length < 10);
console.log('Movies with a short title...');
console.log(shortTitle);

/**************movies with a long title */
const longTitle = movies.filter((name) => name.title.length > 20);
console.log('Movies with a long title...');
console.log(longTitle);

/*********number of movies made between 1980-1989 (including both the years) */
const moviesFromEighties = movies.filter(
  (name) => name.year >= 1980 && name.year <= 1989
);
console.log(
  `Number of movies made between 1980-1989 (including both the years): ${moviesFromEighties.length}`
);

/**Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4) */

const taggedMovies = movies;

taggedMovies.forEach((movie) =>
  movie.rating >= 7
    ? (movie.tag = 'Good')
    : movie.rating >= 4 && movie.rating < 7
    ? (movie.tag = 'Average')
    : (movie.tag = 'Bad')
);
console.log('Movies being tagged...');
console.log(taggedMovies);

/**Using chaining, first filter the movies array to only contain the movies rated higher than 6. Now map the movies array to only the rating of the movies. */

const highRatedMovies = movies
  .filter((movie) => movie.rating > 6)
  .map((movie) => movie.rating);
console.log(highRatedMovies);

/**Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive? */

const keywordsMovies = movies.filter(
  (movie) =>
    movie.title.toLowerCase().includes('surfer') ||
    movie.title.toLowerCase().includes('alien') ||
    movie.title.toLowerCase().includes('benjamin')
);

console.log(`Total number of movies with keywords: ${keywordsMovies.length}`);

/*****************word in the title is duplicated */

const duplicateWords = movies.filter((movie) => {
  let titleWords = movie.title.toLowerCase().split(' ');
  for (let i = 0, count = 1; i < titleWords.length; i++) {
    for (let j = i + 1; j < titleWords.length; j++) {
      if (titleWords[i] === titleWords[j]) {
        count++;
        titleWords[j] = '0';
      }
    }
    if (count > 1 && titleWords[i] != '0') return movie;
  }
});
console.log(duplicateWords);

/***average rating of all the movies using reduce. Optional */
const sum = movies
  .map((movie) => movie.rating)
  .reduce((prev, next) => prev + next);
console.log(
  'Average rating of all the movies: ' + (sum / movies.length).toFixed(2)
);
