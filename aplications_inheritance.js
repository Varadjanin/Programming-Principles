/*
Applications:

Create constructor functions with properties 
representing the following:
WebApp: name, url, technologies, licence, stars
MobileApp: name, platforms, licence, stars
 
All web applications should inherit methods: 
getData which prints out all the information
reactBased which checks if one of the used technologies is React
 
All mobile applications should inherit methods:
getData which prints out all the informations
forAndroid which checks if one of the platforms 
the application is developed for is Android

Both web and mobile applications should inherit methods:
isCCLicence  which checks if the licence 
of the application is CC (Creative Commons) 
like which increases the number of stars by one
showStars which prints out the number of stars
*/

function App(name, licence, stars) {
    if(stars<0 || stars>5) {
        throw new Error("Invalid stars input");
    }
    this.name = name;
    this.licence = licence;
    this.stars = stars;
}
App.prototype.isCCLicence = function() {
    return (this.licence === "Creative Commons" || this.licence === "CC");
}
App.prototype.like = function() {
    if(this.stars===5) {
        return "Already has 5 stars!";
    } else {
        this.stars = this.stars + 1;
        return this.stars;
    };
}
App.prototype.showStars = function() {
    console.log(this.stars);
}





function WebApp(name, url, technologies, licence, stars) {
    App.call(this, name, licence, stars);
    this.url = url;
    this.technologies = technologies;
}
WebApp.prototype = Object.create(App.prototype);
WebApp.prototype.constructor = WebApp;

WebApp.prototype.getData = function() {
    return "name:" + this.name + "\n" + "url:" + this.url + "\n" + "technologies:" + this.technologies + "\n" + "licence:" + this.licence + "\n" + "stars:" + this.stars;
}

WebApp.prototype.reactBased = function() {
    return this.technologies.includes("React");
}





function MobileApp(name, platforms, licence, stars) {
    App.call(this, name, licence, stars);
    this.platforms = platforms;
}
MobileApp.prototype = Object.create(App.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function() {
    return "name:" + this.name + "\n" + "platforms:" + this.platforms + "\n" + "licence:" + this.licence + "\n" + "stars:" + this.stars;
}

MobileApp.prototype.forAndroid = function() {
    return this.platforms.includes("Android");
}


//testing:

var app = new App("Kul App", "CC", 3);
var webApp = new WebApp("Kul App", "https://bla/blabla/bla", ["React"], "CC", 5);
var mobileApp = new MobileApp("Kul App", ["Android"], "CCC", 2);
console.log(app);
console.log(webApp);
console.log(mobileApp);

console.log(webApp.getData());
console.log(webApp.reactBased());
console.log(mobileApp.getData());
console.log(mobileApp.forAndroid());
console.log(webApp.isCCLicence());
console.log(mobileApp.isCCLicence());
console.log(webApp.like());
console.log(mobileApp.like());
webApp.showStars();
mobileApp.showStars();