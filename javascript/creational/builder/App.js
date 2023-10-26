const Car = require("./Car");

(() => console.log(Car.builder().model("Honda Civic").price(60000.00).build()))();