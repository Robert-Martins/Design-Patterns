import { Product } from "./Product";

export class Keyboard implements Product {

    public deliverProduct(): string {
        return 'Deliver Keyboard';
    }

}