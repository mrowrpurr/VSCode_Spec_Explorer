import * as vscode from "vscode";
import { expect } from "chai";
export { expect };
export declare const EXTENSION_ID = "undefined_publisher.@spec-explorer/app";
export declare function getRawExtension(): vscode.Extension<any>;
export declare function extensionIsActive(): boolean;
export declare function getExtension(): SpecExplorerExtension;
export declare function gotoFolder(folderPath: string): Promise<void>;
export declare function gotoExample(...examplePathParts: string[]): Promise<void>;
//# sourceMappingURL=specHelpers.d.ts.map