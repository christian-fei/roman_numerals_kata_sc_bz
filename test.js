'use strict'
var expect = require('chai').expect
  , numeralToRoman = require('.')

describe('numeral to roman', () => {
  it('1 to I', () => {
    expect( numeralToRoman(1) ).to.eql( 'I' )
  })
  it('2 to II', () => {
    expect( numeralToRoman(2) ).to.eql( 'II' )
  })
  it('3 to III', () => {
    expect( numeralToRoman(3) ).to.eql( 'III' )
  })
  it('4 to IV', () => {
    expect( numeralToRoman(4) ).to.eql( 'IV' )
  })
  it('5 to V', () => {
    expect( numeralToRoman(5) ).to.eql( 'V' )
  })
  it('8 to VIII', () => {
    expect( numeralToRoman(8) ).to.eql( 'VIII' )
  })
  it('7 to VII', () => {
    expect( numeralToRoman(7) ).to.eql( 'VII' )
  })
  it('9 to IX', () => {
    expect( numeralToRoman(9) ).to.eql( 'IX' )
  })
  it('40 to XL', () => {
    expect( numeralToRoman(40) ).to.eql( 'XL' )
  })
  it('90 to XC', () => {
    expect( numeralToRoman(90) ).to.eql( 'XC' )
  })
  it('400 to CD', () => {
    expect( numeralToRoman(400) ).to.eql( 'CD' )
  })

  it('49 to XLIX', () => {
    expect( numeralToRoman(49) ).to.eql( 'XLIX' )
  })


  // acceptance test

  it('1999 to MCMXCIX', () => {
    expect( numeralToRoman(1999) ).to.eql( 'MCMXCIX' )
  })
})
