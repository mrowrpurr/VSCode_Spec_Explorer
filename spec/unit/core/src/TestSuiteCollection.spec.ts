import { expect } from "chai";
import { TestSuite, TestSuiteCollection } from "@spec-explorer/core";

describe("TestSuiteCollection", () => {
    let collection: TestSuiteCollection;

    beforeEach(() => {
        collection = new TestSuiteCollection();
    });

    it("can add test suites", () => {
        expect(collection.count()).to.equal(0);
        collection.addSuite("Foo", new TestSuite());
        expect(collection.count()).to.equal(1);
    });

    it("can get a test suite by name", () => {
        const suite = new TestSuite();
        collection.addSuite("Foo", suite);
        expect(collection.getSuite("Foo")).to.equal(suite);
    });

    it("can check if a test suite exists by name", () => {
        expect(collection.hasSuite("Foo")).to.be.false;
        collection.addSuite("Foo", new TestSuite());
        expect(collection.hasSuite("Foo")).to.be.true;
    });
});
