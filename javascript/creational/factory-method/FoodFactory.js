module.exports = () => {
    let foodFactory = {};

    foodFactory['burguer'] = class BurguerFactory {

        createFood = () => {
            return 'Burguer created';
        }

    }

    foodFactory['fries'] = class FriesFactory {

        createFood = () => {
            return 'Fries created';
        }
    }

    foodFactory['pizza'] = class PizzaFactory {

        createFood = () => {
            return 'Pizza created';
        }
    }

    return foodFactory;

}