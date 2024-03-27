import { Authentication } from "./Authentication";
import { ExternalAuthentication } from "./ExternalAuthentication";
import { ExternalUser } from "./ExternalUser";
import { User } from "./User";

(() => {

    const users: User[] = [];

    const authentication: Authentication = new Authentication();
    const externalAuthentication: ExternalAuthentication = new ExternalAuthentication();

    const addUser = (user: User): void => {
        users.push(user);
    }

    const user: User = new User("Robert", "123456");
    const externalUser: ExternalUser = new ExternalUser("Martins", "123456");

    addUser(user);
    addUser(externalUser);

    console.log(
        authentication.authenticate(user, users),
        authentication.authenticate(externalUser, users),
        externalAuthentication.externalAuthentication(externalUser, users)
    );

})();