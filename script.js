const apiUrl = window.location.hostname.includes('localhost')
  ? 'http://localhost:3000/api/blagues'
  : 'https://cdaproject.onrender.com/api/blagues';


function getRandomJoke() {
fetch(apiUrl + '/random')
  .then(response => response.json())
  .then(data => {
    console.log(data);  
    if (data && data.text) {
      document.getElementById('jokeContainer').innerText = data.text;
    } else {
      document.getElementById('jokeContainer').innerText = 'Aucune blague disponible';
    }
  })
  .catch(error => {
    console.error('Erreur lors de la récupération des blagues:', error);
    document.getElementById('jokeContainer').innerText = 'Erreur de chargement des blagues';
  });


}

document.getElementById('jokeButton').addEventListener('click', getRandomJoke);
