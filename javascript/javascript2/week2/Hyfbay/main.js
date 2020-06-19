console.log('Script loaded');

const products = getAvailableProducts();
const source = document.getElementById('input-text');
//const result = document.querySelector('ul');

//console.log(products);
/*function renderProducts(products) {
  const ul = document.querySelector('ul');

  products.forEach((product) => {
    const li = document.createElement('li');
    li.innerHTML = `<h2>${product.name}</h2><span>price: ${product.price}</span><br><span>Rating: ${product.rating}</span>`;
    ul.appendChild(li);
  });
}


/** JS-W2 HW************************************* */
const ul = document.querySelector('ul');
let filterProduct = [];
function wordSearch(e) {
  console.log(e.target.value);
  filterProduct = products.filter((product) => {
    console.log(product.name);
    //return product.name.toLowerCase().(e.target.value.toLowerCase());
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
source.addEventListener('input', wordSearch);
