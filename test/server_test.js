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

describe('GET endpoints', () => {
    beforeEach((done) => {
      knex.migrate.rollback()
      .then(() => {
        knex.migrate.latest()
          .then(() => {
             knex.seed.run()
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
      expect(res.body[0]).to.have.property('sex')
      expect(res.body[0].sex).to.equal('FS')
      expect(res.body[0]).to.have.property('dob')
      expect(res.body[0].dob).to.equal('04/01/2007')
      done()
      })
    })

    it('GET /api/v1/procedures should return all procedures', (done) => {
      chai.request(app)
      .get('/api/v1/procedures')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body.length).to.equal(30)
        expect(res.body[0]).to.have.property('date')
        expect(res.body[0].date).to.equal('7/26/2016')
        expect(res.body[0]).to.have.property('anesthetist')
        expect(res.body[0].anesthetist).to.equal('Amélie')
        expect(res.body[0]).to.have.property('patient_id')
        expect(res.body[0].patient_id).to.equal(1)
        expect(res.body[0]).to.have.property('start_time')
        expect(res.body[0].start_time).to.equal('12:03 PM')
        expect(res.body[0]).to.have.property('notes')
        expect(res.body[0].notes).to.equal('In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet')
        expect(res.body[0]).to.have.property('surgeon')
        expect(res.body[0].surgeon).to.equal('Patricia')
        expect(res.body[0]).to.have.property('end_time')
        expect(res.body[0].end_time).to.equal('10:48 PM')
        done()
        })
    })

    it('GET /api/v1/readings should return all readings', (done) => {
      chai.request(app)
      .get('/api/v1/readings')
      .end((err, res) => {
        expect(res).to.have.status(200)
        expect(res).to.be.json
        expect(res.body).to.be.a('array')
        expect(res.body.length).to.equal(30)
        expect(res.body[0]).to.have.property('temperature')
        expect(res.body[0].temperature).to.equal('0.1')
        expect(res.body[0]).to.have.property('pulse')
        expect(res.body[0].pulse).to.equal(100)
        expect(res.body[0]).to.have.property('respirations')
        expect(res.body[0].respirations).to.equal(60)
        expect(res.body[0]).to.have.property('oxygen')
        expect(res.body[0].oxygen).to.equal('3.4')
        expect(res.body[0]).to.have.property('vaporizer')
        expect(res.body[0].vaporizer).to.equal('3.3')
        expect(res.body[0]).to.have.property('gas_agent')
        expect(res.body[0].gas_agent).to.equal('sevoflurane')
        expect(res.body[0]).to.have.property('systolic_bp')
        expect(res.body[0].systolic_bp).to.equal(78)
        expect(res.body[0]).to.have.property('diastolic_bp')
        expect(res.body[0].diastolic_bp).to.equal(39)
        expect(res.body[0]).to.have.property('mean_bp')
        expect(res.body[0].mean_bp).to.equal(45)
        expect(res.body[0]).to.have.property('etco2')
        expect(res.body[0].etco2).to.equal(7)
        expect(res.body[0]).to.have.property('spo2')
        expect(res.body[0].spo2).to.equal(41)
        expect(res.body[0]).to.have.property('procedure_id')
        expect(res.body[0].procedure_id).to.equal(12)
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
        expect(res.body[0]).to.have.property('sex')
        expect(res.body[0].sex).to.equal('FS')
        expect(res.body[0]).to.have.property('dob')
        expect(res.body[0].dob).to.equal('04/01/2007')
        done()
      })
    })

    it('GET /api/v1/procedures/:id should return a single procedure', (done) => {
      chai.request(app)
      .get('/api/v1/procedures/1')
      .end((err, res) => {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body.length).to.equal(1)
      expect(res.body[0]).to.have.property('date')
      expect(res.body[0].date).to.equal('7/26/2016')
      expect(res.body[0]).to.have.property('anesthetist')
      expect(res.body[0].anesthetist).to.equal('Amélie')
      expect(res.body[0]).to.have.property('patient_id')
      expect(res.body[0].patient_id).to.equal(1)
      expect(res.body[0]).to.have.property('start_time')
      expect(res.body[0].start_time).to.equal('12:03 PM')
      expect(res.body[0]).to.have.property('notes')
      expect(res.body[0].notes).to.equal('In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet')
      expect(res.body[0]).to.have.property('surgeon')
      expect(res.body[0].surgeon).to.equal('Patricia')
      expect(res.body[0]).to.have.property('end_time')
      expect(res.body[0].end_time).to.equal('10:48 PM')
      done()
      })
    })

    it('GET /api/v1/readings/:id should return a single reading', (done) => {
      chai.request(app)
      .get('/api/v1/readings/2')
      .end((err, res) => {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body.length).to.equal(1)
      expect(res.body[0]).to.have.property('temperature')
      expect(res.body[0].temperature).to.equal('3.5')
      expect(res.body[0]).to.have.property('pulse')
      expect(res.body[0].pulse).to.equal(20)
      expect(res.body[0]).to.have.property('respirations')
      expect(res.body[0].respirations).to.equal(14)
      expect(res.body[0]).to.have.property('oxygen')
      expect(res.body[0].oxygen).to.equal('2.5')
      expect(res.body[0]).to.have.property('vaporizer')
      expect(res.body[0].vaporizer).to.equal('3.1')
      expect(res.body[0]).to.have.property('gas_agent')
      expect(res.body[0].gas_agent).to.equal('Sevoflurane')
      expect(res.body[0]).to.have.property('systolic_bp')
      expect(res.body[0].systolic_bp).to.equal(32)
      expect(res.body[0]).to.have.property('diastolic_bp')
      expect(res.body[0].diastolic_bp).to.equal(44)
      expect(res.body[0]).to.have.property('mean_bp')
      expect(res.body[0].mean_bp).to.equal(42)
      expect(res.body[0]).to.have.property('etco2')
      expect(res.body[0].etco2).to.equal(96)
      expect(res.body[0]).to.have.property('spo2')
      expect(res.body[0].spo2).to.equal(96)
      expect(res.body[0]).to.have.property('procedure_id')
      expect(res.body[0].procedure_id).to.equal(2)
      done()
      })
    })
  })

describe('POST /api/v1/patients ', () => {
  before((done) => {
    const patients = [
      {
        name: 'Tucker Procell',
        sex:'MN',
        species:'Canine',
        dob: "09/01/2012"
      },
      {
        name: 'Walter Procell',
        sex:'MN',
        species:'Canine',
        dob: "03/01/2009"
      },
      {
        name: 'Sophie Procell',
        sex:'FS',
        species:'Canine',
        dob: "04/01/2007"
      }
    ]

    knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
        .then(() => {
           knex('patients').insert(patients)
          .then(() =>{
            done()
          })
        })
      })
  })

  after((done) => {
    knex.migrate.rollback()
    .then(() => {
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
      expect(res.body[3].name).to.equal('Jack Burton')
      expect(res.body[3].sex).to.equal('M')
      expect(res.body[3].species).to.equal('Canine')
      expect(res.body[3].dob).to.equal('11/01/2007')
      done()
    })
  })
})

describe('POST /api/v1/procedures ', () => {
  before((done) => {
    const procedures = [
      {
        date:"7/26/2016",
        surgeon:'Patricia',
        anesthetist:'Amélie',
        start_time:"12:03 PM",
        end_time:"10:48 PM",
        notes:'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet'
      },
      {
        date:"2/18/2017",
        surgeon:"Bonnie",
        anesthetist:"Ruì",
        start_time:"2:17 PM",
        end_time:"6:29 AM",
        notes:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
      },
    ]

    knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
        .then(() => {
           knex('procedures').insert(procedures)
          .then(() =>{
            done()
          })
        })
      })
  })

  after((done) => {
    knex.migrate.rollback()
    .then(() => {
      done()
    })
  })

  it.skip('should add a procedure', (done) => {
    chai.request(app)
    .post('/api/v1/procedures')
    .send({
      date:"2/18/2017",
      surgeon:"Dr. June",
      anesthetist:"Benny",
      start_time:"2:17 PM",
      end_time:"6:29 AM",
      notes:"Hi boys. I'm Tina. I know how the shark thinks. It's confused. It doesn't know why we want to kill it. It just wants to go home. There is one place I like to go. The boys' locker room. You can only see up to their ankles. C'mon Dad, just let me bite down on the bean. Buns...sen."
    })
    .end((err, res) => {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body[2].date).to.equal('2/18/2017')
      expect(res.body[2].surgeon).to.equal('Dr. June')
      expect(res.body[2].anesthetist).to.equal('Benny')
      expect(res.body[2].start_time).to.equal('2:17 PM')
      expect(res.body[2].end_time).to.equal('6:29 AM')
      expect(res.body[2].notes).to.equal("Hi boys. I'm Tina. I know how the shark thinks. It's confused. It doesn't know why we want to kill it. It just wants to go home. There is one place I like to go. The boys' locker room. You can only see up to their ankles. C'mon Dad, just let me bite down on the bean. Buns...sen.")
      done()
    })
  })
})

describe('POST /api/v1/readings ', () => {
  before((done) => {
    const readings = [
      {
        temperature:0.1,
        pulse:100,
        respirations:60,
        oxygen:3.4,
        vaporizer:3.3,
        gas_agent:"sevoflurane",
        systolic_bp:78,
        diastolic_bp:39,
        mean_bp:45,
        etco2:7,
        spo2:41,
        procedure_id:12
      },
      {
        temperature:3.4,
        pulse:33,
        respirations:59,
        oxygen:1.2,
        vaporizer:2.0,
        gas_agent:"isoflurane",
        systolic_bp:5,
        diastolic_bp:51,
        mean_bp:44,
        etco2:19,
        spo2:3,
        procedure_id:12
      },
    ]

    knex.migrate.rollback()
    .then(() => {
      knex.migrate.latest()
        .then(() => {
           knex('readings').insert(readings)
          .then(() =>{
            done()
          })
        })
      })
  })

  after((done) => {
    knex.migrate.rollback()
    .then(() => {
      done()
    })
  })

  it.skip('should add a reading', (done) => {
    chai.request(app)
    .post('/api/v1/readings')
    .send({
      temperature:2.2,
      pulse:59,
      respirations:49,
      oxygen:1.4,
      vaporizer:2.1,
      gas_agent:"isoflurane",
      systolic_bp:94,
      diastolic_bp:81,
      mean_bp:80,
      etco2:87,
      spo2:6,
      procedure_id:6
    })
    .end((err, res) => {
      expect(res).to.have.status(200)
      expect(res).to.be.json
      expect(res.body).to.be.a('array')
      expect(res.body[2].temperature).to.equal(2.2)
      expect(res.body[2].pulse).to.equal('Dr. June')
      expect(res.body[2].respirations).to.equal('Benny')
      expect(res.body[2].oxygen).to.equal('2:17 PM')
      expect(res.body[2].vaporizer).to.equal('6:29 AM')
      expect(res.body[2].systolic_bp).to.equal(94)
      expect(res.body[2].diastolic_bp).to.equal(81)
      expect(res.body[2].mean_bp).to.equal(80)
      expect(res.body[2].etco2).to.equal(87)
      expect(res.body[2].spo2).to.equal(6)
      expect(res.body[2].gas_agent).to.equal('isoflurane')
      done()
    })
  })
})

describe('PATCH /api/v1/patients/:id', () => {

})
