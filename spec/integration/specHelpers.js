"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gotoExample = exports.gotoFolder = exports.getExtension = exports.extensionIsActive = exports.getRawExtension = exports.EXTENSION_ID = exports.expect = void 0;
const vscode = __importStar(require("vscode"));
const chai_1 = require("chai");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return chai_1.expect; } });
const path = __importStar(require("path"));
exports.EXTENSION_ID = "undefined_publisher.@spec-explorer/app";
function getRawExtension() {
    const extension = vscode.extensions.getExtension(exports.EXTENSION_ID);
    (0, chai_1.expect)(extension).to.not.be.undefined;
    return extension;
}
exports.getRawExtension = getRawExtension;
function extensionIsActive() {
    return getRawExtension().isActive;
}
exports.extensionIsActive = extensionIsActive;
function getExtension() {
    const extension = getRawExtension();
    (0, chai_1.expect)(extension.isActive).to.be.true;
    return extension.exports;
}
exports.getExtension = getExtension;
async function gotoFolder(folderPath) {
    // This is an option, but it's less realistic then using vscode.openFolder
    // (which opens a whole new VS Code instance)
    //
    // const openWorkspaceCount = vscode.workspace.workspaceFolders ? vscode.workspace.workspaceFolders.length : 0;
    // vscode.workspace.updateWorkspaceFolders(0, openWorkspaceCount, { uri: vscode.Uri.file(folderPath) });
    function folderHasBeenOpened(folderPath) {
        const workspaceFolders = vscode.workspace.workspaceFolders;
        if (!workspaceFolders)
            return false;
        const firstWorkspaceFolder = workspaceFolders[0];
        if (!firstWorkspaceFolder)
            return false;
        return firstWorkspaceFolder.uri.fsPath === folderPath;
    }
    await vscode.commands.executeCommand("vscode.openFolder", vscode.Uri.file(folderPath));
    while (!folderHasBeenOpened(folderPath)) {
        await new Promise((resolve) => setTimeout(resolve, 100));
    }
}
exports.gotoFolder = gotoFolder;
async function gotoExample(...examplePathParts) {
    const runningNodeFolder = process.cwd();
    const relativePathToExample = `../../../../examples/${examplePathParts.join("/")}`;
    const absolutePathToExample = path.join(runningNodeFolder, relativePathToExample);
    await gotoFolder(absolutePathToExample);
}
exports.gotoExample = gotoExample;
//# sourceMappingURL=specHelpers.js.map