const FoodFactory = require('./FoodFactory');

(() => {
    console.log(
        new FoodFactory['burguer']().createFood(),
        new FoodFactory['fries']().createFood(),
        new FoodFactory['pizza']().createFood()
    );
})