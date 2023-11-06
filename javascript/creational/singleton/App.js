const Singleton = require("./Singleton");

(() => console.log(Singleton.getSingleton(), Singleton.getSingleton()))();