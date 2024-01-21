import { TestSuite } from "./TestSuite";

export class TestSuiteCollection {
    private readonly _suites: Map<string, TestSuite> = new Map<string, TestSuite>();

    addSuite(name: string, suite: TestSuite): void {
        // TODO: throw if already exists
        this._suites.set(name, suite);
    }

    getSuites(): IterableIterator<TestSuite> {
        return this._suites.values();
    }

    count(): number {
        return this._suites.size;
    }
}
