const chai = require('chai')
const expect = chai.expect
const should = chai.should
const assert = chai.assert
const chaiHttp = require('chai-http')
const app = require('../server.js')
chai.use(chaiHttp)


describe('Server', () => {
  it('should exist', () => {
    expect(app).to.exist
  })
})
