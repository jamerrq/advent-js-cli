import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { findBalancedSegment } from '../in/21.ts'

const { test } = Deno

test('Test #01', () => {
    assertInstanceOf(findBalancedSegment, Function)
})

test('Test #02', () => {
    const received = findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1])
    const expected = [
        2,
        5
    ]
    assertEquals(received, expected)
})

test('Test #03', () => {
    const received = findBalancedSegment([1, 1, 0])
    const expected = [
        1,
        2
    ]
    assertEquals(received, expected)
})

test('Test #04', () => {
    const received = findBalancedSegment([1, 1, 1])
    const expected: number[] = []
    assertEquals(received, expected)
})

test('Test #05', () => {
    const received = findBalancedSegment([1, 0, 1])
    const expected = [
        0,
        1
    ]
    assertEquals(received, expected)
})

test('Test #06', () => {
    const received = findBalancedSegment([1, 0, 1, 0])
    const expected = [
        0,
        3
    ]
    assertEquals(received, expected)
})

test('Test #07', () => {
    const received = findBalancedSegment([1, 1, 0, 1, 0, 1])
    const expected: number[] = [
        1,
        4
    ]
    assertEquals(received, expected)
})

test('Test #08', () => {
    const received = findBalancedSegment([1, 0, 0, 0, 1, 1, 1, 0, 0, 0])
    const expected = [
        0,
        7
    ]
    assertEquals(received, expected)
})

test('Test #06', () => {
    const received = findBalancedSegment([0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1])
    const expected = [
        5,
        10
    ]
    assertEquals(received, expected)
})
