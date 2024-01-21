import { describe } from "mocha";
import { expect } from "chai";
import { version } from "@spec-explorer/core";

describe("Something?", () => {
    it("should work?", () => {
        expect(version).to.equal("1.0.1");
    });
});
