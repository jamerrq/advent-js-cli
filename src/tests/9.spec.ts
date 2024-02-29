import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { adjustLights } from '../in/9.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(adjustLights, Function)
})

// Test: adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]) -> 1
Deno.test('Test #02', () => {
    assertEquals(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢']), 1)
})

// Test: adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]) -> 2
Deno.test('Test #03', () => {
    assertEquals(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴']), 2)
})

// Test: adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]) -> 0
Deno.test('Test #04', () => {
    assertEquals(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢']), 0)
})

// Test: adjustLights(["🔴", "🔴", "🔴"] -> 1
Deno.test('Test #05', () => {
    assertEquals(adjustLights(['🔴', '🔴', '🔴']), 1)
})
