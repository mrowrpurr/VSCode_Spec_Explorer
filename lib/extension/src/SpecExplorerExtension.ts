import * as vscode from "vscode";

export class SpecExplorerExtension {
    activate(context: vscode.ExtensionContext) {
        const testController = vscode.tests.createTestController("Spec Explorer", "Spec Explorer");
        testController.refreshHandler = () => {
            // SHOW A MESSAGE!
            vscode.window.showInformationMessage("Refreshed Tests!");
        };
    }

    deactivate() {}
}
