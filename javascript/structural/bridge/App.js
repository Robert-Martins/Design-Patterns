const AdvancedRemote = require("./AdvancedRemote");
const Radio = require("./Radio");
const Remote = require("./Remote");
const Tv = require("./Tv");

(() => {
    const tv = new Tv();
    const radio = new Radio();
    
    const remote = new Remote(tv);
    const advancedRemote = new AdvancedRemote(radio);

    remote?.togglePower();
    remote?.volumeUp();
    advancedRemote?.volumeUp();
    advancedRemote?.mute();
    
    console.log(tv, radio);
})();