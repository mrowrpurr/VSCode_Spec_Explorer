import * as vscode from "vscode";

export class SpecExplorerExtension {
    onActivate: Function[] = [];
    onDeactivate: Function[] = [];

    activate(context: vscode.ExtensionContext) {
        vscode.window.showInformationMessage(`i was activated: ${context.extension.id}`);

        for (const fn of this.onActivate) fn();
        let disposable = vscode.commands.registerCommand("spec-explorer.helloWorld", () => {
            vscode.window.showInformationMessage("HELLO from LIBRARY (changed)!");
        });
        context.subscriptions.push(disposable);
    }

    deactivate() {
        for (const fn of this.onDeactivate) fn();
    }

    sayHello(text: string) {
        vscode.window.showInformationMessage(`!!! HELLO! ${text}`);
    }
}
