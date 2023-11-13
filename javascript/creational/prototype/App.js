const Client = require("./Client");

(
    () => {
        const client = new Client();
        client.createClone();
        console.log(client.printClones());
    }
);