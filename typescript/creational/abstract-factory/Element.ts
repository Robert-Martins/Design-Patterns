import { Atom } from "./Atom";

export class Element {

    private atoms: Atom[];

    constructor(atoms: Atom[]) {
        this.atoms = atoms;
    }

    public toString = (): string => {
        return this.atoms.join("");
    }

}