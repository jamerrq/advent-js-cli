import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { optimizeIntervals } from '../in/17.ts'

const { test } = Deno

test('Test #01', () => {
    assertInstanceOf(optimizeIntervals, Function)
})

test('Test #02', () => {
    const received = optimizeIntervals([[2, 7], [3, 4], [5, 8]])
    const expected = [
        [
            2,
            8
        ]
    ]
    assertEquals(received, expected)
})

test('Test #03', () => {
    const received = optimizeIntervals([[3, 4], [5, 8], [2, 7]])
    const expected = [
        [
            2,
            8
        ]
    ]
    assertEquals(received, expected)
})

test('Test #04', () => {
    const received = optimizeIntervals([[1, 3], [2, 6], [8, 10]])
    const expected = [
        [
            1,
            6
        ],
        [
            8,
            10
        ]
    ]
    assertEquals(received, expected)
})

test('Test #05', () => {
    const received = optimizeIntervals([[1, 2], [3, 4], [5, 6]])
    const expected = [
        [
            1,
            2
        ],
        [
            3,
            4
        ],
        [
            5,
            6
        ]
    ]
    assertEquals(received, expected)
})

test('Test #06', () => {
    const received = optimizeIntervals([[5, 7], [6, 8]])
    const expected = [
        [
            5,
            8
        ]
    ]
    assertEquals(received, expected)
})

test('Test #07', () => {
    const received = optimizeIntervals([[1, 5], [6, 10], [11, 15], [16, 20]])
    const expected = [
        [
            1,
            5
        ],
        [
            6,
            10
        ],
        [
            11,
            15
        ],
        [
            16,
            20
        ]
    ]
    assertEquals(received, expected)
})

test('Test #08', () => {
    const received = optimizeIntervals([[1, 15], [8, 12], [4, 7]])
    const expected = [
        [
            1,
            15
        ]
    ]
    assertEquals(received, expected)
})
