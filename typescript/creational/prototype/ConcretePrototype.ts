import { Prototype } from "./Prototype";

export class ConcretePrototype implements Prototype {

    public id?: number;
    public name?: string;

    constructor(id?: number, name?: string) {
        this.id = id;
        this.name = name;
    }

    public clone = (): ConcretePrototype => {
        const clone: ConcretePrototype = new ConcretePrototype();
        for (const key of Object.keys(this)) {
            if(this.hasOwnProperty(key)) {
                clone[key] = this[key];
            }
        }
        return clone;
    }

    public toString = (): string => {
        return `ID: ${this.id}, Name: ${this.name}`;
    } 

}