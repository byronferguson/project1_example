var BASE_URL = 'http://www.omdbapi.com/?apikey=trilogy&';

fetch(BASE_URL + 's=Matrix')
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data.Search);
  });
