import { IntegrationAdapter } from "./IntegrationAdapter";
import { IntegrationService } from "./IntegrationService";
import { JSON } from "./JSON";

(
    () => {
        const service: IntegrationService = new IntegrationService();
        const json: JSON = new JSON('{"data":"data"}');
        service.send(IntegrationAdapter.convertJsonToXml(json));
        console.log(
            IntegrationAdapter.convertXmlToJson(
                service.get()
            )
        );
    }
)();