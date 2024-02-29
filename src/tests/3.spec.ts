import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { findNaughtyStep } from '../in/3.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(findNaughtyStep, Function);
})

Deno.test('Test #02', () => {
    assertEquals(findNaughtyStep('abcd', 'abcde'), 'e')
})

Deno.test('Test #03', () => {
    assertEquals(findNaughtyStep('abcde', 'abcd'), 'e')
})

Deno.test('Test #04', () => {
    assertEquals(findNaughtyStep('xxxx', 'xxoxx'), 'o')
})

Deno.test('Test #05', () => {
    assertEquals(findNaughtyStep('stepfor', 'stepor'), 'f')
})

Deno.test('Test #06', () => {
    assertEquals(findNaughtyStep('iiiii', 'iiiii'), '')
})
