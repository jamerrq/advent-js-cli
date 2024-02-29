import { assertInstanceOf, assertEquals } from "https://deno.land/std@0.217.0/assert/mod.ts";
import { drawGift } from '../in/7.ts'

Deno.test('Test #01', () => {
    assertInstanceOf(drawGift, Function);
})

// Test: drawGift(4, "+")
Deno.test('Test #02', () => {
    const expected = `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`
    assertEquals(drawGift(4, '+'), expected)
})

Deno.test('Test #03', () => {
    const expected = `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`
    assertEquals(drawGift(5, '*'), expected)
})

// Test: drawGift(1, "^")
Deno.test('Test #04', () => {
    const expected = '#\n'
    assertEquals(drawGift(1, '^'), expected)
})

// Test: drawGift(2, "&")
Deno.test('Test #05', () => {
    const expected = ` ##
###
##
`
    assertEquals(drawGift(2, '&'), expected)
})

// Test: drawGift(10, "%")
Deno.test('Test #06', () => {
    const expected = `         ##########
        #%%%%%%%%##
       #%%%%%%%%#%#
      #%%%%%%%%#%%#
     #%%%%%%%%#%%%#
    #%%%%%%%%#%%%%#
   #%%%%%%%%#%%%%%#
  #%%%%%%%%#%%%%%%#
 #%%%%%%%%#%%%%%%%#
##########%%%%%%%%#
#%%%%%%%%#%%%%%%%#
#%%%%%%%%#%%%%%%#
#%%%%%%%%#%%%%%#
#%%%%%%%%#%%%%#
#%%%%%%%%#%%%#
#%%%%%%%%#%%#
#%%%%%%%%#%#
#%%%%%%%%##
##########
`
    assertEquals(drawGift(10, '%'), expected)
})
