import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { organizeGifts } from '../in/8.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(organizeGifts, Function);
})

// Test: organizeGifts("76a11b")
// Expected: "[a]{a}{a}(aaaaaa){b}(b)"
Deno.test('Test #02', () => {
    assertEquals(organizeGifts('76a11b'), '[a]{a}{a}(aaaaaa){b}(b)')
})

//   Test: organizeGifts("20a")
// Expected:
// "{a}{a}"
Deno.test('Test #03', () => {
    assertEquals(organizeGifts('20a'), '{a}{a}')
})

// Test: organizeGifts("70b120a4c")

// Expected:
// "[b]{b}{b}[a][a]{a}{a}(cccc)"
Deno.test('Test #04', () => {
    assertEquals(organizeGifts('70b120a4c'), '[b]{b}{b}[a][a]{a}{a}(cccc)')
})

// Test: organizeGifts("9c")

// Expected:
// "(ccccccccc)"
Deno.test('Test #05', () => {
    assertEquals(organizeGifts('9c'), '(ccccccccc)')
})

// Test: organizeGifts("19d51e")

// Expected:
// "{d}(ddddddddd)[e](e)"
Deno.test('Test #06', () => {
    assertEquals(organizeGifts('19d51e'), '{d}(ddddddddd)[e](e)')
})
