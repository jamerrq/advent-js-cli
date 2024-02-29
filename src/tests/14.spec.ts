import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { maxGifts } from '../in/14.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(maxGifts, Function)
})

Deno.test('Test #02', () => {
    assertEquals(maxGifts([1, 2, 3, 1]), 4)
})

Deno.test('Test #03', () => {
    assertEquals(maxGifts([2, 7, 9, 3, 1]), 12)
})

Deno.test('Test #04', () => {
    assertEquals(maxGifts([0, 0, 0, 0, 1]), 1)
})

Deno.test('Test #05', () => {
    assertEquals(maxGifts([100]), 100)
})

Deno.test('Test #06', () => {
    assertEquals(maxGifts([1, 1, 1]), 2)
})

Deno.test('Test #07', () => {
    assertEquals(maxGifts([3, 4, 5]), 8)
})

Deno.test('Test #08', () => {
    assertEquals(maxGifts([99]), 99)
})

// These tests below are not in the original challenge, its from the channel
// discussion on Discord.
Deno.test('Test #09', () => {
    assertEquals(maxGifts([5, 1, 1, 5]), 10)
})

// https://discord.com/channels/741237973663612969/915910832259477534
Deno.test('Test #10', () => {
    assertEquals(maxGifts([4, 1, 1, 4, 2, 1]), 9)
})
