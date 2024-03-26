import { User } from "./User";

export class ExternalUser extends User {

    private apiKey: string;

    constructor(
        login: string = '',
        password: string = '',
        apiKey: string = ''
    ) {
        super(login, password);
        this.apiKey = apiKey;
    }

    public getApiKey = (): string => {
        return this.apiKey;
    }

    public setApiKey = (apiKey: string): void => {
        this.apiKey = apiKey;
    }

    public hasApiKey = (): boolean => {
        return this.apiKey != null;
    }

}