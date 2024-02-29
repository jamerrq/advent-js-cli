import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { getIndexsForPalindrome } from '../in/11.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(getIndexsForPalindrome, Function)
})

// Test: getIndexsForPalindrome('anna')
Deno.test('Test #02', () => {
    assertEquals(getIndexsForPalindrome('anna'), [])
})

// Test: getIndexsForPalindrome('abab')
Deno.test('Test #03', () => {
    assertEquals(getIndexsForPalindrome('abab'), [0, 1])
})

// Test: getIndexsForPalindrome('abac')
Deno.test('Test #04', () => {
    assertEquals(getIndexsForPalindrome('abac'), null)
})

// Test: getIndexsForPalindrome('aaaaaaaa')
Deno.test('Test #05', () => {
    assertEquals(getIndexsForPalindrome('aaaaaaaa'), [])
})

// Test: getIndexsForPalindrome('aaababa')
Deno.test('Test #06', () => {
    assertEquals(getIndexsForPalindrome('aaababa'), [1, 3])
})

// Test: getIndexsForPalindrome('caababa')
Deno.test('Test #07', () => {
    assertEquals(getIndexsForPalindrome('caababa'), null)
})

// Test: getIndexsForPalindrome('rotavator')
Deno.test('Test #08', () => {
    assertEquals(getIndexsForPalindrome('rotavator'), [])
})

// Test: getIndexsForPalindrome('rotaratov')
Deno.test('Test #09', () => {
    assertEquals(getIndexsForPalindrome('rotaratov'), [4, 8])
})

// Test: getIndexsForPalindrome('saippuakivikauppias')
Deno.test('Test #10', () => {
    assertEquals(getIndexsForPalindrome('saippuakivikauppias'), [])
})
