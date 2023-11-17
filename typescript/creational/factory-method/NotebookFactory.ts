import { Factory } from "./Factory";
import { Notebook } from "./Notebook";
import { Product } from "./Product";

export class NotebookFactory implements Factory {

    public createProduct(): Product {
        return new Notebook();
    }

}