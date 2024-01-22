import { SpecSuite } from "./SpecSuite";

export class SpecSuiteCollection {
    private readonly _suites = new Map<string, SpecSuite>();

    getSuites(): ReadonlyArray<SpecSuite> {
        return Array.from(this._suites.values());
    }

    // getSuite(name: string): SpecSuite | undefined {
    //     return this._suites.get(name);
    // }

    addSuite(suite: SpecSuite): void {
        this._suites.set(suite.name, suite);
    }
}
