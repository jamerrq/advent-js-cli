import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { cyberReindeer } from '../in/5.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(cyberReindeer, Function);
})

Deno.test('Test #02', () => {
    const expected = [
        'S..|...|..',
        '.S.|...|..',
        '..S|...|..',
        '..S|...|..',
        '..S|...|..',
        '...S...*..',
        '...*S..*..',
        '...*.S.*..',
        '...*..S*..',
        '...*...S..'
    ]
    assertEquals(cyberReindeer('S..|...|..', 10), expected)
})

Deno.test('Test #03', () => {
    const expected = [
        'S.|.',
        '.S|.',
        '.S|.',
        '.S|.'
    ]
    assertEquals(cyberReindeer('S.|.', 4), expected)
})

Deno.test('Test #04', () => {
    const expected = [
        'S.|.|.',
        '.S|.|.',
        '.S|.|.',
        '.S|.|.',
        '.S|.|.',
        '..S.*.',
        '..*S*.'
    ]
    assertEquals(cyberReindeer('S.|.|.', 7), expected)
})

Deno.test('Test #05', () => {
    const expected = [
        'S.|..',
        '.S|..',
        '.S|..',
        '.S|..',
        '.S|..',
        '..S..'
    ]
    assertEquals(cyberReindeer('S.|..', 6), expected)
})

Deno.test('Test #06', () => {
    const expected = [
        'S.|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '.S|.|.|......|.||.........',
        '..S.*.*......*.**.........',
        '..*S*.*......*.**.........',
        '..*.S.*......*.**.........'
    ]
    assertEquals(cyberReindeer('S.|.|.|......|.||.........', 8), expected)
})
