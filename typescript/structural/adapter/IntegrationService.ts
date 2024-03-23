import { XML } from "./XML";

export class IntegrationService {

    public send(xml: XML): void {
        ('xmlData' in xml) && console.log("XML Data Sended");
    }

    public get(): XML {
        return new XML("<data>data<data>");
    }

}