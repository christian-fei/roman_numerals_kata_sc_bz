'use strict'

const romans = {
  1:    'I',
  4:    'IV',
  5:    'V',
  9:    'IX',
  10:   'X',
  40:   'XL',
  50:   'L',
  90:   'XC',
  100:  'C',
  400:  'CD',
  500:  'D',
  900: 'CM',
  1000: 'M',
}

module.exports = function toRoman(decimal){
  if (decimal == 0)
    return ''
  if( romans[decimal] )
    return romans[decimal]
  let remaining = nearest_roman_decimal(decimal)
  return toRoman(remaining) + toRoman(decimal - remaining)
}

function nearest_roman_decimal(decimal){
  return Object.keys(romans).filter((number) => {
    return number < decimal
  }).pop()
}
