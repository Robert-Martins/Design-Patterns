const Remote = require("./Remote");

class AdvancedRemote extends Remote {

    mute = () => {
        this.device?.volume = 0;
    }

}

module.exports = AdvancedRemote;