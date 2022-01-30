const url = "http://localhost:8000/api/v1/titles/"
const uriBestFilm = "?imdb_score_min=9.6"
const uriBestFilmsCat = "?imdb_score_min=9.4"
const uriBestFilmsCat2 = "?imdb_score_min=9.4&page=2"
const uriThrillerCat = "?genre=thriller"
const uriThrillerCat2 = "?genre=thriller&page=2"
const uriFantasyCat = "?genre=fantasy"
const uriFantasyCat2 = "?genre=fantasy&page=2"
const uriDramaCat = "?genre=drama"
const uriDramaCat2 = "?genre=drama&page=2"


let bestFilm = document.querySelector('#best-movie-cover');
let bestFilms = document.querySelectorAll(".best-movies-cat #movie-cover");
let thrillerCat = document.querySelectorAll('.thriller #movie-cover');
let fantasyCat = document.querySelectorAll('.fantasy #movie-cover');
let dramaCat = document.querySelectorAll('.drama #movie-cover') 


const getBestFilmImg = async function(uri, id){
    let response = await fetch(url+uri);
    let data = await response.json();
    img = data['results']['0']['image_url']
    id.src = img
}


const getCatImg = async function(uri_page1, uri_page2, id) {
    let response1 = await fetch(url+uri_page1);
    let response2 = await fetch(url+uri_page2);
    let data1 = await response1.json();
    let data2 = await response2.json();
    for( i=0; i<5; i++){
        id[i].src = data1['results'][i]['image_url']
        }
    let index = 0;
    for( i=5; i<7; i++){
        id[i].src = data2['results'][index]['image_url']
        index++
        }
}

getBestFilmImg(uriBestFilm, bestFilm)
getCatImg(uriBestFilmsCat, uriBestFilmsCat2, bestFilms)
getCatImg(uriThrillerCat, uriThrillerCat2, thrillerCat)
getCatImg(uriFantasyCat, uriFantasyCat2, fantasyCat)
getCatImg(uriDramaCat, uriDramaCat2, dramaCat)


const nbMovieCover = 7;
const previous = dcocument.querySelectorAll(".btn-nav-left");
const next = dcocument.querySelectorAll(".btn-nav-right");
let count = 0;

const nextMovieCover = function(items){
    items[count].classList.remove('active');

    if(count < nbMovieCover){
        count++;
    }else {
        count = 0;
    }
    
    items[count].classList.add('active');
}

previous.addEventListener('click', console.log('jolie click'))
next.addEventListener('click', console.log('jolie click'))



/*
const bestFilm = document.getElementById("best_film")
const bestFilms = document.querySelectorAll("#best_films_cat")

fetch('http://localhost:8000/api/v1/titles/?imdb_score_min=9.4')

.then(res => res.json())
.then(function(data){
    for(i=0; i < 7; i++){
        bestFilms[i].src = data["results"][i]["image_url"]
        console.log(bestFilms.src)
        
    }

})


var bestFilms = document.getElementById("best_films")

fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=9.4")
.then(res => res.json())
.then((for(var i = 1; i < 8; i++){
    data => bestFilms.src = data["results"][i]["image_url"]
}



var bestFilms = document.querySelector('#best_films_cat')

fetch("http://localhost:8000/api/v1/titles/?imdb_score_min=9.4")

.then(function(res) {
    if (res.ok) {
      return res.json();
    }
  })
.then(function(value) {
    console.log(value["results"]["0"]["image_url"]);
    value => bestFilms.src = value["results"]["0"]["image_url"];

  });*/