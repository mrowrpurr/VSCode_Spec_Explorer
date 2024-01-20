import * as vscode from "vscode";

export class SpecExplorerExtension {
    activate(context: vscode.ExtensionContext) {
        console.log("Hiiiii!");

        let disposable = vscode.commands.registerCommand("spec-explorer.helloWorld", () => {
            vscode.window.showInformationMessage("HELLO from LIBRARY (changed)!");
        });

        context.subscriptions.push(disposable);

        vscode.workspace.onDidChangeWorkspaceFolders(() => {
            vscode.window.showInformationMessage("Workspace folders changed!");
        });

        vscode.workspace.updateWorkspaceFolders(0, 0, {
            uri: vscode.Uri.file("C:/"),
        });
    }

    deactivate() {}
}
