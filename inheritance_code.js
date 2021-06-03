//new way, using "Class":

class Person {
    constructor(name, surname, age) {
        this.name = name
        this.surname = surname
        this.age = age
    }
 
    sayHi() {
        console.log('Hi');
    }
 
    getInfo() {
        return "Hi, I'm " + this.name
    }
 }
 
 class Programmer extends Person {
    constructor(name, surname, age, position, experience, language) {
        // 1. Collect properties
        super(name, surname, age)
 
        this.position = position
        this.experience = experience
        this.language = language
    }
 
    getInfo() {
        var personInfo = super.getInfo()
        console.log(personInfo + " " + this.language)
    }
 
    writeCode() {
        console.log('Typing ' + this.language + ' code.');
    }
 }
 
 class Tester extends Person {
    constructor(name, surname, age, position, experience) {
        super(name, surname, age)
        this.position = position
        this.experience = experience
    }
 
    test() {
        console.log(this.position, 'Bug detected do it again');
    }
 
    getInfo() {
        console.log(super.getInfo(), this.position);
    }
 }
 
 var peraProg = new Programmer('Pera', 'Peric', 30, "Frontend", 1, "JavaScript")
 var lazaTester = new Tester('Laza', 'Lazic', 30, "QA", 3)
 
 lazaTester.getInfo()
 lazaTester.test()
 peraProg.getInfo()
 peraProg.writeCode()
 


 //Old way:

 // person constructor function
function Person(name, surname){
    this.name = name;
    this.surname = surname;
 }
 // all persons will share fullName and printInfo methods as they are 
 // provided in the prototype object of Person constructor function
 Person.prototype.fullName = function(){
    return this.name + " " + this.surname;
 }
 Person.prototype.printInfo = function(){
    console.log(this.fullName());
 }
 var pera = new Person('Pera', 'Peric');
 pera.printInfo();
 
 // we would like Programmer to inherit from Person
 function Programmer(name, surname, favouriteLanguage){
    Person.call(this, name, surname);
    this.favouriteLanguage = favouriteLanguage;
 }
 
 // we create the object with prototype Person.prototype
 Programmer.prototype = Object.create(Person.prototype);
 // we assign the value to a constructor property of Programmer’s
 // prototype as we overwrote it with the previous statement
 Programmer.prototype.constructor = Programmer;
 
 console.log(Programmer.prototype);
 console.log(Person.prototype);
 
 Programmer.prototype.printInfo = function(){
 var fulllName = this.fullName();
 var fulllName = Object.getPrototypeOf(Programmer.prototype).fullName.call(this);
 //var fulllName = Programmer.prototype.__proto__.fullName.call(this);
 console.log(fulllName + " " + this.favouriteLanguage);
 }
 var laza = new Programmer('Laza', 'Lazic', 'JS');
 laza.printInfo();


 //skracena verzija old school nasledjivanja:
 // person constructor function
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  Person.prototype.fullName = function () {
    return this.name + ' ' + this.surname;
  };
  Person.prototype.printInfo = function () {
    console.log(this.fullName());
  };
  var pera = new Person('Pera', 'Peric');
  var john = new Person('John', 'Peric');
  //inheritance (nasledjivanje)
  function Programmer(name, surname, favouriteLanguage) {
    Person.call(this, name, surname);
    this.favouriteLanguage = favouriteLanguage;
  }
  Programmer.prototype = Object.create(Person.prototype);
  Programmer.prototype.constructor = Programmer;
  var peraProgramer = new Programmer('pera', 'peric', 'js');
  console.log(peraProgramer);
  function BackEndProgrammer(name, surname, favouriteLanguage, database) {
    Programmer.call(this, name, surname, favouriteLanguage);
    this.database = database;
  }
  BackEndProgrammer.prototype = Object.create(Programmer.prototype);
  BackEndProgrammer.prototype.constructor = BackEndProgrammer;
  var peraBProgramer = new BackEndProgrammer('pera', 'peric', 'js', 'mongoDb');
  console.log(peraBProgramer);
 