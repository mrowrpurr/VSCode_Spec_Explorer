import { expect } from "chai";
import { SpecSuitesConfig } from "@spec-explorer/core";

describe("SpecSuitesConfig", () => {
    it("can generate a a SpecSuiteCollection", () => {
        const config = new SpecSuitesConfig();
        config.loadAny({
            suites: {
                suite1: {},
                suite2: {},
            },
        });
        const collection = config.suites;

        expect(collection).to.not.be.undefined;
        expect(collection.getSuites()).to.have.lengthOf(2);
    });
});
