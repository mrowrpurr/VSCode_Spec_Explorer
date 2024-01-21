import * as vscode from "vscode";
import { expect } from "chai";
import * as extension from "./extension";

suite("Extension Test Suite", () => {
    test("Sample test", (done) => {
        // Do something in 4 seconds:
        setTimeout(() => {
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
                            vscode.window.showInformationMessage(`IsActive? ${ext.isActive}`);
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
