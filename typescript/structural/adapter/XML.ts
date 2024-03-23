export class XML {

    private xmlData: string;

    constructor(
        xmlData: string
    ) {
        this.xmlData = xmlData;
    }

    public getXmlData(): string {
        return this.xmlData;
    }

}