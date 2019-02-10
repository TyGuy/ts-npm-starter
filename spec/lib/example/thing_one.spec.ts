import 'mocha'
import { expect } from 'chai'
import { thingOne } from '../../../src'

describe('thingOne', () => {
  it('has correct properties', () => {
    expect(thingOne.name).to.equal('one')
    expect(thingOne.number).to.equal(1)
  })
})
