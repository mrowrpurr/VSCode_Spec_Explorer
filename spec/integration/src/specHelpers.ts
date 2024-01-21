import * as vscode from "vscode";
import { expect } from "chai";
import * as path from "path";

export const EXTENSION_ID = "undefined_publisher.@spec-explorer-tests/integration";

export function getExtension() {
    const extension = vscode.extensions.getExtension(EXTENSION_ID);
    expect(extension).to.not.be.undefined;
    return extension!;
}

export async function gotoFolder(folderPath: string) {
    await vscode.commands.executeCommand("vscode.openFolder", vscode.Uri.file(folderPath));
}

export async function gotoExample(exampleName: string) {
    const runningNodeFolder = process.cwd();
    const relativePathToExample = `../../examples/${exampleName}`;
    const absolutePathToExample = path.join(runningNodeFolder, relativePathToExample);

    await gotoFolder(absolutePathToExample);
}
