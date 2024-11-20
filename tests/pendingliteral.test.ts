import { test, expect } from "bun:test";
import { pendingLiteral as tag } from "../src/@enzoaicardi/pendingliteral";

test("pending: flat promises", async () => {
    const result = await tag`success: ${Promise.resolve().then(() => true)}`;
    expect(result).toBe("success: true");
});

test("pending: derived usages", async () => {
    const array = [
        Promise.resolve().then(() => "1"),
        Promise.resolve().then(() => "2"),
        Promise.resolve().then(() => "3"),
    ];
    const result = await tag`array: ${Promise.all(array).then((resolvedArray) =>
        resolvedArray.join("")
    )}`;
    expect(result).toBe("array: 123");
});

test("pending: nested promises", async () => {
    const array = [
        Promise.resolve().then(
            () => tag`isNo${Promise.resolve().then(() => "1")}`
        ),
        Promise.resolve().then(
            () => tag`isNo${Promise.resolve().then(() => "2")}`
        ),
        Promise.resolve().then(
            () => tag`isNo${Promise.resolve().then(() => "3")}`
        ),
    ];
    const result = await tag`array: ${Promise.all(array).then((resolvedArray) =>
        resolvedArray.reduce((acc, v) => acc + v, "")
    )}`;
    expect(result).toBe("array: isNo1isNo2isNo3");
});
