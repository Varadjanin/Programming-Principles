/*
Airport

In your IDE of choice, create a new JavaScript file named airport.js 
and make it so that all code written in the file follows JS strict mode.

Create an anonymous immediately-invoking function 
that will hold the main execution of all program calls. 
Writing a simple command console.log(“Hi”) inside this function 
and running the code should output “Hi“ in the console.


Create constructor functions with properties representing the following:
Person - name, surname
Seat - number, category (can be "b" for business or "e" for economy)
Passenger - person (instance of Person), seat (instance of Seat)
Flight - relation, date and list of passengers (initially empty)
Airport - name (should be a hard-coded value "Nikola Tesla"), list of flights

If category is not provided for Seat, assume it’s economy (“e”). 

If seat number is not provided, assign a random number between 10 and 100. 

Add getData method to Person. It should return a formatted string containing the name and surname of the person.
"John", "Snow" -> "John Snow”

Add getData method to Seat. It should return a formatted string containing a seat number and category.
 12, "B" -> "12, B”

Add getData method to Passenger. It should return a formatted string containing a seat number, category letter (always in uppercase), a name and surname. To display seat data, use getData method of the Seat object. The same goes for the person data.
personObj, seatObj -> 12, B, John Snow

Add addPassenger method to Flight. It should receive Passenger and add the passenger to the passenger list of a given flight. 

Add addFlight method to Airport. It should add the flight to the list of flights of the airport.

Add getData method to Flight. It should return a formatted string containing a date, relation, all data related to the flight and list of passengers with their data.
25.10.2017, Belgrade - Paris
		1, B, John Snow
		2, E, Cersei Lannister

Inside your immediately-invoking function, add createFlight function that receives a relation (ex. Belgrade - New York) and date as parameters and returns a created Flight.

Inside your immediately-invoking function, add createPassenger function that receives a first name, last name, seat number and category and returns a created Passenger.

In you main program function, create an instance of the Airport object. 

Create two instances of the Flight object using the createFlight function and the following data:
relation: "Belgrade - New York" 		date: "Oct 25 2017"
relation: "Barcelona - Belgrade" 		date: "Nov 11 2017"

Create four instances of the Passenger object using the createPassenger function with the following data: 
Name: "John" 	surname: "Snow" 		seat number: 1		category: "b"
Name: "Cersei" 	surname: "Lannister" 	seat number: 2		category: "b"
Name: "Daenerys" 	surname: "Targaryen" 	seat number: 14	
Name: "Tyrion" 	surname: "Lannister" 	

Add the first two passengers to the first flight and the second two to the second flight using the Flight’s addPassenger method.

Add the created flight instances to the airport using Airport’s addFlight method.

Call Airport’s getData method to display the airport data output in the following manner:

Airport: Nikola Tesla, total passengers: 4
	25.10.2017, Belgrade - Paris
		1, B, John Snow
		2, E, Cersei Lannister
	11.11.2017, Barcelona - Belgrade
		3, E, Daenerys Targaryen
		4, E, Tyrion Lannister



Hints
List is a synonym for array, so when we say a list of flights, it’s actually an array of flight objects   
Use JS built-in Date()object to parse input date
Use \t and \n special strings to format output 
Use built-in String methods to transform text from lowercase to uppercase
Use Array’s built-in methods to add and remove elements from an array


Extra
Modify Flight getData method to return a formatted string as date and relation (as the first and the last consonant of the starting location - the first and the last consonant of the destination location) of the current flight.
"Belgrade - Paris", "25.09.2017" -> 25.09.2017 BD - PS

While adding passenger with addPassenger method, make sure that:
Two passengers can not have the same seat number;
The flight can not have more than 100 passengers;
If a passenger with the same full name exists in a flight list, you should replace the existing passenger’s data with new data (e.g. it can happen when a passenger changes seats).

Modify Passenger’s getData method to return full category name “business” for “b” and “economy” for “e”.

Add the total number of passengers in business category for each flight and the total number of business category passengers for the airport to final output.
*/

"use strict";
(function () {
	function Person(name, surname) {
		if (!name || !surname) {
			throw new Error('Fields name and surname are required');
		}
		this.name = name
		this.surname = surname
		this.getData = function() {
			return this.name + ' ' + this.surname
		}
	}
	function Seat(number, category) {
		category = category || "e";
		number = number || Math.floor( 91 * Math.random() + 10 )
		if ( !['e','b'].includes(category) ) {
			throw new Error('Invalid category input');
		}
		this.number = number
		this.category = category;
		this.getData = function() {
			return this.number + ', ' + this.category.toUpperCase();
		}
	}
	function Passenger(person, seat) {
		if (!person ||  !(person instanceof Person)) {
			throw new Error('Invalid person input');
		}
		if (!seat ||  !(seat instanceof Seat)) {
			throw new Error('Invalid seat input');
		}
		this.person = person
		this.seat = seat
		this.getData = function () {
			return this.seat.getData() + ', ' + this.person.getData()
		}
	}
	function Flight(relation, date) {
		if (!relation || !date) {
			throw new Error('Fields relation and date are required');
		}
		this.relation = relation
		this.date = new Date(date)
		this.listOfPassengers = []
		this.addPassenger = function(passenger) {
			if (!passenger || !(passenger instanceof Passenger)) {
				throw new Error('Invalid passenger data')
			}
			this.listOfPassengers.push(passenger);
		}
		this.getData = function() {
			var year = this.date.getFullYear();
			var month = this.date.getMonth() + 1;
			var day = this.date.getDate();
			var result = '\t' + day + '.' + month + '.' + year + ', ' + this.relation + '\n';
			this.listOfPassengers.forEach(function(passenger) {
				result += '\t\t' + passenger.getData() + '\n'
			})
			return result;
		}
	}
	function Airport() {
		this.name = "Nikola Tesla"
		this.listOfFlights = []
		this.addFlight = function(flight) {
			if (!flight || !(flight instanceof Flight)) {
				throw new Error('Invalid flight data')
			}
			this.listOfFlights.push(flight);
		}
		this.getPassengersNumber = function() {
			var count = 0;
			this.listOfFlights.forEach(function(flight) {
				count += flight.listOfPassengers.length
			})
			return count;
		}
		this.getData = function() {
			var result = 'Airport: ' + this.name + ', total passengers: ' + this.getPassengersNumber() + '\n';
			this.listOfFlights.forEach(function(flight) {
				result += flight.getData();
			})
			return result
		}
	}
	function createFlight(relation, date) {
		return new Flight(relation, date)
	}
	function createPassenger(firstName, lastName, seatNumber, category) {
		var person = new Person(firstName, lastName)
		var seat = new Seat(seatNumber, category);
		return new Passenger(person, seat);
	}
	//testing
	try {
		var nikolaTesla = new Airport()
		var belgradeParis = createFlight("Belgrade - Paris", "Oct 25 2017")
		var barcelonaBelgrade = createFlight("Barcelona - Belgrade", "Nov 11 2017")
		var passenger1 = createPassenger("Dario", "Stamenkovic", 67, "b")
		var passenger2 = createPassenger("Cersei", "Lannister", 62, "b")
		var passenger3 = createPassenger("Daenerys", "Targaryen", 14)
		var passenger4 = createPassenger("Nikola", "Colovic")
		belgradeParis.addPassenger(passenger1)
		belgradeParis.addPassenger(passenger2)
		barcelonaBelgrade.addPassenger(passenger3)
		barcelonaBelgrade.addPassenger(passenger4)
		nikolaTesla.addFlight(belgradeParis)
		nikolaTesla.addFlight(barcelonaBelgrade)
		console.log(nikolaTesla.getData());
	} catch (error) {
		console.log('Error message:' + error.message);
	}
})()