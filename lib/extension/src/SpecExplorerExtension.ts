import * as vscode from "vscode";
import { SpecExplorerController } from "./SpecExplorerController";

export class SpecExplorerExtension {
    controller = new SpecExplorerController();

    constructor() {
        // show a message!
        vscode.window.showInformationMessage("Spec Explorer Extension Activated!");
    }
}
