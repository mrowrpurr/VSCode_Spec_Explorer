import { gotoExample, expect, getExtension, extensionIsActive } from "../specHelpers";

suite("Ruby Examples", () => {
    test("Two Tests", async () => {
        await gotoExample("Ruby", "Two Tests");
        expect(extensionIsActive()).to.be.true;
    });
});
