/*
Bookmaker’s

In your IDE of choice, create a new JavaScript file named booking-house.js 
and make it so that all code written in the file follows JS strict mode.

Create an anonymous immediately-invoking function 
that will hold main execution of all program calls. 
Make sure that functions that you write in this function are pure functions.

Create constructor functions with properties representing the following:
Country - name, odds, continent (EU, AS, AF, SA, NA, AU)
Person - name, surname, date of birth
Player - person, bet amount, country (instance of Country)
Address - country, city, postal code, street and number
BettingPlace - address and list of players (initially empty)
BettingHouse - competition, list of betting places (initially empty) and number of players

Create continents as constants (objects that can not change). 
So, when passing a continent as a parameter, you should pass Continent.ASIA.

Add a method to Person that returns a formatted string containing the name, 
surname and date of birth of the person (date of birth in dd.mm.yy format).

Add a method to Address that returns a formatted string like the following one:
	Nemanjina 4, 11000 Beograd, SR

Add a method to Player that returns a formatted string containing a country, 
expected win amount (odds * bet amount) and person data.
SR, 1050.00 eur, Pera Peric, 29 years

Add a method to BettingPlace that returns a formatted string 
containing a street (without a number), postal code and city, 
and sum of all bet amounts of that place.
Nemanjina, 11000 Belgrade, sum of all bets: 50000eur

Add a method to BettingPlace that adds a player 
to the players list of a betting place. 

Inside your immediately-invoking function, 
add a function that returns a created Player.

Inside your immediately-invoking function, 
add a function that creates a BettingPlace.

Create an instance of the BettingHouse that receives the name of competition.
Create four players with random data. Create two betting places. 
Add created players as you wish to Betting places. 
Add betting places to the betting house.

Display all betting house data in the following manner:

Football World Cup Winner, 2 betting places, 4 bets
	Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
		SR, 1050.00 eur, Pera Peric, 29 years
		SR, 1050.00 eur, Pera Peric, 29 years
Nemanjina, 11000 Belgrade, sum of all bets: 2100eur
		GR, 1050.00 eur, Pera Peric, 29 years
		SR, 1050.00 eur, Pera Peric, 29 years
There are 3 bets on Serbia


*/

"use strict";
(function () {

	var continents = {
		ASIA : "AS",
		EUROPE : "EU",
		AFRICA : "AF",
		SOUTH_AMERICA : "SA",
		NORTH_AMERICA : "NA",
		AUSTRALIA : "AU"
	};

	function Country(name, odds, continent) {
		if(!name || !odds || !continent) {
			throw new Error('Fields name, odds and continent are required');
		}
		if( !["EU", "AS", "AF", "SA", "NA", "AU"].includes(continent) ) {
			throw new Error('Invalid continent input');
		}
		
		this.name = name;
		this.odds = odds;
		this.continent = continent;
		
	}

	function Person(name, surname, dob) {
		if(!name || !surname || !dob) {
			throw new Error("Fields name, surname and date of birth are required.");
		}
		this.name = name;
		this.surname = surname;
		this.dateOfBirth = new Date(dob);
		//datum ne radi ako se unese u formi dd-mm-yy!!!
		//u bilo kom formatu gde je dan ispred meseca- ne radi(yy-dd-mm)
		this.getData = function () {
			var year = this.dateOfBirth.getFullYear();
			var month = this.dateOfBirth.getMonth() + 1;
			var day = this.dateOfBirth.getDate();
			return this.name + " " + this.surname + ", " + day + '.' + month + '.' + year + ', ' + '\n';
		}
	}

	function Player(person, betAmount, country) {
		if(!person || !betAmount || !country) {
			throw new Error("Fields person, betAmount and country are required.");
		};
		if(!(country instanceof Country)) {
			throw new Error("Invalid country input.");
		};
		if(!(person instanceof Person)) {
			throw new Error("Invalid person input.");
		};
		this.person = person;
		this.betAmount = betAmount;
		this.country = country;
		this.calculateAgeInYears = function() {
			var date = new Date(person.dateOfBirth);
			var now = new Date();
			var current_year = now.getFullYear();
			var age = current_year - date.getFullYear();
			var birthday_this_year = new Date(current_year, date.getMonth(), date.getDate());
			var has_had_birthday_this_year = (now >= birthday_this_year);
			return has_had_birthday_this_year ? age : age - 1;
		}
	
		this.getData = function() {
			return this.country.name + ", " + (country.odds * this.betAmount) + " eur, " + person.name + " " + person.surname + ", " + this.calculateAgeInYears(person.dateOfBirth) + " years";
		}
	}

	function Address(country, city, postalCode, street, streetNumber) {
		if(!country || !city || !postalCode || !street || !streetNumber) {
			throw new Error("Fields country, street, street number, postal code and city are required.")
		}
		if(!(country instanceof Country)) {
			throw new Error("Invalid country input.");
		}
		this.country = country;
		this.city = city;
		this.postalCode = postalCode;
		this.street = street;
		this.streetNumber = streetNumber;
		this.getData = function() {
			return "\t" + this.street + " " + this.streetNumber + ", " + this.postalCode + " " + this.city + ", " + this.country.name + "\n";
		}
	}

	function BettingPlace(address) {
		if(!(address instanceof Address)) {
			throw new Error("Invalid adress input.");
		}
		if(!address) {
			throw new Error("Field address is required.")
		}
		this.address = address;
		this.listOfPlayers = [];
		this.getTheSumOfAllBetsHere = function() {
			var sum = 0;
			this.listOfPlayers.forEach(function(player) {
				sum += player.betAmount;
			});
			return sum;
		};
		this.getData = function() {
			return this.address.street + ", " + this.address.postalCode + " " + this.address.city + ", sum of all bets: " + this.getTheSumOfAllBetsHere() + "eur" + "\n";
		};
		this.addPlayer = function(player) {
			if (!player || !(player instanceof Player)) {
				throw new Error('Invalid player data')
			}
			this.listOfPlayers.push(player);
			return "Player added.";
		};
	};

	function BettingHouse(competition, numberOfPlayers) {
		if(!competition || !numberOfPlayers) {
			throw new Error("Fields competition and number of Players are required.")
		}
		this.competition = competition;
		this.listOfBettingPlaces = [];
		this.numberOfPlayers = numberOfPlayers;
		this.addBetPlace = function(betPlace) {
			if (!betPlace || !(betPlace instanceof BettingPlace)) {
				throw new Error('Invalid betting place data')
			}
			this.listOfBettingPlaces.push(betPlace);
			return "Betting place added.";
		};
		this.getData = function() {
			
			var content = "";
			for (var i = 0; i < this.listOfBettingPlaces.length; i++) {
				content += "\t" + this.listOfBettingPlaces[i].getData();
				var beet = this.listOfBettingPlaces[i];
				beet.listOfPlayers.forEach(function (element) {
					content += "\t\t" + element.getData() + "\n";
				});
			}
	
			var counter = 0;
			this.listOfBettingPlaces.forEach(function(place) {
				if(place.address.country.name === "Serbia") {
				counter++;
			}});
	
			var title = this.competition + ", " + this.listOfBettingPlaces.length + " betting places, " + numberOfPlayers + " bets" + "\n";
			var footer = "There are " + counter + " bets on Serbia";
	
			return title + content + footer;
		};
	};

	function createPlayer(nameP, surname, dob, nameC, odds, continent, betAmount, country) {
		var person = new Person(nameP, surname, dob);
		var country = new Country(nameC, odds, continent);
		return new Player(person, betAmount, country);
	}

	function createBettingPlace(country, city, postalCode, street, streetNumber) {
		var address = new Address(country, city, postalCode, street, streetNumber);
		return new BettingPlace(address);
	}
	
	//testing all:
	try {
		var drzava1 = new Country("Serbia", 20, continents.EUROPE);
		var drzava2 = new Country("Portugal", 30, continents.NORTH_AMERICA);
		var drzava3 = new Country("France", 50, continents.SOUTH_AMERICA);
		var drzava4 = new Country("England", 10, continents.AFRICA);
		
		var osoba1 = new Person("Marina", "Varadjanin", "11/11/1985");
		var osoba2 = new Person("Nemanja", "Varadjanin", "1985/12/15");
		var osoba3 = new Person("Marija", "Bodrozic", "5/3/1987");
		var osoba4 = new Person("Uros", "Mijatovic", "2/10/1987");
		
		var player1 = new Player(osoba1, 100, drzava1);
		var player2 = new Player(osoba2, 50, drzava2);
		var player3 = new Player(osoba3, 20, drzava3);
		var player4 = new Player(osoba4, 10, drzava4);

		var adresa1 = new Address(drzava1, "Belgrade", "11000", "Nemanjina", "11")
		var adresa2 = new Address(drzava2, "Lisabon", "99000", "De Todos Santos", "55")
		
		var belgradeBet = new BettingPlace(adresa1);
		var lisabonBet = new BettingPlace(adresa2);

		var meridianBet = new BettingHouse("basketball", 20);

		console.log(meridianBet);
		console.log(lisabonBet);
		console.log(adresa2);
		console.log(player1);
		console.log(osoba1);
		console.log(drzava1);
		

		//checking functions:
		console.log(osoba2.getData());
		console.log(player2.calculateAgeInYears());
		console.log(player3.getData());
		console.log(adresa1.getData());
		console.log(belgradeBet.getTheSumOfAllBetsHere());
		console.log(belgradeBet.getData());

		belgradeBet.addPlayer(player3);
		belgradeBet.addPlayer(player4);
		console.log(belgradeBet.listOfPlayers);
		console.log(belgradeBet.getTheSumOfAllBetsHere());

		lisabonBet.addPlayer(player1);
		lisabonBet.addPlayer(player2);
		console.log(lisabonBet.listOfPlayers);
		console.log(lisabonBet.getTheSumOfAllBetsHere());

		meridianBet.addBetPlace(belgradeBet);
		meridianBet.addBetPlace(lisabonBet);
		console.log(meridianBet.getData());

		var experimentBetPlace = createBettingPlace(drzava1, "Belgrade", "11000", "Glavna", 22);
		var experimentPlayer = createPlayer("Mare", "Maric", "01/01/2020", "Serbia", 30, continents.AFRICA, 500, drzava1);
		console.log(experimentBetPlace);
		console.log(experimentPlayer);

	} catch (error) {
		console.log('Error message:' + error.message);
	}
})()

