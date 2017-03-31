// process.env.NODE_ENV = 'test'
//
// const chai = require('chai')
// const expect = chai.expect
// const chaiHttp = require('chai-http')
// const app = require('../server.js')
//
// const environment = 'test';
// const configuration = require('../knexfile')[environment];
// const database = require('knex')(configuration);
// chai.use(chaiHttp)
//
// describe('Procedures endpoints', () => {
//
//     it.only('GET /api/v1/procedures should return all procedures', (done) => {
//       chai.request(app)
//       .get('/api/v1/procedures')
//       .end((err, res) => {
//         expect(res).to.have.status(200)
//         expect(res).to.be.json
//         expect(res.body).to.be.a('array')
//         expect(res.body.length).to.equal(30)
//         expect(res.body[0]).to.have.property('date')
//         expect(res.body[0].date).to.equal('7/26/2016')
//         expect(res.body[0]).to.have.property('anesthetist')
//         expect(res.body[0].anesthetist).to.equal('Amélie')
//         expect(res.body[0]).to.have.property('patient_id')
//         expect(res.body[0].patient_id).to.equal(1)
//         expect(res.body[0]).to.have.property('start_time')
//         expect(res.body[0].start_time).to.equal('12:03 PM')
//         expect(res.body[0]).to.have.property('notes')
//         expect(res.body[0].notes).to.equal('In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet')
//         expect(res.body[0]).to.have.property('surgeon')
//         expect(res.body[0].surgeon).to.equal('Patricia')
//         expect(res.body[0]).to.have.property('end_time')
//         expect(res.body[0].end_time).to.equal('10:48 PM')
//         done()
//         })
//     })
//
//     it('GET /api/v1/procedures/:id should return a single procedure', (done) => {
//       chai.request(app)
//       .get('/api/v1/procedures/1')
//       .end((err, res) => {
//       expect(res).to.have.status(200)
//       expect(res).to.be.json
//       expect(res.body).to.be.a('array')
//       expect(res.body.length).to.equal(1)
//       expect(res.body[0]).to.have.property('date')
//       expect(res.body[0].date).to.equal('7/26/2016')
//       expect(res.body[0]).to.have.property('anesthetist')
//       expect(res.body[0].anesthetist).to.equal('Amélie')
//       expect(res.body[0]).to.have.property('patient_id')
//       expect(res.body[0].patient_id).to.equal(1)
//       expect(res.body[0]).to.have.property('start_time')
//       expect(res.body[0].start_time).to.equal('12:03 PM')
//       expect(res.body[0]).to.have.property('notes')
//       expect(res.body[0].notes).to.equal('In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet')
//       expect(res.body[0]).to.have.property('surgeon')
//       expect(res.body[0].surgeon).to.equal('Patricia')
//       expect(res.body[0]).to.have.property('end_time')
//       expect(res.body[0].end_time).to.equal('10:48 PM')
//       done()
//       })
//     })
//
//     it.skip('should return a 404 if procedure does not exist', (done) => {
//       chai.request(app)
//       .get('/api/v1/procedures/foo')
//       .end((err, res) => {
//         expect(res).to.have.status(404)
//         expect(res).to.be.json
//         done()
//       })
//     })
//
//     it('should return a 422 error if the procedure info provided is insufficient', (done) => {
//       chai.request(app)
//       .post('/api/v1/procedures')
//       .send({
//         nondate:'3-26-2007'
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(500)
//         done()
//         })
//       })
//
//       it.skip('should add a procedure', (done) => {
//         chai.request(app)
//         .post('/api/v1/procedures')
//         .send({
//           date:"2/18/2017",
//           surgeon:"Dr. June",
//           anesthetist:"Benny",
//           start_time:"2:17 PM",
//           end_time:"6:29 AM",
//           notes:"Hi boys. I'm Tina. I know how the shark thinks. It's confused. It doesn't know why we want to kill it. It just wants to go home. There is one place I like to go. The boys' locker room. You can only see up to their ankles. C'mon Dad, just let me bite down on the bean. Buns...sen."
//         })
//         .end((err, res) => {
//           expect(res).to.have.status(200)
//           expect(res).to.be.json
//           expect(res.body).to.be.a('array')
//           expect(res.body[2].date).to.equal('2/18/2017')
//           expect(res.body[2].surgeon).to.equal('Dr. June')
//           expect(res.body[2].anesthetist).to.equal('Benny')
//           expect(res.body[2].start_time).to.equal('2:17 PM')
//           expect(res.body[2].end_time).to.equal('6:29 AM')
//           expect(res.body[2].notes).to.equal("Hi boys. I'm Tina. I know how the shark thinks. It's confused. It doesn't know why we want to kill it. It just wants to go home. There is one place I like to go. The boys' locker room. You can only see up to their ankles. C'mon Dad, just let me bite down on the bean. Buns...sen.")
//           done()
//         })
//       })
//     })
//     it('should edit fields of a procedure', (done) => {
//       chai.request(app)
//       .patch('/api/v1/procedures/1')
//       .send({
//         surgeon: 'Dr. Nick'
//       })
//       .end((err, res) => {
//         expect(res).to.have.status(200)
//         expect(res).to.be.json
//         expect(res.body).to.be.a('array')
//         expect(res.body).to.have.length(1)
//         expect(res.body[0].surgeon).to.equal('Dr. Nick')
//         expect(res.body[0].anesthetist).to.equal('Amélie')
//         done()
//       })
//     })
//     it('should delete a procedure when given an id', (done) => {
//       chai.request(app)
//       .delete('/api/v1/procedures/12')
//       .end((err, res) => {
//         expect(res).to.have.status(200)
//         expect(res).to.be.a('object')
//         done()
//       })
//     })
