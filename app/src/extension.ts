import * as vscode from "vscode";
import { Something } from "@spec-explorer/library";

export function activate(context: vscode.ExtensionContext) {
    // TODO: where does this print out???
    console.log('Congratulations, your extension "spec-explorer" is now active!');

    let disposable = vscode.commands.registerCommand("spec-explorer.helloWorld", () => {
        const s = new Something();
        vscode.window.showInformationMessage(`Hello: ${s.getString()}`);
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
