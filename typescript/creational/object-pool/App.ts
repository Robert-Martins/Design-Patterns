import { ObjectPool } from "./ObjectPool"
import { PoolableObject } from "./PoolableObject"

(() => {
    const pool: ObjectPool<PoolableObject> = ObjectPool.build(
        new PoolableObject(1),
        new PoolableObject(2),
        new PoolableObject(3)
    );
    const obj1 = pool.borrow();
    obj1?.perform;
    pool.release(obj1);
})