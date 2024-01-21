import * as vscode from "vscode";
import { gotoRubyExample, expect, getExtension, extensionIsActive } from "../specHelpers";

suite("Ruby Examples", () => {
    test("Two Tests", async (done) => {
        await gotoRubyExample("Two Tests");
        expect(extensionIsActive()).to.be.true;

        const extension = getExtension();

        await vscode.commands.executeCommand("testing.refreshTests");
    });
});
