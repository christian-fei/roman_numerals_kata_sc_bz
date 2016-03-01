'use strict'

const conversionTable = {0: '', 1: 'I', 4: 'IV', 5: 'V', 9: 'IX', 10: 'X', 40: 'XL', 50: 'L', 90: 'XC', 100: 'C', 400: 'CD', 500: 'D', 900: 'CM', 1000: 'M'}

function toRoman(arabic){
  return conversionTable.hasOwnProperty(arabic)
    ? conversionTable[arabic]
    : convertArabic(arabic)

  function convertArabic(arabic){
    let magic = Object.keys(conversionTable).sort(desc).find(i => i < arabic)
    return romans[magic] + toRoman(arabic - magic)
  }
  function desc(a,b){ 
    return b-a
  }
}

module.exports = {toRoman}
