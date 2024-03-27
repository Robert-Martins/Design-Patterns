import { ConcretePrototype } from "./ConcretePrototype"

(
    () => {
        const source: ConcretePrototype = new ConcretePrototype(1, "Robert");
        console.log(source.toString(), source.clone().toString());
    }
)();