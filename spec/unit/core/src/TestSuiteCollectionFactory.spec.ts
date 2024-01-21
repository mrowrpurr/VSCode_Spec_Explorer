import { expect } from "chai";
import { CreateTestSuiteCollection } from "@spec-explorer/core";

describe("TestSuiteCollectionFactory", () => {
    describe("invalid input", () => {
        it("undefined", () => {
            const collection = CreateTestSuiteCollection(undefined);
            expect(collection).to.be.undefined;
        });
        it("string", () => {
            const collection = CreateTestSuiteCollection("hello, world!");
            expect(collection).to.be.undefined;
        });
    });

    describe("suite key/value map", () => {
        it("first working example...", () => {
            const collection = CreateTestSuiteCollection({
                suites: {
                    "suite-1": {},
                    "suite-2": {},
                },
            });
            expect(collection).to.not.be.undefined;
            expect(collection!.count()).to.equal(2);
            // expect(collection!.suites[0].name).to.equal("suite-1");
            // expect(collection!.suites[1].name).to.equal("suite-2");

            // TODO ...

            // regardless of order, get a suite with the name '...'
        });
    });

    describe("array of suite", () => {});

    describe("top-level suite", () => {});
});
