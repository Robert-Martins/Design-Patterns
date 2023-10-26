import { PersonBuilder } from "./PersonBuilder";

export class Person {

    public name: string;
    public email: string;
    public age: number;
    public isNaturalPerson: boolean;
    
    constructor(
        name: string,
        email: string,
        age: number,
        isNaturalPerson: boolean,
        personAction?: () => void
    ) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.isNaturalPerson = isNaturalPerson;
        this.personAction = personAction ? personAction : this.personAction;
    }

    public personAction = (): void => {
        console.log(`Person Default Action`);
    }

    public static builder(): PersonBuilder {
        return new PersonBuilder;
    }

}