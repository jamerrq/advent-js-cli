import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { transformTree } from '../in/16.ts'

const { test } = Deno

test('Test #01', () => {
    assertInstanceOf(transformTree, Function)
})

test('Test #02', () => {
    const received = transformTree([])
    const expected = null
    assertEquals(received, expected)
})

test('Test #03', () => {
    const received = transformTree([1])
    const expected = {
        value: 1,
        left: null,
        right: null
    }
    assertEquals(received, expected)
})

test('Test #04', () => {
    const received = transformTree([1, 2, 3])
    const expected = {
        value: 1,
        left: {
            value: 2,
            left: null,
            right: null
        },
        right: {
            value: 3,
            left: null,
            right: null
        }
    }
    assertEquals(received, expected)
})

test('Test #05', () => {
    const received = transformTree([1, 2, 3, 4, 5])
    const expected = {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 4,
                left: null,
                right: null
            },
            right: {
                value: 5,
                left: null,
                right: null
            }
        },
        right: {
            value: 3,
            left: null,
            right: null
        }
    }
    assertEquals(received, expected)
})

test('Test #06', () => {
    const received = transformTree([1, 2, 3, 4, 5, 6, 7])
    const expected = {
        value: 1,
        left: {
            value: 2,
            left: {
                value: 4,
                left: null,
                right: null
            },
            right: {
                value: 5,
                left: null,
                right: null
            }
        },
        right: {
            value: 3,
            left: {
                value: 6,
                left: null,
                right: null
            },
            right: {
                value: 7,
                left: null,
                right: null
            }
        }
    }
    assertEquals(received, expected)
})

test('Test #07', () => {
    const received = transformTree([17, 0, null, null, 1])
    const expected = {
        value: 17,
        left: {
            value: 0,
            left: null,
            right: {
                value: 1,
                left: null,
                right: null
            }
        },
        right: null
    }
    assertEquals(received, expected)
})

test('Test #08', () => {
    const received = transformTree([3, 1, 0, 8, 12, null, 1])
    const expected = {
        value: 3,
        left: {
            value: 1,
            left: {
                value: 8,
                left: null,
                right: null
            },
            right: {
                value: 12,
                left: null,
                right: null
            }
        },
        right: {
            value: 0,
            left: null,
            right: {
                value: 1,
                left: null,
                right: null
            }
        }
    }
    assertEquals(received, expected)
})

test('Test #09', () => {
    const received = transformTree([2, 7, 5, null, 6, null, 9, null, null, 1, 11, null, null, null, 10])
    const expected = {
        value: 2,
        left: {
            value: 7,
            left: null,
            right: {
                value: 6,
                left: {
                    value: 1,
                    left: null,
                    right: null
                },
                right: {
                    value: 11,
                    left: null,
                    right: null
                }
            }
        },
        right: {
            value: 5,
            left: null,
            right: {
                value: 9,
                left: null,
                right: {
                    value: 10,
                    left: null,
                    right: null
                }
            }
        }
    }
    assertEquals(received, expected)
})
