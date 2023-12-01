export class PoolableObject {

    private id: number;
    private inUse: boolean;

    constructor(id: number) {
        this.id = id;
        this.inUse = false;
    }

    public use = (): void => {
        this.inUse = true;
    }

    public release = (): void => {
        this.inUse = false;
    }

    public isInUse = (): boolean => {
        return this.inUse;
    }

    public perform = (): string => {
        return `Running task ${this.id}...`;
    }

}