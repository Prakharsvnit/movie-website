function movieData(name,release_date,url,rating){
    this.name = name;
    this.releaseDate = release_date;
    this.posterURL = url;
    this.rating = rating;
}

const movie1 = new movieData("Captain America I","2011","https://m.media-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_UX140_CR0,0,140,209_AL_.jpg","6.9");
const movie2 = new movieData("Ironman","2008","https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_UY209_CR0,0,140,209_AL_.jpg","7.9");
const movie3 = new movieData("Thor","2011","https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY209_CR0,0,140,209_AL_.jpg","7.0");
const movie4 = new movieData("Avengers Assemble","2012","https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg","8.0");
const movie5 = new movieData("Captain America - II","2014","https://m.media-amazon.com/images/M/MV5BMzA2NDkwODAwM15BMl5BanBnXkFtZTgwODk5MTgzMTE@._V1_UY209_CR1,0,140,209_AL_.jpg","7.7");
const movie6 = new movieData("Avengers-Age of Ultron","2015","https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_UY209_CR0,0,140,209_AL_.jpg","7.3");
const movie7 = new movieData("Captain America-Civil War","2016","https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UY209_CR0,0,140,209_AL_.jpg","7.8");
const movie8 = new movieData("Thor:Ragnarok","2017","https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UY209_CR0,0,140,209_AL_.jpg","7.9");
const movie9 = new movieData("Avengers:Infinity War","2018","https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_UY209_CR0,0,140,209_AL_.jpg","8.4");

var movies = [movie1,movie2,movie3,movie4,movie5,movie6,movie7,movie8,movie9];

localStorage.setItem("movies",JSON.stringify(movies));



function showMoviesList(m){

let movies = m;

let data_div = document.getElementById("data");

data_div.innerHTML = null;

movies.forEach(function(el){


    var div = document.createElement("div");

    var img = document.createElement("img");

    img.src = el.posterURL;

    var p_name = document.createElement("p");

    p_name.innerHTML = el.name;

    var p_date = document.createElement("p");

    p_date.innerHTML = el.releaseDate;

    var p_rating = document.createElement("p");

    p_rating.innerHTML = el.rating;

    div.style.border = "solid black";

    img.style.width = "280px";

    img.style.height = "280px";

    div.style.textAlign = "center";

    div.append(img,p_name,p_date,p_rating);

    data_div.append(div);

    });

}

showMoviesList(JSON.parse(localStorage.getItem("movies")))


function LtoH(){

    let moviesData = JSON.parse(localStorage.getItem("movies"));

    moviesData = moviesData.sort(function(a,b){

        return a.rating - b.rating;

    });

    showMoviesList(moviesData);

}

function HtoL(){

    let moviesData = JSON.parse(localStorage.getItem("movies"));

    moviesData = moviesData.sort(function(a,b){

        return b.rating - a.rating;

    });

    showMoviesList(moviesData);

}

