const Car = require("./Car");

class CarBuilder {

    _model;
    _price;

    constructor() {}

    model(model) {
        this._model = model;
        return this;
    }

    price(price) {
        this._price = price;
        return this;
    }

    build() {
        return new Car(this.model, this.price);
    }

}

module.exports = CarBuilder;