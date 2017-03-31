process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../server.js')

const environment = 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
chai.use(chaiHttp)

describe('Server', () => {
  it('should exist', () => {
    expect(app).to.exist
  })
})
