import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { travelDistance } from '../in/25.ts'

const { test } = Deno

test('Test #01', () => {
    assertInstanceOf(travelDistance, Function)
})

test('Test #02', () => {
    const received = travelDistance(
        `.....1....
..S.......
..........
....3.....
......2...`)
    const expected = 12
    assertEquals(received, expected)
})

test('Test #03', () => {
    const received = travelDistance('..S.1...')
    const expected = 2
    assertEquals(received, expected)
})

test('Test #04', () => {
    const received = travelDistance(
        `.....2....
..S.......
..........
....1.....
......3...`
    )
    const expected = 13
    assertEquals(received, expected)
})

test('Test #05', () => {
    const received = travelDistance(
        `3....1....
..S.......
.........2
..........
......4...`
    )
    const expected = 31
    assertEquals(received, expected)
})

test('Test #06', () => {
    const received = travelDistance('S1')
    const expected = 1
    assertEquals(received, expected)
})

test('Test #07', () => {
    const received = travelDistance('1....S')
    const expected = 5
    assertEquals(received, expected)
})

test('Test #08', () => {
    const received = travelDistance('S12....3')
    const expected = 7
    assertEquals(received, expected)
})
