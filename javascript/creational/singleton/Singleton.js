class Singleton {

    static singleton;

    static getInstance() {
        this.singleton = singleton !== null ? this.singleton : new Singleton();
        return this.singleton;
    }

}

module.exports = Singleton;