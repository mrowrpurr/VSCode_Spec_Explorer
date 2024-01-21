import * as vscode from "vscode";
import { SpecExplorerExtension } from "./SpecExplorerExtension";

export { SpecExplorerExtension };

const extension = new SpecExplorerExtension();

export function activate(context: vscode.ExtensionContext) {
    extension.activate(context);
}

export function deactivate() {
    extension.deactivate();
}
