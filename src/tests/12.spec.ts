import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { checkIsValidCopy } from '../in/12.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(checkIsValidCopy, Function)
})

Deno.test('Test #02', () => {
    const received = checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')
    assertEquals(received, true)
})

Deno.test('Test #03', () => {
    const received = checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')
    assertEquals(received, false)
})

Deno.test('Test #04', () => {
    const received = checkIsValidCopy('Santa Claus', ' Santa Claus ')
    assertEquals(received, false)
})

Deno.test('Test #05', () => {
    const received = checkIsValidCopy('Santa Claus', '###:. c:+##')
    assertEquals(received, true)
})

Deno.test('Test #06', () => {
    const received = checkIsValidCopy('Santa Claus', 'sant##claus+')
    assertEquals(received, false)
})

Deno.test('Test #07', () => {
    const received = checkIsValidCopy('Santa Claus', 's#+:. c:. s')
    assertEquals(received, true)
})

Deno.test('Test #08', () => {
    const received = checkIsValidCopy('Santa Claus', 's#+:.#c:. s')
    assertEquals(received, false)
})

Deno.test('Test #09', () => {
    const received = checkIsValidCopy('Santa Claus', 'SantA ClauS')
    assertEquals(received, false)
})

Deno.test('Test #10', () => {
    const received = checkIsValidCopy('3 #egalos', '3 .+:# #:')
    assertEquals(received, true)
})

Deno.test('Test #11', () => {
    const received = checkIsValidCopy('3 regalos', '3        ')
    assertEquals(received, true)
})

Deno.test('Test #12', () => {
    const received = checkIsValidCopy('3 regalos 3', '3 .+:# #: 3')
    assertEquals(received, true)
})

Deno.test('Test #13', () => {
    const received = checkIsValidCopy('Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niños', 'Santa Claus viene a buscarte para darte muchos regalos y eso es espectacular porque da mucha felicidad a todos los niño')
    assertEquals(received, false)
})
