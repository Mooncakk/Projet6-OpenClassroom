const requete = new XMLHttpRequest;
const methodehttp = "GET";
const url = "http://localhost:8000/api/v1/titles/"

requete.open(methodehttp, url)

requete.onreadystatechange = function() {
    console.log(requete.responsetext)
};

requete.send();


