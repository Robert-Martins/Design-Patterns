import { Product } from "./Product";

export class Notebook implements Product {

    public deliverProduct(): string {
        return 'Deliver Notebook';
    }

}