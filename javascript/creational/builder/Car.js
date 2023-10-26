const CarBuilder = require("./CarBuilder");

class Car {

    model;
    price;

    constructor(
        model,
        price
    ) {
        this.model = model;
        this.price = price;
    }

    static builder() {
        return new CarBuilder();
    }

}

module.exports = Car;