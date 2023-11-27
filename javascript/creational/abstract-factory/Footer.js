module.exports = () => {

    let footer = {};

    footer['light'] = class LightModeFooter {

        append() {
            return 'Light Mode Footer';
        }

    }

    footer['dark'] = class DarkModeFooter {

        append() {
            return 'Dark Mode Footer';
        }

    }

    return footer;

}