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

    getSuite(name: string): TestSuite | undefined {
        return this._suites.get(name);
    }

    hasSuite(name: string): boolean {
        return this._suites.has(name);
    }

    count(): number {
        return this._suites.size;
    }
}
