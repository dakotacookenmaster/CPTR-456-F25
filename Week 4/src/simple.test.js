import { describe, it, expect } from "vitest";
import { add } from "./simple";

describe("simple", () => {
    describe("add()", () => {
        it("successfully adds two numbers", () => {
            // expect(add(1, 2)).toEqual(3)
            const result = add(1, 2)
            expect(result).toEqual(3)
        })

        it("successfully adds two negative numbers", () => {
            expect(add(-1, -1)).toEqual(-2);
        })

        it("handles infinity", () => {
            expect(add(1, Infinity)).toEqual("INVALID")
        })

        it("handles NaN", () => {
            expect(add(1, NaN)).toEqual("INVALID")
        })

        it("handles strings", () => {
            expect(add(1, "2")).toEqual("INVALID")
        })
    })
})