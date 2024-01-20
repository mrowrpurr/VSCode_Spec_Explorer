import * as vscode from "vscode";
import { SpecExplorerExtension } from "./SpecExplorerExtension";

export const extension = new SpecExplorerExtension();

export function activate(context: vscode.ExtensionContext) {
    extension.activate(context);
    return extension;
}

export function deactivate() {
    extension.deactivate();
}
