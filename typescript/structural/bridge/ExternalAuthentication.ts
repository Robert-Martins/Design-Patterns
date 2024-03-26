import { Authentication } from "./Authentication";
import { ExternalUser } from "./ExternalUser";
import { User } from "./User";

export class ExternalAuthentication extends Authentication {

    public externalAuthentication = (user: ExternalUser, users: User[]): boolean | undefined => {
        return this.authenticate(user, users) && user.hasApiKey();
    }

}