/*
Why pay a fortune teller when you can just program your fortune yourself?
Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

function tellFortune(children, lover, location, job) {
    return "You will be a " + job + " in " + location + ", and married to " + lover + " with " + children + " kids.";
}
console.log(tellFortune(3, "Nemanja", "Belgrade", "Front Developer"));
console.log(tellFortune(6, "Marko", "Lisabon", "fotograf"));
console.log(tellFortune(1, "Delija", "Firenca", "domacica"));

/*
You know how old your dog is in human years, but what about dog years? Calculate it!
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.

Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(age, rate) {
    return "Your doggie is " + age*rate + " years old in dog years!";
}
console.log(calculateDogAge(10,7));
console.log(calculateDogAge(12,7));
console.log(calculateDogAge(3,7));

/*
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.

Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

function calculateSupply(age,dailyDose) {
    var maxAge = 100;
    return "You will need " + (100-age)*(parseInt(dailyDose)+1) + " to last you until the ripe old age of " + maxAge +".";
}
console.log(calculateSupply(90,1.5));
console.log(calculateSupply(10,10));
console.log(calculateSupply(35,0.3));

/*
It's hot out! Let's make a converter based on the steps here.
Create a function called celsiusToFahrenheit:
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
F = (9*temp/5) + 32;
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

function celsiusToFahrenheit(C) {
    return C + "°C is " + ((9*C/5) + 32) + "°F.";
}
function fahrenheitToCelsius(F) {
    return F + "°F is " + ((F-32)*5)/9 + "°C.";
} 
console.log(celsiusToFahrenheit(25));
console.log(fahrenheitToCelsius(77));