class UserOptionsPool {

    static dataMap;
    
    static retrieveData = () => {
        this.dataMap = new Map();
        this.dataMap.set("token", "ejWkkle333k42n");
        this.dataMap.set("mode", "dark");
    }

    static startPool = () => {
        return this.retrieveData();
    }

    static get = (key) => {
        return this.dataMap.get(key);
    }

}

module.exports = UserOptionsPool;