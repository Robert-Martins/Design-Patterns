import { PoolableObject } from "./PoolableObject";

export class ObjectPool<T extends PoolableObject> {

    private objs: T[] = [];

    constructor(...objs: T[]) {
        this.objs.push(...objs);
    }

    public pool = (obj: T): void => {
        this.objs.push(obj);
    }

    public borrow = (): T | undefined => {
        const obj = this.objs.find(pooled => !pooled.isInUse());
        if(obj)
            obj.use();
        return obj;
    }

    public release = (obj: T | undefined): void => {
        obj?.release();
    }

    public static build<X extends PoolableObject>(...objs: X[]): ObjectPool<X> {
        return new ObjectPool(...objs);
    }

}