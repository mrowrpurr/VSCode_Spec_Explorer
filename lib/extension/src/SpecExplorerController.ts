import * as vscode from "vscode";

const TEST_CONTROLLER_ID = "spec-explorer";
const TEST_CONTROLLER_LABEL = "Spec Explorer";

export class SpecExplorerController {
    private _testController: vscode.TestController;

    constructor() {
        this._testController = vscode.tests.createTestController(TEST_CONTROLLER_ID, TEST_CONTROLLER_LABEL);
        this._testController.refreshHandler = (token: vscode.CancellationToken | undefined) => this.refresh(token);
        this._testController.resolveHandler = this.resolveChildren.bind(this);
    }

    refresh(token: vscode.CancellationToken | undefined = undefined) {
        this._testController.items.replace([this._testController.createTestItem("test-id", "Test Label")]);
    }

    resolveChildren(item: vscode.TestItem | undefined) {
        // if (!item) this.refresh
    }
}
