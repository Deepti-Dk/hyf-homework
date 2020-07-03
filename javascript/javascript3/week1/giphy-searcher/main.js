const key = 'Qp6RAAaBZBQFCXToJtyiMN9akx4BjTDR';

const inputClick = document.getElementById('inputClick');
const imagelist = document.getElementById('image-list');

const displayImages = () => {
  const searchgif = document.getElementById('search').value;
  const numbergif = document.getElementById('number').value;
  imagelist.innerHTML = '';

  fetch(
    `http://api.giphy.com/v1/gifs/search?q=${searchgif}&api_key=${key}&limit=${numbergif}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.data.forEach((img) => {
        const image = document.createElement('img');
        image.setAttribute('src', img.images.downsized_large.url);
        imagelist.appendChild(image);
      });
    });
};

inputClick.addEventListener('click', displayImages);
