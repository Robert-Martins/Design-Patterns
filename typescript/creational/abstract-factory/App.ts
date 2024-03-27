import { Atom } from "./Atom";
import { ElementFactory } from "./ElementFactory";

(() => 
    console.log(
        ElementFactory.createElement(
            new Atom('H'),
            new Atom('H'),
            new Atom('O')
        ).toString()
    )
)();