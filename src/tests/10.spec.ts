import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { createChristmasTree } from '../in/10.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(createChristmasTree, Function)
})

Deno.test('Test #02', () => {
    const expected = `  x
   x x
  x x x
    |
  `
    const received = createChristmasTree('x', 3)
    assertEquals(received, expected)
})

Deno.test('Test #03', () => {
    const expected = `   x
    o x
   o x o
  x o x o
     |
  `
    assertEquals(createChristmasTree('xo', 4), expected)
})

Deno.test('Test #04', function () {
    const expected = `    1
     2 3
    1 2 3
   1 2 3 1
  2 3 1 2 3
      |
  `
    const received = createChristmasTree('123', 5)
    assertEquals(received, expected)
})

Deno.test('Test #05', function () {
    const expected = `  *
   @ o
  * @ o
    |
  `
    assertEquals(createChristmasTree('*@o', 3), expected)
})
