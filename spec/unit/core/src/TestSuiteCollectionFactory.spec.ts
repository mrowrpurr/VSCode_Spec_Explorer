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
            // expect suites count to be 2 and then check their names...
            expect(collection!.suites.length).to.equal(2);
        });
    });

    describe("array of suite", () => {});

    describe("top-level suite", () => {});
});
