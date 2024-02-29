import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { decode } from '../in/4.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(decode, Function);
})

Deno.test('Test #02', () => {
    assertEquals(decode('hola (odnum)'), 'hola mundo')
})

Deno.test('Test #03', () => {
    assertEquals(decode('(olleh) (dlrow)!'), 'hello world!')
})

Deno.test('Test #04', () => {
    assertEquals(decode('sa(u(cla)atn)s'), 'santaclaus')
})

Deno.test('Test #05', () => {
    assertEquals(decode('((nta)(sa))'), 'santa')
})
