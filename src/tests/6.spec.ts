import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { maxDistance } from '../in/6.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(maxDistance, Function);
})

Deno.test('Test #02', () => {
    assertEquals(maxDistance('>>*<'), 2)
})

Deno.test('Test #03', () => {
    assertEquals(maxDistance('<<<<<'), 5)
})

Deno.test('Test #04', () => {
    assertEquals(maxDistance('>***>'), 5)
})

Deno.test('Test #05', () => {
    assertEquals(maxDistance('**********'), 10)
})

Deno.test('Test #06', () => {
    assertEquals(maxDistance('<<**>>'), 2)
})
