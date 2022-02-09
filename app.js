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


let bestMovie = document.querySelector('.best-movie .movie-cover');
let bestMoviesCat = document.querySelectorAll('.best-movies-cat .movie-cover');
let thrillerCat = document.querySelectorAll('.thriller .movie-cover');
let fantasyCat = document.querySelectorAll('.fantasy .movie-cover');
let dramaCat = document.querySelectorAll('.drama .movie-cover') 


const getBestMovieImg = async function(uri, id){
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

getBestMovieImg(uriBestMovie, bestMovie)
getCatImg(uriBestMoviesCat, uriBestMoviesCat2, bestMoviesCat)
getCatImg(uriThrillerCat, uriThrillerCat2, thrillerCat)
getCatImg(uriFantasyCat, uriFantasyCat2, fantasyCat)
getCatImg(uriDramaCat, uriDramaCat2, dramaCat)


const previous = document.querySelectorAll(".btn-nav-left");
const next = document.querySelectorAll(".btn-nav-right");
const nbMovieCover = 7;
let count = 0;
let count2 = 3

const removeActive = function (tag, step){
    tag[step].classList.remove('active'); 
    }

const addActive = (tag, step) => {
    tag[step].classList.add('active');
}

function previousSlide(index, tag, step, step2) {
    
    previous[index].onclick = ()=> {
  
        if(step > 0){
            removeActive(tag, step2);
            step--;
            step2--;   
        } else{
            removeActive(tag, 2);
            removeActive(tag, 1);
            removeActive(tag, step);
            step = 3;
            step2=6;
            addActive(tag, 6)    
            addActive(tag, 5)
            addActive(tag, 4)
        }
        addActive(tag, step);        
    }
}


function nextSlide(index, tag, step, step2){

    next[index].onclick = ()=> {

        if(step2 < nbMovieCover - 1){
            removeActive(tag, step);
            step++;
            step2++;   
        } else{
            removeActive(tag, 4);
            removeActive(tag, 5);
            removeActive(tag, step2);
            step = 0;
            step2=3;
            addActive(tag,0)
            addActive(tag, 1)
            addActive(tag, 2)    
        }
        addActive(tag, step2);
    }
}

previousSlide(0, bestMoviesCat, count, count2);
nextSlide(0, bestMoviesCat, count, count2)

previousSlide(1, thrillerCat, count, count2)
nextSlide(1, thrillerCat, count, count2)

previousSlide(2, fantasyCat, count, count2)
nextSlide(2, fantasyCat, count, count2)


previousSlide(3, dramaCat, count, count2)
nextSlide(3, dramaCat, count, count2)

//Modal

let movieCov = document.querySelectorAll('.movie-cover')
const modal = document.querySelector('.modal')
let modalTitle = document.querySelector('#modal-title')
let movieImdbScore = document.querySelector('#imdb-score')

let closeModal = document.querySelector('#close-cross')
let MovieResume = document.querySelector('#synopsis')
let modalMovieCover = document.querySelector('#modal-movie-cover')
let moviesDirectors = document.querySelector('#directors')
let moviesActors = document.querySelector('#actors')
let movieSynopsis = document.querySelector('#synopsis')
let moviePublicationYear = document.querySelector('#movie-year')


const getMovieSynopsis = async(id)=> {
    let response = await fetch(url+id);
    let data = await response.json();
    return data['long_description']
}

const getModalContent = async ()=>{
    let response = await fetch(url+uriBestMovie)
    data = await response.json()
    title = data['results']['0']['title']
    modalTitle.innerText = title
    modalMovieCover.src = data['results']['0']['image_url']
    moviesDirectors.innerText = 'Directors : ' + data['results']['0']['directors']
    moviesActors.innerText = 'Actors : ' + data['results']['0']['actors']
    movieImdbScore.innerText = data['results']['0']['imdb_score'];
    let movieId = data['results']['0']['id'];
    synopsis = await getMovieSynopsis(movieId)
    movieSynopsis.innerText = 'Synopsis : '+ synopsis


    console.log(title, movieId, getMovieSynopsis(movieId))
}

for(img of movieCov){
    img.addEventListener('click', ()=>{
        modal.style.display = 'block';
        getModalContent();
        }
    
)};

closeModal.onclick = ()=>{
    modal.style.display = 'none';
}
