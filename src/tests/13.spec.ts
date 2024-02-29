import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { calculateTime } from '../in/13.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(calculateTime, Function);
})

Deno.test('Test #02', () => {
    const expected = '-02:20:00'
    const received = calculateTime(['00:10:00', '01:00:00', '03:30:00'])
    assertEquals(received, expected)
})

Deno.test('Test #03', () => {
    const expected = '-00:30:00'
    const received = calculateTime(['01:00:00', '05:00:00', '00:30:00'])
    assertEquals(received, expected)
})

Deno.test('Test #04', () => {
    const expected = '00:30:00'
    const received = calculateTime(['02:00:00', '05:00:00', '00:30:00'])
    assertEquals(received, expected)
})

Deno.test('Test #05', () => {
    const expected = '-05:29:00'
    const received = calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30'])
    assertEquals(received, expected)
})

Deno.test('Test #06', () => {
    const expected = '00:00:00'
    const received = calculateTime(['02:00:00', '03:00:00', '02:00:00'])
    assertEquals(received, expected)
})

Deno.test('Test #07', () => {
    const expected = '05:02:01'
    const received = calculateTime(['01:01:01', '09:59:59', '01:01:01'])
    assertEquals(received, expected)
})

Deno.test('Test #08', () => {
    const expected = '-00:00:01'
    const received = calculateTime(['01:01:01', '03:59:59', '01:01:01', '00:57:58'])
    assertEquals(received, expected)
})
