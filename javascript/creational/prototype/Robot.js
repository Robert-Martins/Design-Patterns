class Robot {

    id;
    name;

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    
    clone = (source) => {
        if(source === null || typeof source !== 'object')
            return source;
        const clone = Array.isArray(source) ? [] : {};
        for(const key of Object.keys(source)) {
            if(source.hasOwnProperty(key))
                clone[key] = source[key];
        }
        return clone;
    }

    toString = () => {
        return `ID: ${this.id}, Name: ${this.name}`;
    }

}

module.exports = Robot;