export class JSON {

    private jsonData: string;

    constructor(
        jsonData: string
    ) {
        this.jsonData = jsonData;
    }

    public getJsonData(): string {
        return this.jsonData;
    }

}