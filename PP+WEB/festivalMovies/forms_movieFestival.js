//selecting elements:

var createMovieBtnNode = document.querySelector(".movie_create_button");
var movieTitleNode = document.querySelector(".movie_title");
var movieLengthNode = document.querySelector(".movie_length");
var movieGenreNode = document.querySelector(".movie_genre");
var movieList = document.querySelector(".movie_list");
var dropdownMovies = document.querySelector(".dropdown_movies");


var createProgramBtnNode = document.querySelector(".program_create_button");
var programDateNode = document.querySelector(".program_date");
var programList = document.querySelector(".program_list");
var dropdownPrograms = document.querySelector(".dropdown_programs");


//create Movie:

function createMovie() {

    var newMovie = new Movie(movieTitleNode.value, parseInt(movieLengthNode.value), movieGenreNode.value);

    var newLi = document.createElement("li");
    newLi.textContent = newMovie.getData();
    movieList.appendChild(newLi);

    //adding movie to the dropdown list:
    dropdownMovies.innerHTML += "<option value='" + newLi.textContent + "'>'" + newLi.textContent +"'</option>" + "\n";
    
    //clearing the fields for new inputs:
    movieTitleNode.value = "";
    movieLengthNode.value = "";
    movieGenreNode.value = "";

};

createMovieBtnNode.addEventListener("click", createMovie);


//create Program:

function createProgram() {

    var newProgram = new Program(programDateNode.value);

    var newLi = document.createElement("li");
    newLi.textContent = newProgram.getData();
    programList.appendChild(newLi);

    //adding program to the dropdown list:
    dropdownPrograms.innerHTML += "<option value='" + newLi.textContent + "'>'" + newLi.textContent +"'</option>" + "\n";
     
    //clearing field for new input:
    programDateNode.value = "";
}

createProgramBtnNode.addEventListener("click", createProgram);


var addMovieToProgramBtnNode = document.querySelector(".add_movie_to_program_button");

function addMovieToTheProgram() {
    var selectedMovieNode = dropdownMovies.value;
    var selectedProgramNode = dropdownPrograms.value;

    //dodati brojac za svaki dodati film u program
    //povecati total length u programu

    programList.appendChild(newLi);

};

addMovieToProgramBtnNode.addEventListener("click", addMovieToTheProgram);