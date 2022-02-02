const url = "http://localhost:8000/api/v1/titles/"
const uriBestMovie = "?imdb_score_min=9.6"
const uriBestMoviesCat = "?imdb_score_min=9.4"
const uriBestMoviesCat2 = "?imdb_score_min=9.4&page=2"
const uriThrillerCat = "?genre=thriller"
const uriThrillerCat2 = "?genre=thriller&page=2"
const uriFantasyCat = "?genre=fantasy"
const uriFantasyCat2 = "?genre=fantasy&page=2"
const uriDramaCat = "?genre=drama"
const uriDramaCat2 = "?genre=drama&page=2"


let bestMovie = document.querySelector('#best-movie-cover');
let bestMoviesCat = document.querySelectorAll('.best-movies-cat .movie-cover');
let thrillerCat = document.querySelectorAll('.thriller .movie-cover');
let fantasyCat = document.querySelectorAll('.fantasy .movie-cover');
let dramaCat = document.querySelectorAll('.drama .movie-cover') 

let test = document.querySelectorAll('#box')

const getBestFilmImg = async function(uri, id){
    let response = await fetch(url+uri);
    let data = await response.json();
    img = data['results']['0']['image_url']
    id.src = img
}

const getCatImg = async function(uri_page1, uri_page2, class_) {
    let response1 = await fetch(url+uri_page1);
    let response2 = await fetch(url+uri_page2);
    let data1 = await response1.json();
    let data2 = await response2.json();
    for( i=0; i<5; i++){
        class_[i].src = data1['results'][i]['image_url']
        }
    let index = 0;
    for( i=5; i<7; i++){
        class_[i].src = data2['results'][index]['image_url']
        index++
        }
}

getBestFilmImg(uriBestMovie, bestMovie)
getCatImg(uriBestMoviesCat, uriBestMoviesCat2, bestMoviesCat)
getCatImg(uriThrillerCat, uriThrillerCat2, thrillerCat)
getCatImg(uriFantasyCat, uriFantasyCat2, fantasyCat)
getCatImg(uriDramaCat, uriDramaCat2, dramaCat)


const nbMovieCover = 7;
const previous = document.querySelectorAll(".btn-nav-left");
const next = document.querySelectorAll(".btn-nav-right");
var count = 0;
let a = 3;

const removeActive = function (){
    bestMoviesCat[count].classList.remove('active'); 
    count++
    console.log(count)       
    }



const nextSlide = function (items){

    if(count < nbMovieCover - 1 ){
        items[count].classList.remove('active');
        count++;
        a++
    } else {
        items[4].classList.remove('active');
        items[5].classList.remove('active');
        items[a].classList.remove('active');

        count = 0;
        a = 3;
        items[0].classList.add('active');
        items[1].classList.add('active');
        items[2].classList.add('active');
    }
    
    items[a].classList.add('active');
    console.log(count, a);
}

b = 3
//previous.addEventListener('click', console.log('jolie click'))
next[0].addEventListener('click', function (){
  
    if(b < nbMovieCover - 1){
        bestMoviesCat[count].classList.remove('active');

        count++;
        b++;   
    } else{
        bestMoviesCat[4].classList.remove('active');
        bestMoviesCat[5].classList.remove('active');
        bestMoviesCat[b].classList.remove('active');
        count = 0;
        b=3;
        bestMoviesCat[0].classList.add('active');
        bestMoviesCat[1].classList.add('active');
        bestMoviesCat[2].classList.add('active');
        
    }
    
    bestMoviesCat[b].classList.add('active');
    console.log(count, b);

})


//next.onclick = () => {console.log('click')}



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