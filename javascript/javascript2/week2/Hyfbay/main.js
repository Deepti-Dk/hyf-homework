console.log('Script loaded');
const products = getAvailableProducts();

/**********************JS2 - W1 HOMEWORK***WITH PRODUCTS AS A PARAMETER **************** */
/*function renderProducts(products) {
  console.log(products);
  const ul = document.querySelector('ul');
  products.forEach((product) => {
    const li = document.createElement('li');
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}*/

/************************* JS - W2 HOMEWORK *************************** */
const searchBar = document.getElementById('input-text');
const priceBar = document.getElementById('input-price');

const ul = document.querySelector('ul');
let searchResult = [];

const renderProducts = (product) => {
  const row = product.map((value) => {
    return `
          <tr class="character">
              <h2>${value.name}</h2><span>Price: ${value.price}</span><br>
              <span>Rating: ${value.rating}</span>
          </tr>
      `;
  });
  ul.innerHTML = row;
};
/********************SEARCH BARS********************** */
searchBar.addEventListener('keyup', (e) => {
  const searchWord = e.target.value.toLowerCase();
  searchResult = products.filter((product) => {
    return product.name.toLowerCase().includes(searchWord);
  });
  renderProducts(searchResult);
});

priceBar.addEventListener('keyup', (e) => {
  const searchPrice = e.target.value;
  const priceResult = products.filter((product) => {
    return product.price < searchPrice;
  });
  renderProducts(priceResult);
});

/********************SORTING *******************
 * ***************PRICE ***********************
 **********************************************/
let increase, decrease;

const minPrice = document.getElementById('price-increase');
minPrice.addEventListener('click', () => {
  const increase = products.sort(
    (a, b) => parseFloat(a.price) - parseFloat(b.price)
  );
  renderProducts(increase);
});

const maxPrice = document.getElementById('price-decrease');
maxPrice.addEventListener('click', () => {
  decrease = products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  renderProducts(decrease);
});

/********************SORTING *******************
 * ***************RATING ***********************
 **********************************************/

const minRating = document.getElementById('rating-increase');
minRating.addEventListener('click', () => {
  increase = products.sort((a, b) => a.rating - b.rating);
  renderProducts(increase);
});
const maxRating = document.getElementById('rating-decrease');
maxRating.addEventListener('click', () => {
  decrease = products.sort((a, b) => b.rating - a.rating);
  renderProducts(decrease);
});

/********************SORTING *******************
 * ***************PRODUCT NAME ***********************
 **********************************************/

const azName = document.getElementById('name-ascending');
azName.addEventListener('click', () => {
  increase = products.sort((a, b) => a.name.localeCompare(b.name));
  renderProducts(increase);
});
const zaName = document.getElementById('name-descending');
zaName.addEventListener('click', () => {
  decrease = products.sort((a, b) => b.name.localeCompare(a.name));
  console.log(decrease);
  renderProducts(decrease);
});
