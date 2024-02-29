import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { autonomousDrive } from '../in/15.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(autonomousDrive, Function)
})

Deno.test('Test #02', () => {
    const received = autonomousDrive(['..!....'], ['R', 'L'])
    const expected = [
        '..!....'
    ]
    assertEquals(received, expected)
})

Deno.test('Test #03', () => {
    const received = autonomousDrive(['!..', '***'], ['U', 'L'])
    const expected = [
        '!..',
        '***'
    ]
    assertEquals(received, expected)
})

Deno.test('Test #04', () => {
    const received = autonomousDrive([
        '..!....',
        '......*'
    ], ['R', 'D', 'L'])
    const expected = [
        '.......',
        '..!...*'
    ]
    assertEquals(received, expected)
})

Deno.test('Test #05', () => {
    const received = autonomousDrive([
        '*..!..*',
        '*.....*'
    ], ['R', 'R', 'R', 'D', 'D'])
    const expected = [
        '*.....*',
        '*....!*'
    ]
    assertEquals(received, expected)
})

Deno.test('Test #06', () => {
    const received = autonomousDrive(['***', '.!.', '***'], ['D', 'U', 'R', 'R', 'R'])
    const expected = [
        '***',
        '..!',
        '***'
    ]
    assertEquals(received, expected)
})

Deno.test('Test #07', () => {
    const received = autonomousDrive(['***', '*!*', '***'], ['D', 'U', 'R', 'L'])
    const expected = [
        '***',
        '*!*',
        '***'
    ]
    assertEquals(received, expected)
})

Deno.test('Test #08', () => {
    const received = autonomousDrive([
        '.**.*.*.',
        '.***....',
        '..!.....'
    ], ['D', 'U', 'R', 'R', 'R'])
    const expected = [
        '.**.*.*.',
        '.***....',
        '.....!..'
    ]
    assertEquals(received, expected)
})
