import { Atom } from "./Atom";
import { Element } from "./Element";

export class ElementFactory {

    public static createElement = (...atoms: Atom[]): Element => {
        return new Element(atoms);
    } 

}