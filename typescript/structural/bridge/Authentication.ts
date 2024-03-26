import { User } from "./User";

export class Authentication {

    public authenticate = (user: User, users: User[]): boolean | undefined => {
        return users
                    ?.find(u => u?.getLogin() === user?.getLogin())
                    ?.passwordMatches(user?.getPassword());
    }

}