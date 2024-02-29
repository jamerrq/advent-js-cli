import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { compile } from '../in/22.ts'

const { test } = Deno

test('Test #01', () => {
    assertInstanceOf(compile, Function)
})

test('Test #02', () => {
    const received = compile('++*-')
    const expected = 3
    assertEquals(received, expected)
})

test('Test #03', () => {
    const received = compile('++¿+?')
    const expected = 3
    assertEquals(received, expected)
})

test('Test #04', () => {
    const received = compile('-+¿+?')
    const expected = 0
    assertEquals(received, expected)
})

test('Test #05', () => {
    const received = compile('++*¿-?')
    const expected = 3
    assertEquals(received, expected)
})

test('Test #06', () => {
    const received = compile('++%++<')
    const expected = 6
    assertEquals(received, expected)
})

test('Test #07', () => {
    const received = compile('++%++<++¿*?')
    const expected = 16
    assertEquals(received, expected)
})

test('Test #08', () => {
    const received = compile('++¿+?¿+?¿+?')
    const expected = 5
    assertEquals(received, expected)
})

test('Test #09', () => {
    const received = compile('--¿+++?')
    const expected = -2
    assertEquals(received, expected)
})

test('Test #10', () => {
    const received = compile('--¿+++?+++¿--?')
    const expected = -1
    assertEquals(received, expected)
})

test('Test #11', () => {
    const received = compile('<%+¿++%++<?')
    const expected = 7
    assertEquals(received, expected)
})

test('Test #12', () => {
    const received = compile('<<<<<<+<<<<<+%')
    const expected = 2
    assertEquals(received, expected)
})
