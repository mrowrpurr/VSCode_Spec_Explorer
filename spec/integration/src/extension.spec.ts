import * as vscode from "vscode";
import { expect } from "chai";
import * as extension from "./extension";

extension.extension.onActivate.push((context: vscode.ExtensionContext) => {
    vscode.window.showInformationMessage("ACTIVATE!");

    // vscode.workspace.updateWorkspaceFolders(
    //     0,
    //     vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders.length : 0,
    //     {
    //         uri: vscode.Uri.file("D:/"),
    //     }
    // );
});

extension.extension.onDeactivate.push(() => {
    vscode.window.showInformationMessage("DEACTIVATE!");
});

suite("Extension Test Suite", () => {
    test("Sample test", (done) => {
        // Do something in 4 seconds:
        setTimeout(() => {
            // vscode.workspace.onDidChangeWorkspaceFolders((event) => {
            //     // show info message:
            //     vscode.window.showInformationMessage("HELLO from TEST");

            //     expect(event.added.length).to.equal(1);
            //     expect(event.removed.length).to.equal(0);
            //     expect(event.added[0]!.uri.fsPath).to.equal("C:/Code/MrowrMisc/RunCppWithVSCode/ExampleProjects???");

            //     //

            //     setTimeout(() => {
            //         done();
            //     }, 3000);
            // });
            vscode.commands
                .executeCommand(
                    "vscode.openFolder",
                    vscode.Uri.file("C:/Code/MrowrMisc/RunCppWithVSCode/ExampleProjects")
                )
                .then(
                    () => {
                        // show info message:
                        vscode.window.showInformationMessage("OPENED OK");
                        const ext = vscode.extensions.getExtension(
                            "undefined_publisher.@spec-explorer-tests/integration"
                        );
                        if (ext) {
                            vscode.window.showInformationMessage(`EXTENSION FOUND: ${ext.id}`);
                            ext.exports.sayHello("Foooooo says the extension :)");
                        } else {
                            vscode.window.showInformationMessage("EXTENSION NOT FOUND");
                        }
                    },
                    (reason) => {
                        // show info message:
                        vscode.window.showInformationMessage(`FAILED: ${reason}`);
                    }
                );
        }, 3000);
    });
});
