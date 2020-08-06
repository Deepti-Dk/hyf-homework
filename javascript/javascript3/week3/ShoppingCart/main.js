class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    fetch('https://api.exchangeratesapi.io/latest?base=DKK')
      .then((response) => response.json())
      .then((apiData) => {
        //let apiRate = data.rates.`${currency}`;//tried lot of different options, can't pick respective rate for the currency, would continue research
        const currencySection = document.getElementById('currencySection');
        if (currency === 'USD') {
          let p = document.createElement('p');
          p.innerHTML = `Refrigerator price in USD: ${(
            apiData.rates.USD * this.price
          ).toFixed(2)} USD`;
          currencySection.appendChild(p);
        } else if (currency === 'EUR') {
          let p = document.createElement('p');
          p.innerHTML = `Bosch Microwave price in EUR: ${(
            apiData.rates.EUR * this.price
          ).toFixed(2)} USD`;
          currencySection.appendChild(p);
        } else if (currency === 'INR') {
          let p = document.createElement('p');
          p.innerHTML = `Cooler price in INR: ${(
            apiData.rates.INR * this.price
          ).toFixed(2)} USD`;
          currencySection.appendChild(p);
        }
      });
  }
}

const flatScreen = new Product('flatScreen', 5000);
const refrigerator = new Product('refrigerator', 15000);
const LGmicrowave = new Product('LG microwave', 1100);
const Boschmicrowave = new Product('Bosch microwave', 1100);
const electricGrill = new Product('electricGrill', 1500);
const cooler = new Product('cooler', 2100);

refrigerator.convertToCurrency('USD');
Boschmicrowave.convertToCurrency('EUR');
cooler.convertToCurrency('INR');
/******************************************************************************** */

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    let productFound = this.products.indexOf(product);
    if (productFound) {
      this.products.splice(productFound);
    } else {
      console.log('This product doesnt exist, try again!');
    }
  }

  searchProduct(productName) {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(productName.toLowerCase())
    );
  }

  getTotal() {
    let total = 0;
    this.products.forEach((element) => {
      total += element.price;
    });
    return total;
  }

  renderProducts() {
    const productName = document.getElementById('productName');
    const productPrice = document.getElementById('productPrice');
    let li;

    this.products.forEach((element) => {
      li = document.createElement('li');
      li.innerHTML = element.name;
      productName.appendChild(li);
      li = document.createElement('li');
      li.innerHTML = element.price;
      productPrice.appendChild(li);
    });
  }

  getUser() {
    return fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    ).then((response) => response.json());
  }
}

const shoppingCart = new ShoppingCart();

shoppingCart.addProduct(flatScreen);
shoppingCart.addProduct(refrigerator);
shoppingCart.addProduct(LGmicrowave);
shoppingCart.addProduct(Boschmicrowave);
shoppingCart.addProduct(electricGrill);
shoppingCart.addProduct(cooler);
console.log('----------List of Products------');
console.log(shoppingCart.products);

shoppingCart.removeProduct(cooler);
console.log('--------A product is deleted-----');
console.log(shoppingCart.products);

const searchedProduct = shoppingCart.searchProduct('microwave');
console.log('--------Listing searched product------');
console.log(searchedProduct);

const totalPrice = shoppingCart.getTotal();
console.log(
  'The total price of the products in the shoppingcart is ' + totalPrice + ' kr'
);

shoppingCart.renderProducts();

shoppingCart.getUser().then((data) => {
  console.log(data);
  const user = document.createElement('h1');
  const username = document.getElementById('username');
  user.innerHTML = data.name + '<br/>' + '<br/>' + 'Total Price: ' + totalPrice;
  username.appendChild(user);
});
