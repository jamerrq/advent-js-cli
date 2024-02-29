import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { revealSabotage } from '../in/19.ts'

const { test } = Deno

test('Test #01', () => {
    assertInstanceOf(revealSabotage, Function)
})

test('Test #02', () => {
    const received = revealSabotage([
        ['*', ' ', ' ', ' '],
        [' ', ' ', '*', ' '],
        [' ', ' ', ' ', ' '],
        ['*', ' ', ' ', ' ']
    ])
    const expected = [
        [
            '*',
            '2',
            '1',
            '1'
        ],
        [
            '1',
            '2',
            '*',
            '1'
        ],
        [
            '1',
            '2',
            '1',
            '1'
        ],
        [
            '*',
            '1',
            ' ',
            ' '
        ]
    ]
    assertEquals(received, expected)
})

test('Test #03', () => {
    const received = revealSabotage([
        [' ', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', ' ']
    ])
    const expected = [
        [
            '1',
            '1',
            '1'
        ],
        [
            '1',
            '*',
            '1'
        ],
        [
            '1',
            '1',
            '1'
        ]
    ]
    assertEquals(received, expected)
})

test('Test #04', () => {
    const received = revealSabotage([
        ['*', ' ', ' '],
        [' ', '*', ' '],
        [' ', ' ', '*']
    ])
    const expected = [
        [
            '*',
            '2',
            '1'
        ],
        [
            '2',
            '*',
            '2'
        ],
        [
            '1',
            '2',
            '*'
        ]
    ]
    assertEquals(received, expected)
})

test('Test #05', () => {
    const received = revealSabotage([
        ['*', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ])
    const expected = [
        [
            '*',
            '1',
            ' '
        ],
        [
            '1',
            '1',
            ' '
        ],
        [
            ' ',
            ' ',
            ' '
        ]
    ]
    assertEquals(received, expected)
})

test('Test #06', () => {
    const received = revealSabotage([
        ['*', '*', '*'],
        ['*', ' ', '*'],
        ['*', '*', '*']
    ])
    const expected = [
        [
            '*',
            '*',
            '*'
        ],
        [
            '*',
            '8',
            '*'
        ],
        [
            '*',
            '*',
            '*'
        ]
    ]
    assertEquals(received, expected)
})

test('Test #07', () => {
    const received = revealSabotage([
        ['*', ' ', '*']
    ])
    const expected = [
        [
            '*',
            '2',
            '*'
        ]
    ]
    assertEquals(received, expected)
})

test('Test #08', () => {
    const received = revealSabotage([
        ['*', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', '*']
    ])
    const expected = [
        [
            '*',
            '1',
            ' '
        ],
        [
            '1',
            '2',
            '1'
        ],
        [
            ' ',
            '1',
            '*'
        ]
    ]
    assertEquals(received, expected)
})

test('Test #09', () => {
    const received = revealSabotage([
        ['*', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', '*', ' ', ' '],
        [' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', '*']
    ])
    const expected = [
        [
            '*',
            '1',
            ' ',
            ' ',
            ' '
        ],
        [
            '1',
            '2',
            '1',
            '1',
            ' '
        ],
        [
            ' ',
            '1',
            '*',
            '1',
            ' '
        ],
        [
            ' ',
            '1',
            '1',
            '2',
            '1'
        ],
        [
            ' ',
            ' ',
            ' ',
            '1',
            '*'
        ]
    ]
    assertEquals(received, expected)
})
