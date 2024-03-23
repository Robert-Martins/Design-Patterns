const RoundHole = require("./RoundHole");
const RoundPeg = require("./RoundPeg");
const SquarePeg = require("./SquarePeg");
const SquarePegAdapter = require("./SquarePegAdapter");

(
    () => {
        const squarePeg = new SquarePeg(4);
        const roundPeg = new RoundPeg(2);
        const roundHole = new RoundHole(2);
        const squarePegAdapter = new SquarePegAdapter(squarePeg);
        console.log(
            roundHole?.fits(roundPeg),
            roundHole?.fits(squarePegAdapter)
        );
    }
)();