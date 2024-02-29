import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { findFirstRepeated } from '../in/1.ts'

Deno.test("Test #01", () => {
    assertInstanceOf(findFirstRepeated, Function);
})

Deno.test("Test #02", () => {
    assertEquals(findFirstRepeated([2, 1, 3, 5, 3, 2]), 3);
})

Deno.test("Test #03", () => {
    assertEquals(findFirstRepeated([2, 2]), 2);
})

Deno.test("Test #04", () => {
    assertEquals(findFirstRepeated([2, 4, 3, 5, 1]), -1);
})

Deno.test("Test #05", () => {
    assertEquals(findFirstRepeated([1, 3, 4, 5, 0, 1, 3, 0, 7]), 1);
})

Deno.test("Test #06", () => {
    assertEquals(findFirstRepeated([]), -1);
})

Deno.test("Test #07", () => {
    assertEquals(findFirstRepeated([10, 20, 30]), -1);
})

Deno.test("Test #08", () => {
    assertEquals(findFirstRepeated([5, 1, 2, 3, 2, 5, 1]), 2);
})

Deno.test("Test #09", () => {
    assertEquals(findFirstRepeated([1, 10, 2, 10, 20, 50, 7, 0, 0, 7]), 10);
})
