import { Product } from "./Product";

export interface Factory {

    createProduct(): Product;

}