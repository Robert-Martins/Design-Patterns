class Remote {

    device;

    togglePower = () => {
        this.device?.isEnabled() ? this.device?.turnOff() : this.device?.turnOn();
    }

    volumeUp = () => {
        this.device?.volume++;
    }

    volumeDown = () => {
        this.device?.volume--;
    }

    channelUp = () => {
        this.device?.channel++;
    }

    channelDown = () => {
        this.device?.channel--;
    }

}

module.exports = Remote;