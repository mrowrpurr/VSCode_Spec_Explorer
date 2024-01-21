import { getExtension, gotoExample } from "./specHelpers";

suite("One Simple Spec", () => {
    test("Ruby", (done) => {
        gotoExample(["one-spec", "ruby"]);
        const extension = getExtension();
    });
});
