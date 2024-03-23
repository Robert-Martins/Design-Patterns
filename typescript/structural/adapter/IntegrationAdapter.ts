import { XML } from "./XML";
import { JSON } from "./JSON";

export class IntegrationAdapter {

    public static convertJsonToXml(json: JSON): XML {
        return new XML(json?.getJsonData());
    }

    public static convertXmlToJson(xml: XML): JSON {
        return new JSON(xml?.getXmlData());
    }

}