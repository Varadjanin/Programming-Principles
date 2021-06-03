/*
Inner(private) function - funkcija koja je kreirana u nekoj drugoj funkciji
function outer(b){
  function inner(a){
    return a;
  }

  return b;
}
Anonymous function - funkcija bez imena
// anonimna funkcija
function(a){
  return a;
}
// moze biti dodeljena varijabli
var anonymous = function(a){
  return a;
}
IIFE (Immediately Invoked Function Expression),Self-invoking - samopozivajuća funckija 
(function(a){
  return a;
})()
Callback - funkcija prosledjena drugoj funkciji kao argument
// prethodnog definisana callBack ffunkcija
function callBack(a){
  return a;
}

function whichIsCallingCallback(func){
  func();
}

whichIsCallingCallback(callBack);

// callBack funkcija definisana prilikom poziva funkcije koja prima callBack funkciju kao argument
whichIsCallingCallback(function(b){
  return b;
});
Constructor - funkcija koja vraća(instanicra) objekat(svoju instancu)
function Cat(name){
 this.name = name;
}
Instanca - objekat koji je kreirala konstrukot funkcija je instanca te konstruktor funkcije
var catInstance = new Cat('Garfild');
*/