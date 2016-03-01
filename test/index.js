'use strict'

const expect = require('expect.js')

describe('.toRoman', function (){
  const toRoman = require('..').toRoman // const {toRoman} = require('..')
  
  it('returns `I` for arabic `1`', () => {
    expect(toRoman(1)).eql('I')
  })

  it('return `II` for arabic `2`', () => {
    expect(toRoman(2)).eql( 'II' )
  })

  it('return `III` for arabic `3`', () => {
    expect(toRoman(3)).eql( 'III' )
  })

  it('return `IV` for arabic `4`', () => {
    expect(toRoman(4)).eql( 'IV' )
  })
  
  it('return `V` for arabic `5`', () => {
    expect(toRoman(5)).eql( 'V' )
  })
  
  it('return `VI` for arabic `6`', () => {
    expect(toRoman(6)).eql( 'VI' )
  })

  it('return `VII` for arabic `7`', () => {
    expect(toRoman(7)).eql( 'VII' )
  })
  
  it('return `VIII` for arabic `8`', () => {
    expect(toRoman(8)).eql( 'VIII' )
  })
  
  it('return `IX` for arabic `9`', () => {
    expect(toRoman(9)).eql( 'IX' )
  })
    
  it('return `X` for arabic `10`', () => {
    expect(toRoman(10)).eql( 'X' )
  })

  it('return `XL` for arabic `40`', () => {
    expect(toRoman(40)).eql( 'XL' )
  })

  it('return `XLIX` for arabic `49`', () => {
    expect(toRoman(49)).to.eql( 'XLIX' )
  })

  it('return `XC` for arabic `90`', () => {
    expect(toRoman(90)).to.eql( 'XC' )
  })

  it('return `CD` for arabic `400`', () => {
    expect(toRoman(400)).to.eql( 'CD' )
  })

  describe('AT:', () => {
    it('return `MCMXCIX` for arabic `1999`', () => {
      expect( toRoman(1999) ).eql( 'MCMXCIX' )
    })   
  })
})
