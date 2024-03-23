class RoundHole {

    radius;

    constructor(radius) {
        this.radius = radius;
    }

    fits = (peg) => {
        return peg?.radius <= this.radius;
    }

}

module.exports = RoundHole;