import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
    console.log("Hiiiii!");

    let disposable = vscode.commands.registerCommand("spec-explorer.helloWorld", () => {
        vscode.window.showInformationMessage(`Hello!`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
