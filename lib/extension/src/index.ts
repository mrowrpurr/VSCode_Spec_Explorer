import * as vscode from "vscode";
import { SpecExplorerExtension } from "./SpecExplorerExtension";

export { SpecExplorerExtension };

let extension: SpecExplorerExtension | undefined;

export function activate() {
    if (!extension) extension = new SpecExplorerExtension();
    return extension;
}

export function deactivate() {}
