const movies = [
  { title: "'71", year: 2014, rating: 7.2, votes: 41702, running_times: 5940 },
  {
    title: "'A' gai wak",
    year: 1983,
    rating: 7.4,
    votes: 11942,
    running_times: 6300,
  },
  {
    title: "'Breaker' Morant",
    year: 1980,
    rating: 7.9,
    votes: 10702,
    running_times: 6420,
  },
  {
    title: "'Crocodile' Dundee II",
    year: 1988,
    rating: 5.5,
    votes: 47180,
    running_times: 6480,
  },
  {
    title: '(500) Days of Summer',
    year: 2009,
    rating: 7.7,
    votes: 412368,
    running_times: 5700,
  },
  {
    title: '*batteries not included',
    year: 1987,
    rating: 6.6,
    votes: 25636,
    running_times: 6360,
  },
  {
    title: "...E tu vivrai nel terrore! L'aldilà",
    year: 1981,
    rating: 6.9,
    votes: 16484,
    running_times: 5220,
  },
  {
    title: '...and justice for all.',
    year: 1979,
    rating: 7.4,
    votes: 25408,
    running_times: 7140,
  },
  { title: '10', year: 1979, rating: 6, votes: 13152, running_times: 7320 },
  {
    title: '10 Cloverfield Lane',
    year: 2016,
    rating: 7.2,
    votes: 216151,
    running_times: 6240,
  },
  {
    title: '10 Items or Less',
    year: 2006,
    rating: 6.7,
    votes: 13342,
    running_times: 4920,
  },
  {
    title: '10 Things I Hate About You',
    year: 1999,
    rating: 7.2,
    votes: 247070,
    running_times: 5820,
  },
  {
    title: '10 Years',
    year: 2011,
    rating: 6.1,
    votes: 20790,
    running_times: 6000,
  },
  {
    title: '10,000 BC',
    year: 2008,
    rating: 5.1,
    votes: 114750,
    running_times: 6540,
  },
  {
    title: '100 Feet',
    year: 2008,
    rating: 5.5,
    votes: 10979,
    running_times: 6240,
  },
  {
    title: '100 Girls',
    year: 2000,
    rating: 5.9,
    votes: 19232,
    running_times: 5640,
  },
  {
    title: '101 Dalmatians',
    year: 1996,
    rating: 5.7,
    votes: 83245,
    running_times: 6180,
  },
  {
    title: '102 Dalmatians',
    year: 2000,
    rating: 4.9,
    votes: 28927,
    running_times: 6000,
  },
  {
    title: '11-11-11',
    year: 2011,
    rating: 4,
    votes: 11425,
    running_times: 5400,
  },
  {
    title: '11:14',
    year: 2003,
    rating: 7.2,
    votes: 40149,
    running_times: 5700,
  },
  {
    title: '12 Angry Men',
    year: 1957,
    rating: 8.9,
    votes: 518449,
    running_times: 5760,
  },
  {
    title: '12 Rounds',
    year: 2009,
    rating: 5.6,
    votes: 24457,
    running_times: 6480,
  },
  {
    title: '12 Years a Slave',
    year: 2013,
    rating: 8.1,
    votes: 513047,
    running_times: 8040,
  },
  {
    title: '127 Hours',
    year: 2010,
    rating: 7.6,
    votes: 302809,
    running_times: 5640,
  },
  { title: '13', year: 2010, rating: 6.1, votes: 36623, running_times: 5460 },
  {
    title: '13 Going on 30',
    year: 2004,
    rating: 6.1,
    votes: 134434,
    running_times: 5880,
  },
  {
    title: '13 Hours',
    year: 2016,
    rating: 7.3,
    votes: 85771,
    running_times: 8640,
  },
  {
    title: '13 Sins',
    year: 2014,
    rating: 6.3,
    votes: 26738,
    running_times: 5580,
  },
  { title: '13th', year: 2016, rating: 8.2, votes: 15188, running_times: 6000 },
  {
    title: '1408',
    year: 2007,
    rating: 6.8,
    votes: 228738,
    running_times: 6840,
  },
  {
    title: '1492: Conquest of Paradise',
    year: 1992,
    rating: 6.5,
    votes: 24439,
    running_times: 9240,
  },
  {
    title: '15 Minutes',
    year: 2001,
    rating: 6.1,
    votes: 44647,
    running_times: 7200,
  },
  {
    title: '16 Blocks',
    year: 2006,
    rating: 6.6,
    votes: 117443,
    running_times: 6600,
  },
  {
    title: '17 Again',
    year: 2009,
    rating: 6.4,
    votes: 156663,
    running_times: 6120,
  },
  { title: '1922', year: 2017, rating: 6.4, votes: 15416, running_times: 6120 },
  { title: '1941', year: 1979, rating: 5.9, votes: 27172, running_times: 8760 },
  {
    title: '2 Days in New York',
    year: 2012,
    rating: 6,
    votes: 12766,
    running_times: 5760,
  },
  {
    title: '2 Days in Paris',
    year: 2007,
    rating: 6.8,
    votes: 28106,
    running_times: 5760,
  },
  {
    title: '2 Days in the Valley',
    year: 1996,
    rating: 6.5,
    votes: 16528,
    running_times: 6240,
  },
  {
    title: '2 Fast 2 Furious',
    year: 2003,
    rating: 5.9,
    votes: 213674,
    running_times: 6420,
  },
  {
    title: '2 Guns',
    year: 2013,
    rating: 6.7,
    votes: 170412,
    running_times: 6540,
  },
  {
    title: '20,000 Leagues Under the Sea',
    year: 1954,
    rating: 7.2,
    votes: 24094,
    running_times: 7620,
  },
  {
    title: '200 Cigarettes',
    year: 1999,
    rating: 5.9,
    votes: 13532,
    running_times: 6060,
  },
  {
    title: '2001 Maniacs',
    year: 2005,
    rating: 5.4,
    votes: 10889,
    running_times: 5220,
  },
  {
    title: '2001: A Space Odyssey',
    year: 1968,
    rating: 8.3,
    votes: 481800,
    running_times: 9660,
  },
  {
    title: '2001: A Space Travesty',
    year: 2000,
    rating: 3.4,
    votes: 10094,
    running_times: 5940,
  },
  { title: '2010', year: 1984, rating: 6.8, votes: 44155, running_times: 6960 },
  {
    title: '2012',
    year: 2009,
    rating: 5.8,
    votes: 306797,
    running_times: 9480,
  },
  {
    title: '20th Century Women',
    year: 2016,
    rating: 7.4,
    votes: 22965,
    running_times: 7140,
  },
  {
    title: '21 & Over',
    year: 2013,
    rating: 5.9,
    votes: 65298,
    running_times: 5580,
  },
  { title: '21', year: 2008, rating: 6.8, votes: 203251, running_times: 7380 },
  {
    title: '21 Grams',
    year: 2003,
    rating: 7.7,
    votes: 202129,
    running_times: 7440,
  },
  {
    title: '21 Jump Street',
    year: 2012,
    rating: 7.2,
    votes: 446476,
    running_times: 6540,
  },
  {
    title: '22 Jump Street',
    year: 2014,
    rating: 7.1,
    votes: 292991,
    running_times: 6720,
  },
  {
    title: '24 Hour Party People',
    year: 2002,
    rating: 7.4,
    votes: 28750,
    running_times: 7020,
  },
  {
    title: '25th Hour',
    year: 2002,
    rating: 7.7,
    votes: 157063,
    running_times: 8100,
  },
  {
    title: '27 Dresses',
    year: 2008,
    rating: 6.1,
    votes: 134861,
    running_times: 6660,
  },
  {
    title: '28 Days',
    year: 2000,
    rating: 6,
    votes: 37395,
    running_times: 6180,
  },
  {
    title: '28 Days Later...',
    year: 2002,
    rating: 7.6,
    votes: 323591,
    running_times: 6780,
  },
  {
    title: '28 Weeks Later',
    year: 2007,
    rating: 7,
    votes: 228033,
    running_times: 6000,
  },
  { title: '2:22', year: 2017, rating: 5.7, votes: 10266, running_times: 5880 },
  {
    title: '3 Days to Kill',
    year: 2014,
    rating: 6.2,
    votes: 75906,
    running_times: 7380,
  },
  {
    title: '3 Idiots',
    year: 2009,
    rating: 8.4,
    votes: 256619,
    running_times: 10200,
  },
  {
    title: '3 Men and a Baby',
    year: 1987,
    rating: 5.9,
    votes: 39924,
    running_times: 6120,
  },
  {
    title: '3 Men and a Little Lady',
    year: 1990,
    rating: 5.3,
    votes: 19005,
    running_times: 6240,
  },
  {
    title: '3 Ninjas',
    year: 1992,
    rating: 5.2,
    votes: 17582,
    running_times: 5880,
  },
  {
    title: '3 Women',
    year: 1977,
    rating: 7.9,
    votes: 10852,
    running_times: 7440,
  },
  {
    title: '30 Days of Night',
    year: 2007,
    rating: 6.6,
    votes: 148004,
    running_times: 6780,
  },
  {
    title: '30 Minutes or Less',
    year: 2011,
    rating: 6.1,
    votes: 83073,
    running_times: 4980,
  },
  { title: '300', year: 2006, rating: 7.7, votes: 654380, running_times: 7020 },
  {
    title: '3000 Miles to Graceland',
    year: 2001,
    rating: 5.9,
    votes: 39646,
    running_times: 7500,
  },
  {
    title: '300: Rise of an Empire',
    year: 2014,
    rating: 6.2,
    votes: 245690,
    running_times: 6120,
  },
  { title: '31', year: 2016, rating: 5, votes: 12536, running_times: 6120 },
  { title: '360', year: 2011, rating: 6.2, votes: 14275, running_times: 6600 },
  {
    title: '3:10 to Yuma',
    year: 1957,
    rating: 7.6,
    votes: 15498,
    running_times: 5520,
  },
  {
    title: '3:10 to Yuma',
    year: 2007,
    rating: 7.7,
    votes: 254591,
    running_times: 7320,
  },
  {
    title: '40 Days and 40 Nights',
    year: 2002,
    rating: 5.6,
    votes: 64777,
    running_times: 5760,
  },
  { title: '42', year: 2013, rating: 7.5, votes: 71968, running_times: 7680 },
  {
    title: '45 Years',
    year: 2015,
    rating: 7.1,
    votes: 24269,
    running_times: 5460,
  },
  {
    title: '47 Meters Down',
    year: 2017,
    rating: 5.7,
    votes: 23125,
    running_times: 5340,
  },
  {
    title: '47 Ronin',
    year: 2013,
    rating: 6.3,
    votes: 127026,
    running_times: 7680,
  },
  {
    title: '48 Hrs.',
    year: 1982,
    rating: 6.9,
    votes: 58092,
    running_times: 5760,
  },
  {
    title: '4: Rise of the Silver Surfer',
    year: 2007,
    rating: 5.6,
    votes: 225698,
    running_times: 5520,
  },
  {
    title: '5 Days of War',
    year: 2011,
    rating: 5.6,
    votes: 12658,
    running_times: 6780,
  },
  {
    title: '5 to 7',
    year: 2014,
    rating: 7.1,
    votes: 13647,
    running_times: 6000,
  },
  {
    title: '50 First Dates',
    year: 2004,
    rating: 6.8,
    votes: 286325,
    running_times: 5940,
  },
  {
    title: '50/50',
    year: 2011,
    rating: 7.7,
    votes: 287608,
    running_times: 6000,
  },
  { title: '54', year: 1998, rating: 5.8, votes: 28964, running_times: 7260 },
  {
    title: '6 Bullets',
    year: 2012,
    rating: 6.1,
    votes: 12351,
    running_times: 6900,
  },
  {
    title: '6 Souls',
    year: 2010,
    rating: 6.1,
    votes: 27608,
    running_times: 6720,
  },
  {
    title: '8 Mile',
    year: 2002,
    rating: 7.1,
    votes: 208201,
    running_times: 6600,
  },
  {
    title: '8 femmes',
    year: 2002,
    rating: 7.1,
    votes: 25351,
    running_times: 6660,
  },
  {
    title: '88 Minutes',
    year: 2007,
    rating: 5.9,
    votes: 69067,
    running_times: 6480,
  },
  { title: '8MM', year: 1999, rating: 6.5, votes: 110165, running_times: 7380 },
  { title: '8½', year: 1963, rating: 8.1, votes: 88077, running_times: 8280 },
  { title: '9', year: 2009, rating: 7.1, votes: 118743, running_times: 4740 },
  {
    title: '9 Songs',
    year: 2004,
    rating: 4.9,
    votes: 19175,
    running_times: 4260,
  },
  {
    title: '99 Homes',
    year: 2014,
    rating: 7.1,
    votes: 23100,
    running_times: 6720,
  },
  {
    title: 'A Beautiful Mind',
    year: 2001,
    rating: 8.2,
    votes: 692444,
    running_times: 8100,
  },
  {
    title: 'A Better Life',
    year: 2011,
    rating: 7.2,
    votes: 13931,
    running_times: 5880,
  },
  {
    title: 'A Bigger Splash',
    year: 2015,
    rating: 6.4,
    votes: 17641,
    running_times: 7500,
  },
  {
    title: 'A Boy and His Dog',
    year: 1975,
    rating: 6.6,
    votes: 14010,
    running_times: 5460,
  },
  {
    title: 'A Bridge Too Far',
    year: 1977,
    rating: 7.4,
    votes: 43717,
    running_times: 10500,
  },
  {
    title: 'A Bronx Tale',
    year: 1993,
    rating: 7.8,
    votes: 107443,
    running_times: 7260,
  },
  {
    title: "A Bug's Life",
    year: 1998,
    rating: 7.2,
    votes: 229465,
    running_times: 5700,
  },
  {
    title: 'A Christmas Carol',
    year: 2009,
    rating: 6.8,
    votes: 82681,
    running_times: 5760,
  },
  {
    title: 'A Christmas Story',
    year: 1983,
    rating: 8,
    votes: 113032,
    running_times: 5640,
  },
  {
    title: 'A Cinderella Story',
    year: 2004,
    rating: 5.9,
    votes: 69295,
    running_times: 5700,
  },
  {
    title: 'A Civil Action',
    year: 1998,
    rating: 6.5,
    votes: 24558,
    running_times: 6900,
  },
  {
    title: 'A Clockwork Orange',
    year: 1971,
    rating: 8.3,
    votes: 623645,
    running_times: 8160,
  },
  {
    title: 'A Close Shave',
    year: 1995,
    rating: 8.2,
    votes: 33053,
    running_times: 1800,
  },
  {
    title: 'A Cock and Bull Story',
    year: 2005,
    rating: 6.8,
    votes: 11624,
    running_times: 5640,
  },
  {
    title: 'A Cure for Wellness',
    year: 2016,
    rating: 6.4,
    votes: 50746,
    running_times: 8760,
  },
  {
    title: 'A Dangerous Method',
    year: 2011,
    rating: 6.5,
    votes: 87773,
    running_times: 5940,
  },
  {
    title: 'A Day at the Races',
    year: 1937,
    rating: 7.7,
    votes: 11369,
    running_times: 6660,
  },
  {
    title: 'A Dirty Shame',
    year: 2004,
    rating: 5.1,
    votes: 11191,
    running_times: 5340,
  },
  {
    title: "A Dog's Purpose",
    year: 2017,
    rating: 6.9,
    votes: 38675,
    running_times: 6000,
  },
  {
    title: 'A Face in the Crowd',
    year: 1957,
    rating: 8.2,
    votes: 10910,
    running_times: 7560,
  },
  {
    title: 'A Fantastic Fear of Everything',
    year: 2012,
    rating: 5.9,
    votes: 12446,
    running_times: 6000,
  },
  {
    title: 'A Few Best Men',
    year: 2011,
    rating: 5.7,
    votes: 11321,
    running_times: 5820,
  },
  {
    title: 'A Few Good Men',
    year: 1992,
    rating: 7.7,
    votes: 198227,
    running_times: 8280,
  },
  {
    title: 'A Fish Called Wanda',
    year: 1988,
    rating: 7.6,
    votes: 115086,
    running_times: 6480,
  },
  {
    title: 'A Ghost Story',
    year: 2017,
    rating: 6.9,
    votes: 21003,
    running_times: 5520,
  },
  {
    title: 'A Good Day to Die Hard',
    year: 2013,
    rating: 5.3,
    votes: 177298,
    running_times: 6060,
  },
  {
    title: 'A Good Old Fashioned Orgy',
    year: 2011,
    rating: 6.2,
    votes: 18997,
    running_times: 5700,
  },
  {
    title: 'A Good Woman',
    year: 2004,
    rating: 6.5,
    votes: 10271,
    running_times: 5580,
  },
  {
    title: 'A Good Year',
    year: 2006,
    rating: 6.9,
    votes: 77087,
    running_times: 7020,
  },
  {
    title: 'A Goofy Movie',
    year: 1995,
    rating: 6.8,
    votes: 37406,
    running_times: 4680,
  },
  {
    title: 'A Grand Day Out',
    year: 1989,
    rating: 7.8,
    votes: 25751,
    running_times: 1380,
  },
  {
    title: 'A Guide to Recognizing Your Saints',
    year: 2006,
    rating: 7,
    votes: 23140,
    running_times: 6000,
  },
];

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
