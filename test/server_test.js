process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../server.js')

const environment = 'test';
const configuration = require('../knexfile')[environment];
const knex = require('knex')(configuration);
chai.use(chaiHttp)

describe('Server', () => {
  it('should exist', () => {
    expect(app).to.exist
  })
})

describe('muh endpoints', () => {
    beforeEach((done) => {
      knex.migrate.rollback()
      .then(() => {
        knex.migrate.latest()
          .then(() => {
            return knex.seed.run()
            .then(() => {
              done()
            })
          })
        })
    })

    afterEach((done) => {
      knex.migrate.rollback()
      .then(() => {
        done()
      })
    })

    it('GET /api/v1/patients should return all patients', (done) => {

    chai.request(app)
    .get('/api/v1/patients')
    .end((err, res) => {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body.length).to.equal(30)
      expect(res.body[0]).to.have.property('name')
      expect(res.body[0].name).to.equal('Sophie Procell')
      expect(res.body[0]).to.have.property('species')
      expect(res.body[0].species).to.equal('Canine')
      done()
      })
    })


    it('GET /api/v1/patients/:id should return a single patient', (done) => {
      chai.request(app)
      .get('/api/v1/patients/1')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body.length).to.equal(1)
        expect(res.body[0]).to.have.property('name')
        expect(res.body[0].name).to.equal('Sophie Procell')
        expect(res.body[0]).to.have.property('species')
        expect(res.body[0].species).to.equal('Canine')
        done()
      })
    })

    it('POST /api/v1/patients should add a patient', (done) => {
      chai.request(app)
      .post('/api/v1/patients')
      .send({
        name: 'Jack Burton',
        sex:'M',
        species:'Canine',
        dob: "11/01/2007"
      })
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body[0]).to.have.property('name')
        expect(res.body.name).to.equal('Jack Burton')
        expect(res.body).to.have.property('dob')
        expect(res.body.dob).to.equal('11/01/2007')
        done()
      })
    })

    it('PUT /api/v1/patients/:id should update a patient', (done) => {
      chai.request(app)
      .put('/api/v1/patients/1')
      .send({
        name: 'Chili',
        species: 'dragon'
      })
      .end((err, res) => {
        expect(res).to.have.status(200)
        done()
      })
    })
  })
