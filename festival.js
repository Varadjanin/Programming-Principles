/*
Festival

In your IDE of choice, create a new JavaScript file named festival.js and make it so 
that all code written in the file follows strict mode.

Create an anonymous immediately-invoking function that will hold the main execution of all program calls. 
Writing a simple command console.log(“Hi”) inside this function 
and running code should output “Hi“ in the console.

Create constructor functions with properties representing the following:
Genre - name
Movie - title, genre (instance of Genre), length
Program - date, list of movies (initially empty) and total number of movies 
Festival - name, list of programs (initially empty), and number of movies in all programs

Add method getData to Genre which returns formatted string 
as first and last letter of genre name
"Action" -> AN
"Drama" -> DA
"Comedy" -> CY

Add getData method to Movie. It should return a formatted string 
consisting of the movie title, length and genre acronym.
The Shawshank Redemption, 130min, AN

Add addMovie method to Program. It should receive a Movie 
and add the movie to the movie list of a given program. 

Add addProgram method to Festival. It should receive a Program 
and add the program to the list of the given festival’s programs. 

Add getData method to Program. It should return a formatted string of all data 
related to the program. The string should contain date, 
program length (calculated from length of all movies in a list) 
and data about movies in a list (see the example below). 
To display movie data, use Movie’s getData method.

Date, program length from all movies
     First movie title, length and genre
     Second movie title, length and genre
     Third movie title, length and genre
     Fourth movie name and length and genre


Add method getData to Festival which return formatted string like festival name, 
number of movies in all programs and all programs listed. 
Use Programs getData method to list all programs. (example output is shown below)

Weekend festival has 4 movie titles
	28.10.2017, program duration 368min
		Spider-Man: Homecoming, 133min, AN
		War for the Planet of the Apes, 140min, DA
		The Dark Tower, 95min, WN
	29.10.2017, program duration 108min
		Deadpool, 108min, CY

Inside your immediately-invoking function, 
add createMovie function that receives a movie title, 
movie length and genre (as a string) as parameters and returns a created Movie.

Inside your immediately-invoking function, add createProgram function 
that receives a date and returns a created Program.

Start creating your movie festival.

In your main program function, create an instance of the Festival object. 

Create two instances of Program using createProgram function.

Create four instances of Movie object using createMovie function. 
Add all created movies to both programs using the addMovie method.

Add the created program instances to the created festival instance 
using festival’s addProgram method.

Display festival’s data using getData method.

Hints
List is a synonym for array, so when we say a list of movies, 
it’s actually an array of movie objects
Use JS built-in Date()object to create Date object
Use \t and \n special strings to format output 
Use built-in String methods to transform text from lowercase to uppercase
Use Array’s built-in methods to add and remove elements from an array*/


"use strict";
(function () {

	function Genre(name) {
		if (!name) {
			throw new Error('Field Name is required');
		}
		this.name = name;
        this.getData = function () {
			return this.name[0].toUpperCase() + this.name[this.name.length-1].toUpperCase();
		}
	}

	function Movie(title, genre, length) {
        if (!title) {
			throw new Error('Field Title is required');
		}
        if (!length) {
			throw new Error('Field Length is required');
		}
        if (typeof length === "string") {
			throw new Error('The length of the movie should be a number.');
		}
        if (!genre) {
			throw new Error('Field Genre is required');
		}
        if(!(genre instanceof Genre)) {
            throw new Error('Invalid genre input');
        }
		this.title = title;
		this.genre = genre;
        this.length = length;
        this.getData = function () {
			return this.title + ", " + this.length + "min, " + this.genre.getData();
		}
        
	}

    
	function Program(date) {
        if (!date) {
			throw new Error('Field Date is required');
		}
		this.date = new Date(date);
        this.listOfMovies = [];
		this.numberOfMoviesInProgram =  function() {
            var count = 0;
            this.listOfMovies.forEach(function(movie) {
                count ++;
            })
            return count;
        }
		this.addMovie = function (movie) {
            if (!movie || !(movie instanceof Movie)) {
				throw new Error('Invalid movie data');
			}
            
            this.listOfMovies.push(movie);
        }
        this.getTotalLengthOfAllMoviesInTheProgram = function () {
            var sum = 0;
			this.listOfMovies.forEach(function(movie) {
				sum += movie.length;
			});
            if (sum>=480) {
				throw new Error('The length of all movies in a list can not be longer than 8 hours.');
			};
			return sum + "min";
		}
        
        this.getData = function () {
            var result = this.date + ", " + this.getTotalLengthOfAllMoviesInTheProgram() + "\n";
			this.listOfMovies.forEach(function(movie) {
				result += '\t\t' + movie.getData() + '\n';
			});
			return result;
        }
	}

    function Festival(name, maxNumberOfMovies) {
        if (!name) {
			throw new Error('Field Name (festival) is required');
		}
        if (!maxNumberOfMovies) {
			throw new Error('Field maxNumberOfMovies is required');
		}
        if(typeof maxNumberOfMovies==="string") {
            throw new Error("The maximum number of movies has to be a number.");
        }
        this.name = name;
        this.listOfPrograms = [];
        this.totalNumberOfMoviesInFestival = function() {
			var count = 0;
			this.listOfPrograms.forEach(function(program) {
				count += program.numberOfMoviesInProgram();
			})
			return count;
        }
    
        this.addProgram = function (program) {
            if (!program || !(program instanceof Program)) {
				throw new Error('Invalid program data');
			}
            this.listOfPrograms.push(program);
        }
        this.getData = function () {
            if(this.listOfPrograms()!=0) {
                var result = this.name + " festival has " + this.totalNumberOfMoviesInFestival() + ' movie titles' + "\n";
                this.listOfPrograms.forEach(function(program) {
                    result += '\t\t' + program.getData() + '\n';
                });
                return result;
            } else {               
                return this.name + " festival" + "\n" + '\t\t' + "Program to be announced";
            }
        }
    }

    function createMovie(title, genre, length) {
        if (!title) {
			throw new Error('Field Title is required');
		}
        if (!genre) {
			throw new Error('Field Genre is required');
		}
        if (!length) {
			throw new Error('Field Length is required');
		}
        
        var gen = new Genre(genre);
		return new Movie(title,gen,length);
    }

    function createProgram(date) {
        if (!date) {
			throw new Error('Field Date is required');
		}
        var date1 = new Date(date);
        return new Program(date1);
    }

    

    //testing:
    try {
        var festival = new Festival("FEST",4);
        console.log(festival);

        var novembarskiProgram = createProgram("11/11/2021");
        var decembearskiProgram = createProgram("12/12/2021");
        console.log(novembarskiProgram);
        console.log(decembearskiProgram);

        var kum1 = createMovie("The Godfather 1", "drama", 175);
        var kum2 = createMovie("The Godfather 2", "drama", 202);
        var kum3 = createMovie("The Godfather 3", "drama", 162);
        var prohujaloSaVihorom = createMovie("Gone With The Wind", "drama", 300);

        novembarskiProgram.addMovie(kum1);
        novembarskiProgram.addMovie(prohujaloSaVihorom);
        decembearskiProgram.addMovie(kum2);
        decembearskiProgram.addMovie(kum3);
        console.log(novembarskiProgram);
        console.log(decembearskiProgram);

        festival.addProgram(novembarskiProgram);
        festival.addProgram(decembearskiProgram);
        console.log(festival);

        console.log(festival.getData());

        var kum4 = createMovie("The Godfather 3", "drama", 162);
        novembarskiProgram.addMovie(kum4);
        console.log(festival.totalNumberOfMoviesInFestival());

    } catch(error) {
        console.log('Error message:' + error.message);
    };

})();



/*Additional task:

Festival.js

When adding a movie to the movie list, 
make sure that there are no more than 4 movies of the same genre. 
Also, length of all movies in a list can not be longer than 8 hours.(152.)

Handle error when you enter text instead of a number for movie length. (108.)
Try to stop program execution when this type of error happens.
 
Modify the festival so that it accepts maximum number of movies. (167.)
Handle the error if text is inserted instead of a number for maximum number of movies. (174.)

var max = this.totalNumberOfMoviesInFestival();
            if(max>maxNumberOfMovies) {
                throw new Error("Festival is full, can't be extened any longer.");
            }

If there are no programs added to the festival, (200.)
instead of program data display a message informing the user 
that the program is yet to be announced.

Weekend festival
	 Program to be announced
*/

