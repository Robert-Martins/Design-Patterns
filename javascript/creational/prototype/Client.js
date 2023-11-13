const Robot = require("./Robot");

class Client {

    clones;

    constructor() {
        this.clones = [];
        this.clones.push(new Robot(1, "Robert"));
    }

    createClone = () => {
        this.clones.push(this.clones.at(0).clone());
    }

    printClones = () => {
        this.clones.forEach(clone => clone.toString());
    }

}

module.exports = Client;