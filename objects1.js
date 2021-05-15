/*1.Create an object that represents your favourite coffee. 
Please include coffee name, strength, flavour, milk, sugar, … everything you like!*/

var myFavoriteCoffee = {
    name: "Columbian Mix",
    strength: "medium",
    flavour: "black coffee",
    milk: "one sip",
    sugar: "two spoons",
    shop: "Moja Tasta Ne Pije Svasta"
};

//Another way of doing this using THIS and constructor functions:


function MyFavoriteCoffee (name, strength, flavour, milk, sugar, shop) {
    this.name = name;
    this.strength = strength;
    this.flavour = flavour;
    this.milk = milk;
    this.sugar = sugar;
    this.shop = shop;
}

/*2.Create an object that represents your favourite movie. 
Please include title, actors, director, genre, popularity. */

var myFavoriteMovie = {
    title: "Gone With The Wind",
    
    femailLeadActress: "Vivijen Li",
    mailLeadActor: "Klark Gejbl",
    director: "Viktor Fleming",
    genre: "history drama",
    popularity: "blockbuster"
};

//Another way of doing this using THIS and constructor functions:

function MyFavoriteMovie (title, femailLeadActress, mailLeadActor, director, genre, popularity) {
    this.title = title;
    this.femailLeadActress = femailLeadActress;
    this.mailLeadActor = mailLeadActor;
    this.director = director;
    this.genre = genre;
    this.popularity = popularity;
}


/*3.Write a function that creates an object that represents a project. 
Each project is described by: description,  programming language, git repository, 
boolean status that says if the project is in development or not. 

Add a method that prints out the project's repository,  
a method that checks if the project is written in JavaScript 
as well as a method that checks if the project is in development or not.*/

function createObj(descr, pl, git, st) {
    
    var project = {
        description: descr,
        programmingLanguage: pl,
        gitRepository: git,
        status: st,
        print: function () {
            console.log(git);
        },
        checkProgram: function () {
            return pl==="JavaScript";
        },
        checkDevelopment: function () {
            return st ? "in development" : "not in development";
        }
    }
    return project;
}
console.log(createObj("blablablabla", "JavaScript", "Web", true));
var calculator = createObj("blablablabla", "C++", "Web", true);
calculator.print();
console.log(calculator.checkProgram());
console.log(calculator.checkDevelopment());

//Another way of doing this using THIS and constructor functions:

function Project(descr, pl, git, st, ) {
    this.description= descr;
    this.programmingLanguage= pl;
    this.gitRepository= git;
    this.status= st;
    this.print= function () {
        console.log(git);
    },
    this.checkProgram= function () {
        return pl==="JavaScript";
    },
    this.checkDevelopment= function () {
        return st ? "in development" : "not in development";
    }
}


/*4.Write a function that creates an object that represents a culinary recipe. 
Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), 
list of ingredients, preparing time, preparing instruction. 

Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients. */

function createObj2 (name1, cousineType, complex, ingredients, time, instructions) {
    var culinaryRecipe = {
        name: name1,
        cuisineType: cousineType,
        complexity: complex,
        ingredientsList: ingredients,
        preparingTime: time,
        preparingInstructions: instructions,
        print: function () {
            console.log(culinaryRecipe.ingredientsList);
        },
        check: function () {
            if(culinaryRecipe.preparingTime<=15) {
                return "yes";
            } else {
                return "no";
            }
        },
        change: function (newCuisineType) {
            culinaryRecipe.cuisineType = newCuisineType;
            return this.cuisineType;
        },
        delete: function(toBeDeleted) {
            var newIngredients = [];
            for(var i=0; i<ingredients.length; i++) {
                if(ingredients[i]===toBeDeleted) {
                    continue;
                } else {
                    newIngredients[newIngredients.length] = ingredients[i];
                }
            }
            return culinaryRecipe.ingredients = newIngredients;
        }
    }
    
    return culinaryRecipe;
}

var tunjevina = createObj2("Tuna-salad", "mediteranska", 1, ["tunjevina", "luk", "maslinovo ulje", "limun", "krompir"], 20, "Samo iseckaj sastojke i umuljaj ih u veliku ciniju.");
console.log(tunjevina);
tunjevina.print();
console.log(tunjevina.check());
console.log(tunjevina.change("italijanska"));
console.log(tunjevina.delete("limun"));


//Another way of doing this using THIS and constructor functions:

function CulinaryReceipt (name1, cousineType, complex, ingredients, time, instructions) {
        this.name= name1;
        this.cuisineType= cousineType;
        this.complexity= complex;
        this.ingredientsList= ingredients;
        this.preparingTime= time;
        this.preparingInstructions= instructions;
        this.print= function () {
            console.log(this.ingredientsList);
        },
        this.check= function () {
            if(this.preparingTime<=15) {
                return "yes";
            } else {
                return "no";
            }
        },
        this.change= function (newCuisineType) {
            this.cuisineType = newCuisineType;
        },
        this.delete= function(toBeDeleted) {
            var newIngredients = [];
            for(var i=0; i<this.ingredientsList.length; i++) {
                if(this.ingredientsList[i]===toBeDeleted) {
                    continue;
                } else {
                    newIngredients[newIngredients.length] = this.ingredientsList[i];
                }
            }
            this.ingredientsList = newIngredients;
        }
    
}


var tunjevina = new CulinaryReceipt("Tuna-salad", "mediteranska", 1, ["tunjevina", "luk", "maslinovo ulje", "limun", "krompir"], 20, "Samo iseckaj sastojke i umuljaj ih u veliku ciniju.")
console.log(tunjevina);
tunjevina.print();
console.log(tunjevina.check());
tunjevina.change("italijanska");
console.log(tunjevina);
tunjevina.delete("limun");
console.log(tunjevina);