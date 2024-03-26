class Device {

    isOn = false;
    volume = 0;
    channel = 0;

    isEnabled = () => {
        return this.isOn;
    }

    isDisabled = () => {
        return !this.isOn;
    }

    turnOn = () => {
        this.isOn = true;
    }

    turnOff = () => {
        this.isOn = false;
    }

}

module.exports = Device;