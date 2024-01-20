import * as vscode from "vscode";
import { expect } from "chai";
import * as extension from "./extension";

suite("Extension Test Suite", () => {
    test("Sample test", (done) => {
        vscode.workspace.onDidChangeWorkspaceFolders(async () => {
            await new Promise((resolve) => setTimeout(resolve, 10000));

            done();
        });

        vscode.workspace.updateWorkspaceFolders(
            0,
            vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders.length : 0,
            {
                uri: vscode.Uri.file("D:/Code"),
                name: "D Code",
            }
        );
    });
});
