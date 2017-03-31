process.env.NODE_ENV = 'test'

const chai = require('chai')
const expect = chai.expect
const chaiHttp = require('chai-http')
const app = require('../server.js')

const environment = 'test';
const configuration = require('../knexfile')[environment];
const database = require('knex')(configuration);
chai.use(chaiHttp)


describe('Patient endpoints', () => {
  beforeEach((done) => {
      database.migrate.rollback()
      .then(() => {
        database.migrate.latest()
          .then(() => {
            database('patients').insert({
              name: 'Sophie Procell',
              sex:'FS',
              species:'Canine',
              dob: "04/01/2007"
            })
            .then(() => {
              done()
            })
          })
        })
    })

    afterEach((done) => {
      database.migrate.rollback()
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
    expect(res.body.length).to.equal(1)
    expect(res.body[0]).to.have.property('name')
    expect(res.body[0].name).to.equal('Sophie Procell')
    expect(res.body[0]).to.have.property('species')
    expect(res.body[0].species).to.equal('Canine')
    expect(res.body[0]).to.have.property('sex')
    expect(res.body[0].sex).to.equal('FS')
    expect(res.body[0]).to.have.property('dob')
    expect(res.body[0].dob).to.equal('04/01/2007')
    done()
    })
  })

  it('should return a 404 if patients are not available for query', (done) => {
    chai.request(app)
    .get('/api/v1/patients?species=elephant')
    .end((err, res) => {
      expect(res).to.have.status(404)
      expect(res).to.be.json
      done()
    })
  })

  it('GET /api/v1/patients/:id should return a single patient', (done) => {
    chai.request(app)
    .get('/api/v1/patients')
    .end((err, res) => {
      expect(res.body[0].id).to.equal('cats')
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body.length).to.equal(1)
      expect(res.body[0]).to.have.property('name')
      expect(res.body[0].name).to.equal('Sophie Procell')
      expect(res.body[0]).to.have.property('species')
      expect(res.body[0].species).to.equal('Canine')
      expect(res.body[0]).to.have.property('sex')
      expect(res.body[0].sex).to.equal('FS')
      expect(res.body[0]).to.have.property('dob')
      expect(res.body[0].dob).to.equal('04/01/2007')
      done()
    })
  })

  it('should return a 404 if patient does not exist', (done) => {
    chai.request(app)
    .get('/api/v1/patients/foolala')
    .end((err, res) => {
      expect(res).to.have.status(404)
      expect(res).to.be.json
      done()
    })
  })

  it('should add a patient', (done) => {
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
      expect(res.body.length).to.equal(2)
      expect(res.body[1].name).to.equal('Jack Burton')
      expect(res.body[1].sex).to.equal('M')
      expect(res.body[1].species).to.equal('Canine')
      expect(res.body[1].dob).to.equal('11/01/2007')
      done()
    })
  })

  it('should return a 422 error if the patient info provided is insufficient', (done) => {
    chai.request(app)
    .post('/api/v1/patients')
    .send({
      thing:'does not exist'
    })
    .end((err, res) => {
      expect(res).to.have.status(422)
      done()
      })
    })

  it('should edit fields of a patient', (done) => {
    chai.request(app)
    .patch('/api/v1/patients/1')
    .send({
      name: 'The Loaf of Soph'
    })
    .end((err, res) => {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body).to.have.length(1)
      expect(res.body[0].name).to.equal('The Loaf of Soph')
      expect(res.body[0].sex).to.equal('FS')
      done()
    })
  })

  it('should delete a patient when given an id', (done) => {
    chai.request(app)
    .delete('/api/v1/patients/1')
    .end((err, res) => {
      expect(res).to.have.status(200)
      expect(res).to.be.a('object')
      expect(res.body.length).to.equal(0)
      done()
    })
  })

})
