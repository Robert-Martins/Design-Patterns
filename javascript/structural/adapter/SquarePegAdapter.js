const RoundPeg = require("./RoundPeg");

class SquarePegAdapter extends RoundPeg {

    squarePeg;

    constructor(squarePeg) {
        this.squarePeg = squarePeg;
    }

    getRadius = () => {
        return (this.squarePeg?.width * Math.sqrt(2)) / 2;
    }

}

module.exports = SquarePegAdapter;