export default class Singleton {

    private static singleton: Singleton;

    private Singleton() {}

    public static getInstance(): Singleton {
        this.singleton = this.singleton !== null ? this.singleton : new Singleton();
        return this.singleton;
    }

}