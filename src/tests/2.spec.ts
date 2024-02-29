import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { manufacture } from '../in/2.ts'

Deno.test("Test #01", () => {
    assertInstanceOf(manufacture, Function);
})

Deno.test('Test #02', () => {
    assertEquals(manufacture(['tren', 'oso', 'pelota'], 'tronesa'), ['tren', 'oso'])
})

Deno.test('Test #03', () => {
    assertEquals(manufacture(['coche', 'muñeca', 'balon'], 'ocmuñalb'), [])
})

Deno.test('Test #04', () => {
    assertEquals(manufacture(['patineta', 'robot', 'libro'], 'nopor'), [])
})

Deno.test('Test #05', () => {
    assertEquals(manufacture([], 'letras'), [])
})
