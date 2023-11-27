const Header = require("./Header");

module.exports = (mode) => {

    let ui = [];

    ui.push(new Header[mode]().append());
    ui.push(new Main[mode]().append());
    ui.push(new Footer[mode]().append());

    return ui.join("\n");
    
}