import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { organizeChristmasDinner } from '../in/23.ts'

const { test } = Deno

test('Test #01', () => {
    assertInstanceOf(organizeChristmasDinner, Function)
})

test('Test #02', () => {
    const received = organizeChristmasDinner([
        ['christmas turkey', 'turkey', 'sauce', 'herbs'],
        ['cake', 'flour', 'sugar', 'egg'],
        ['hot chocolate', 'chocolate', 'milk', 'sugar'],
        ['pizza', 'sauce', 'tomato', 'cheese', 'ham']
    ])
    const expected = [
        [
            'sauce',
            'christmas turkey',
            'pizza'
        ],
        [
            'sugar',
            'cake',
            'hot chocolate'
        ]
    ]
    assertEquals(received, expected)
})

test('Test #03', () => {
    const received = organizeChristmasDinner([
        ['fruit salad', 'apple', 'banana', 'orange'],
        ['berry smoothie', 'blueberry', 'banana', 'milk'],
        ['apple pie', 'apple', 'sugar', 'flour']
    ])
    const expected = [
        [
            'apple',
            'apple pie',
            'fruit salad'
        ],
        [
            'banana',
            'berry smoothie',
            'fruit salad'
        ]
    ]
    assertEquals(received, expected)
})

test('Test #04', () => {
    const received = organizeChristmasDinner([
        ['gingerbread', 'flour', 'ginger', 'sugar'],
        ['glazed ham', 'ham', 'honey', 'sugar', 'vinegar'],
        ['roast chicken', 'chicken', 'rosemary', 'thyme', 'garlic'],
        ['vegetable soup', 'carrot', 'potato', 'onion', 'garlic'],
        ['fruit punch', 'apple juice', 'orange juice', 'sugar']
    ])
    const expected = [
        [
            'garlic',
            'roast chicken',
            'vegetable soup'
        ],
        [
            'sugar',
            'fruit punch',
            'gingerbread',
            'glazed ham'
        ]
    ]
    assertEquals(received, expected)
})

test('Test #05', () => {
    const received = organizeChristmasDinner([
        ['pumpkin pie', 'pumpkin', 'cinnamon', 'sugar', 'flour'],
        ['mashed potatoes', 'potatoes', 'butter', 'milk'],
        ['cinnamon rolls', 'flour', 'cinnamon', 'butter', 'sugar'],
        ['turkey stuffing', 'bread crumbs', 'celery', 'onion', 'butter']
    ])
    const expected = [
        [
            'butter',
            'cinnamon rolls',
            'mashed potatoes',
            'turkey stuffing'
        ],
        [
            'cinnamon',
            'cinnamon rolls',
            'pumpkin pie'
        ],
        [
            'flour',
            'cinnamon rolls',
            'pumpkin pie'
        ],
        [
            'sugar',
            'cinnamon rolls',
            'pumpkin pie'
        ]
    ]
    assertEquals(received, expected)
})

test('Test #06', () => {
    const received = organizeChristmasDinner([
        ['chicken alfredo', 'chicken', 'pasta', 'parmesan'],
        ['parmesan chicken', 'chicken', 'parmesan', 'bread crumbs'],
        ['pasta salad', 'pasta', 'olive oil', 'tomato'],
        ['tomato soup', 'tomato', 'basil', 'cream']
    ])
    const expected = [
        [
            'chicken',
            'chicken alfredo',
            'parmesan chicken'
        ],
        [
            'parmesan',
            'chicken alfredo',
            'parmesan chicken'
        ],
        [
            'pasta',
            'chicken alfredo',
            'pasta salad'
        ],
        [
            'tomato',
            'pasta salad',
            'tomato soup'
        ]
    ]
    assertEquals(received, expected)
})

test('Test #07', () => {
    const received = organizeChristmasDinner([
        ['snowflake cookies', 'flour', 'sugar', 'vanilla'],
        ['winter stew', 'beef', 'carrots', 'potatoes'],
        ['holiday punch', 'cranberry juice', 'orange juice', 'sparkling water'],
        ['festive salad', 'lettuce', 'cranberries', 'walnuts']
    ])
    const expected: string[][] = []
    assertEquals(received, expected)
})
