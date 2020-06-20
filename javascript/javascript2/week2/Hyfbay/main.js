console.log('Script loaded');
const products = getAvailableProducts();

/**********************JS2 - W1 HOMEWORK******************* */
/*function renderProducts(products) {
  const ul = document.querySelector('ul');
  products.forEach((product) => {
    const li = document.createElement('li');
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}

/************************* JS - W2 HOMEWORK *************************** */
const source = document.getElementById('input-text');
const ul = document.querySelector('ul');

function quickSearch() {
  const filterSearchProduct = document.getElementById('input-text').value;

  products.filter((product) => {
    if (
      product.name.includes(filterSearchProduct.toLowerCase()) &&
      filterSearchProduct != ''
    ) {
      const li = document.createElement('li');
      li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
      ul.appendChild(li);
    }
  });
}

/****************************************************************** 
TRIAL AND ERROR CODE BELOW...!*************************************
*******************************************************************/
/*function quickSearch() {
  const words = source.value.split(' ');
  console.log(words);
  //const wordsLowerCase = words.toLowerCase();

  const matchingProducts = products.filter((product) => {
    if (product.name)
    //console.log(product + '     in filter');
    products.forEach((product) => {
      product.name = product.name.toLowerCase();
      // console.log(product.name + '            in foreach');
    });
    product.name.includes(words);
  });

  console.log(matchingProducts);
  matchingProducts.forEach((product) => {
    const li = document.createElement('li');
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}

/*document.getElementById(
        'show-product'
      ).innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;*/

//source.addEventListener('input', wordSearch);

/*function wordSearch(e) {
  console.log(e.target.value);
  filterProduct = products.filter((product) => {
    return (
      product.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
    );
  });
  console.log(filterProduct);
  filterProduct.forEach((product) => {
    console.log(product);
    const li = document.createElement('li');
    // li.innerHTML = product.name;
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}
let filterProduct = [];
function quickSearch(e) {
  filterProduct = products.find(
    (product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase()) >= 0
  );

  //if (e.target.value) {
  const li = document.createElement('li');
  //if (product.name === word)
  li.innerHTML = `<h2>${filterProduct.name}</h2><span>price: ${filterProduct.price}</span><br><span>Rating: ${filterProduct.rating}</span>`;
  ul.appendChild(li);
  /* } else {
    ul.innerHTML = ' ';
  }

  //console.log(filterProduct)
}
source.addEventListener('keyup', quickSearch);*/
