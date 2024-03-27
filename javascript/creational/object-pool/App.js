const UserOptionsPool = require("./UserOptionsPool");

(() => {
    UserOptionsPool.startPool();
    console.log(UserOptionsPool.get("token"));
})();