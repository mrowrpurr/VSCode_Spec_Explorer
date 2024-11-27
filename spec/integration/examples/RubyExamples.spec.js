"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const specHelpers_1 = require("../specHelpers");
suite("Ruby Examples", () => {
    test("Two Tests", async () => {
        await (0, specHelpers_1.gotoExample)("Ruby", "Two Tests");
        (0, specHelpers_1.expect)((0, specHelpers_1.extensionIsActive)()).to.be.true;
    });
});
//# sourceMappingURL=RubyExamples.spec.js.map