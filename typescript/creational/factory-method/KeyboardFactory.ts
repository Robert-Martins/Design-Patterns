import { Factory } from "./Factory";
import { Keyboard } from "./Keyboard";
import { Product } from "./Product";

export class KeyboardFactory implements Factory {

    public createProduct(): Product {
        return new Keyboard();
    }

}