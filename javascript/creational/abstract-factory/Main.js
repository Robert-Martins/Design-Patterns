module.exports = () => {

    let main = {};

    main['light'] = class LightModeMain {

        append() {
            return 'Light Mode Main';
        }

    }

    main['dark'] = class DarkModeMain {

        append() {
            return 'Dark Mode Main';
        }

    }

    return main;

}