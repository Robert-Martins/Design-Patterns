export class User {

    private login: string;
    private password: string;

    constructor(
        login: string = '',
        password: string = ''
    ) {
        this.login = login;
        this.password = password
    }

    public getLogin = (): string => {
        return this.login;
    }

    public setLogin = (login: string): void => {
        this.login = login;
    }

    public getPassword = (): string => {
        return this.password;
    }

    public setPassword = (password: string): void => {
        this.password = password;
    }
    
    public passwordMatches = (otherPassword: string): boolean => {
        return this.password === otherPassword;
    }

}