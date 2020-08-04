let gitRepos = [
  'https://api.github.com/search/repositories?q=user:claudion3',
  'https://api.github.com/search/repositories?q=user:Pallabi-ghosh',
  'https://api.github.com/search/repositories?q=user:nuha90',
];

let promises = gitRepos.map((url) => {
  return fetch(url).then((response) => response.json());
});

Promise.all(promises)
  .then((d) => {
    console.log(d);
    const body = document.querySelector('body');
    d.forEach((element) => {
      let ol = document.createElement('ol');
      body.appendChild(ol);
      element.items.forEach((data) => {
        let li = document.createElement('li');
        li.innerHTML = `<b>Repo name:</b>${data.name}<br><b> Repo URL:</b>${data.html_url} `;
        ol.appendChild(li);
      });
      let myhr = document.createElement('hr');
      ol.appendChild(myhr);
    });
  })

  .catch((e) => {
    console.log('Whoops something went wrong!', e);
  });
