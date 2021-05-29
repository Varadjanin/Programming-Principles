/*
In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all code written in the file follows strict mode.

Create an anonymous immediately-invoking function that will hold the main execution of all program calls. Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.

Create constructor functions with properties representing the following “things”:
Product - product id (random number of 5 digits generated on every product creation), name, price (with 2 decimal places), expiration date
ShoppingBag - a list of products (initially empty; function constructor does not have any input parameters)

Add getInfo method to Product. It should return a formatted string containing product code (the first and last letter of the name together with the product id), name and price.
"Banana" -> BA32784, Banana, 129.31
 
Add addProduct method to ShoppingBag. It should receive a Product and add it to the product list. You can add a product to the list only if it has a valid expiration date.  

Add a method to ShoppingBag that calculates the average product price of products in your product list and prints out this value with the precision of three decimals. 

Add getMostExpensive method that finds the most expensive product and prints out its info.

Add calculateTotalPrice method to ShoppingBag that calculates the total price of products in the shopping bag list. 

Create a constructor function with properties representing the following:

PaymentCard - account balance (number with 2 decimal places), active or inactive status, valid until date	

Create checkoutAndBuy function which receives shopping bag and payment card and prints if the purchase is successful or not. Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag. If there is not enough money, print out the amount that is missing to complete the purchase.
*/

"use strict";

(function() {

    function Product(name, price, expirationDate) {
        if(!name || !price || !expirationDate) {
            throw new Error("Fields name, price and expiration date are required.");
        }
        this.productID = Math.round((89999 * Math.random()) + 10000);
        this.name = name;
        this.price= Number(Math.round(price+'e2')+'e-2');
        this.expirationDate = new Date(expirationDate);
        this.getInfo = function() {
            var productCode = this.name[0].toUpperCase() + this.name[this.name.length-1].toUpperCase() + this.productID;
            return productCode + ", " + this.name + ", " + this.price;
        }
    };

    function ShoppingBag() {
        this.listOfProducts = [];
        this.addProduct = function(product) {
            var now = Date.now();
            if (now<product.expirationDate) {
                this.listOfProducts.push(product);
            };
        };
        this.getAverageProductPrice = function() {
            var sum = 0;
            this.listOfProducts.forEach(function(product) {
                sum += product.price;
			})
            var result = sum/this.listOfProducts.length;
			return Number(Math.round(result+'e3')+'e-3');
        };
        this.getMostExpensive = function() {
            var max = this.listOfProducts[0].price;
            var result;
            this.listOfProducts.forEach(function(product) {
                if(product.price>=max) {
                    max = product.price;
                    result = product.getInfo();
                };
            });
            return result;
        };
        this.calculateTotalPrice = function() {
            var sum = 0;
            this.listOfProducts.forEach(function(product) {
                sum += product.price;
            });
            return sum;
        };
    };

    function PaymentCard(accountBalance, status, validUntilDate) {
        
        if(!accountBalance || !status || !validUntilDate) {
            throw new Error("Fields account balance, status and valid-until-date are required.");
        };
        if ( !['active','inactive'].includes(status) ) {
			throw new Error('Invalid status input');
		};
        this.accountBalance = Number(Math.round(accountBalance+'e2')+'e-2');
        this.status = status;
        this.validUntilDate = new Date(validUntilDate);
        var now = Date.now();
        this.isValid = function() {
            return (this.validUntilDate>now);
        };
    };

    function checkoutAndBuy(shoppingBag, paymentCard) {
        if(!(shoppingBag instanceof ShoppingBag)) {
            throw new Error("Invalid Shopping Bag input.");
        };
        if(!(paymentCard instanceof PaymentCard)) {
            throw new Error("Invalid payment card input.");
        };
        var kusur = shoppingBag.calculateTotalPrice()-paymentCard.accountBalance;
        if(paymentCard.status==="active" && paymentCard.isValid()) {
            if(paymentCard.accountBalance>=shoppingBag.calculateTotalPrice()) {
                return "The purchase is successful!";
            } else {
                return "The purchase is not successfull!" + "\n" + "You are missing " + Number(Math.round(kusur+'e2')+'e-2') + "din to complete the purchase.";
            };
        } else {
            return "Your credit card is either inactive or expired.";
        }
    };

    //testing:
    try {
        var product = new Product("smoki", 80.556677, "29/5/2021");
        console.log(product);
        console.log(product.getInfo());

        var lista = new ShoppingBag();
        lista.addProduct(product);
        console.log(lista.listOfProducts);

        var product2 = new Product("jogurt", 100.445566, "11/11/2023");
        lista.addProduct(product2);
        console.log(lista);
        console.log(lista.getAverageProductPrice());
        console.log(lista.getMostExpensive());
        console.log(lista.calculateTotalPrice());

        var kartica = new PaymentCard(100, "active", "11/12/2022");
        console.log(checkoutAndBuy(lista, kartica));

    } catch (error) {
        console.log("Error message:" + error.message);
    };

})();



// var today = Date.now();
// var expire = new Date("5/5/2021");
// console.log(today<=expire);
// console.log(today);
// console.log(expire);
// console.log(expire-today);
// console.log(today<=expire)