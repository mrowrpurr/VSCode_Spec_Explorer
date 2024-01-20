import { describe } from "mocha";
import { expect } from "chai";
import { Something } from "@spec-explorer/my-lib";

describe("Something", () => {
    it("should work", () => {
        const str = new Something().getString();
        expect(str).to.equal("Something!?");

        const num = new Something().getNumber();
        expect(num).to.equal(42);
    });
});
