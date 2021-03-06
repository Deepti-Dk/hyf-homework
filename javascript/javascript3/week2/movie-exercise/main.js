/**Create an array of bad movies
Creat an array of bad movies since year 2000 */

fetch(
  'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json'
)
  .then((response) => response.json())
  .then((data) => {
    const badMovies = data.filter((element) => element.rating < 5);
    console.log('List of bad movies');
    console.log(badMovies);
    const badMoviesSince2k = data.filter(
      (element) => element.rating && element.year >= 2000
    );
    console.log('Bad movies since 2000');
    console.log(badMoviesSince2k);
  })
  .catch(() => console.log('oops...something went wrong'));
