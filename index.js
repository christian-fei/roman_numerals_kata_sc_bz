'use strict'

const romans = {
  0: '',
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M',
}

module.exports = function toRoman(decimal){
  if( romans[decimal] )
    return romans[decimal]
  let step = magic(decimal)
  return romans[step] + toRoman(decimal - step)
}

function magic(decimal){
  return Object.keys(romans).filter((number) => {
    return number < decimal
  }).pop()
}
