import { TestSuite } from "./TestSuite";
import { TestSuiteCollection } from "./TestSuiteCollection";

export function CreateTestSuiteCollection(input: any): TestSuiteCollection | undefined {
    if (input === undefined) return undefined;
    // if (input === null) return undefined;
    if (input instanceof String) return undefined;
    if (input instanceof Object) {
        if (!input.hasOwnProperty("suites")) return undefined;
        const suitesInput = input.suites;

        const collection = new TestSuiteCollection();

        if (suitesInput instanceof Array) {
            ///
            // TODO
        } else if (suitesInput instanceof Object) {
            const suiteNames = Object.keys(suitesInput);
            for (const suiteName of suiteNames) {
                collection.addSuite(suiteName, new TestSuite());
            }
        }

        return collection;
    }
    return undefined;
}
