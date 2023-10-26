import { Person } from "./Person";

export class PersonBuilder {

    private name: string;
    private email: string;
    private age: number;
    private isNaturalPerson: boolean;
    private personAction: () => void;

    constructor() {}

    public withName(name: string): this {
        this.name = name;
        return this;
    }

    public withEmail(email: string): this {
        this.email = email;
        return this;
    }

    public withAge(age: number): this {
        this.age = age;
        return this;
    }

    public withIsNaturalPerson(isNaturalPerson: boolean): this {
        this.isNaturalPerson = isNaturalPerson;
        return this;
    }

    public withPersonAction(personAction: () => void): this {
        this.personAction = personAction;
        return this;
    }

    public build(): Person {
        return new Person(
            this.name, 
            this.email, 
            this.age, 
            this.isNaturalPerson, 
            this.personAction);
    }

}