import { KeyboardFactory } from "./KeyboardFactory";
import { NotebookFactory } from "./NotebookFactory";

(() => {
    console.log(
        new NotebookFactory().createProduct().deliverProduct(),
        new KeyboardFactory().createProduct().deliverProduct()
    );
})