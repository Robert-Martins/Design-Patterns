module.exports = () => {

    let headers = {};

    headers['light'] = class LightModeHeader {

        append() {
            return 'Light Mode Header';
        }

    }

    headers['dark'] = class DarkModeHeader {

        append() {
            return 'Dark Mode Header';
        }
        
    }

    return headers;

}