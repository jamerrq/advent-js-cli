import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { drawClock } from '../in/18.ts'

const { test } = Deno

test('Test #01', () => {
    assertInstanceOf(drawClock, Function)
})

test('Test #02', () => {
    const expected = [
        [
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ],
        [
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ]
    ]
    const received = drawClock('01:30')
    assertEquals(received, expected)
})
test('Test #03', () => {
    const expected = [
        [
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' '
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' '
        ],
        [
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ],
        [
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*'
        ],
        [
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*'
        ],
        [
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ]
    ]
    const received = drawClock('23:45')
    assertEquals(received, expected)
})

test('Test #04', () => {
    const expected = [
        [
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ]
    ]
    const received = drawClock('16:48')
    assertEquals(received, expected)
})
test('Test #05', () => {
    const expected = [
        [
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*'
        ],
        [
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*'
        ]
    ]
    const received = drawClock('17:39')
    assertEquals(received, expected)
})

test('Test #06', () => {
    const expected = [
        [
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*'
        ],
        [
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*'
        ],
        [
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*'
        ],
        [
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*'
        ],
        [
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*'
        ],
        [
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            ' ',
            ' ',
            ' ',
            ' ',
            ' ',
            '*'
        ],
        [
            '*',
            '*',
            '*',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*',
            '*',
            '*',
            ' ',
            ' ',
            ' ',
            '*'
        ]
    ]
    const received = drawClock('00:21')
    assertEquals(received, expected)
})