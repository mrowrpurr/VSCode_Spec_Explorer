import * as vscode from "vscode";
import { SpecController } from "./SpecController";

export class SpecExplorerExtension {
    controller: SpecController | undefined;

    activate(context: vscode.ExtensionContext) {
        this.controller = new SpecController();
        // show info message that we were activated:
        vscode.window.showInformationMessage("ACTIVATED!");
    }

    deactivate() {}

    sayHello(text: string) {
        vscode.window.showInformationMessage(`!!! HELLO! ${text}`);
    }
}
