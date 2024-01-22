import { SpecSuiteCollection } from "./SpecSuiteCollection";
import { SpecSuite } from "./SpecSuite";

export class SpecSuitesConfig {
    readonly suites = new SpecSuiteCollection();

    loadAny(x: any) {
        if (x.suites) {
            for (const suiteName in x.suites) {
                this.suites.addSuite(new SpecSuite(suiteName));
            }
        }
    }
}
