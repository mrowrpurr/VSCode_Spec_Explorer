import * as vscode from "vscode";

export const CONTROLLER_ID = "mrowrpurr.spec-explorer";

export class SpecController {
    private _controller: vscode.TestController;

    constructor() {
        this._controller = vscode.tests.createTestController(CONTROLLER_ID, "Spec Explorer");
        this._controller.refreshHandler = this.refresh.bind(this);
        this._controller.resolveHandler = this.resolve.bind(this);

        // show info message that we created a controller:
        vscode.window.showInformationMessage("CONTROLLER CREATED!");
    }

    refresh() {
        // Show a message:
        vscode.window.showInformationMessage("REFRESH!");
    }

    resolve(item: vscode.TestItem | undefined) {
        // show an info message with the path of the currently open workspace:
        const workspacePath = vscode.workspace.workspaceFolders![0]!.uri.fsPath;
        vscode.window.showInformationMessage(`RESOLVE: Workspace path: ${workspacePath}`);
    }
}
