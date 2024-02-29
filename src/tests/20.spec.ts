import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { distributeGifts } from '../in/20.ts'

const { test } = Deno

test('Test #01', () => {
    assertInstanceOf(distributeGifts, Function)
})

test('Test #02', () => {
    const received = distributeGifts([
        [4, 5, 1],
        [6, null, 3],
        [8, null, 4]
    ])
    const expected = [
        [
            5,
            3,
            3
        ],
        [
            6,
            5,
            3
        ],
        [
            7,
            6,
            4
        ]
    ]
    assertEquals(received, expected)
})

test('Test #03', () => {
    const received = distributeGifts([
        [2, null],
        [null, 3]
    ])
    const expected = [
        [
            2,
            3
        ],
        [
            3,
            3
        ]
    ]
    assertEquals(received, expected)
})

test('Test #04', () => {
    const received = distributeGifts([
        [2, 1, 1],
        [3, 4, null]
    ])
    const expected = [
        [
            2,
            2,
            1
        ],
        [
            3,
            3,
            3
        ]
    ]
    assertEquals(received, expected)
})

test('Test #05', () => {
    const received = distributeGifts([
        [null, 5],
        [3, null]
    ])
    const expected = [
        [
            4,
            5
        ],
        [
            3,
            4
        ]
    ]
    assertEquals(received, expected)
})

test('Test #06', () => {
    const received = distributeGifts([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
    const expected = [
        [
            2,
            3,
            4
        ],
        [
            4,
            5,
            6
        ],
        [
            6,
            7,
            8
        ]
    ]
    assertEquals(received, expected)
})

test('Test #07', () => {
    const received = distributeGifts([
        [null, 1, null, 1, null],
        [1, null, 1, null, 1]
    ])
    const expected = [
        [
            1,
            1,
            1,
            1,
            1
        ],
        [
            1,
            1,
            1,
            1,
            1
        ]
    ]
    assertEquals(received, expected)
})
