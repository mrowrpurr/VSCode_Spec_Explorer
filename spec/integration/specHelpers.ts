import * as vscode from "vscode";
import { expect } from "chai";
import * as path from "path";
import { SpecExplorerExtension } from "@spec-explorer/extension";

export { expect };

export const EXTENSION_ID = "undefined_publisher.@spec-explorer/app";

export function getRawExtension() {
    const extension = vscode.extensions.getExtension(EXTENSION_ID);
    expect(extension).to.not.be.undefined;
    return extension!;
}

export function extensionIsActive() {
    return getRawExtension().isActive;
}

export function getExtension() {
    const extension = getRawExtension();
    expect(extension.isActive).to.be.true;
    return extension.exports as SpecExplorerExtension;
}

export async function gotoFolder(folderPath: string) {
    // This is an option, but it's less realistic then using vscode.openFolder
    // (which opens a whole new VS Code instance)
    //
    // const openWorkspaceCount = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders.length : 0;
    // vscode.workspace.updateWorkspaceFolders(0, openWorkspaceCount, { uri: vscode.Uri.file(folderPath) });

    function folderHasBeenOpened(folderPath: string) {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders) return false;
        const firstWorkspaceFolder = workspaceFolders[0];
        if (!firstWorkspaceFolder) return false;
        return firstWorkspaceFolder.uri.fsPath === folderPath;
    }

    await vscode.commands.executeCommand("vscode.openFolder", vscode.Uri.file(folderPath));

    while (!folderHasBeenOpened(folderPath)) {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
}

export async function gotoExample(...examplePathParts: string[]) {
    const runningNodeFolder = process.cwd();

    const relativePathToExample = `../../../../examples/${examplePathParts.join("/")}`;
    const absolutePathToExample = path.join(runningNodeFolder, relativePathToExample);

    await gotoFolder(absolutePathToExample);
}
