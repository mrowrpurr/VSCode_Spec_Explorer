import * as vscode from "vscode";

export class SpecExplorerExtension {
    activate(context: vscode.ExtensionContext) {
        console.log("Hiiiii!");

        let disposable = vscode.commands.registerCommand("spec-explorer.helloWorld", () => {
            vscode.window.showInformationMessage("HELLO from LIBRARY!");
        });

        context.subscriptions.push(disposable);
    }

    deactivate() {}
}
