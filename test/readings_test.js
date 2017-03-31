// describe('Readings endpoints', () => {
//
//   it('GET /api/v1/readings should return all readings', (done) => {
//     chai.request(app)
//     .get('/api/v1/readings')
//     .end((err, res) => {
//       expect(res).to.have.status(200)
//       expect(res).to.be.json
//       expect(res.body).to.be.a('array')
//       expect(res.body.length).to.equal(30)
//       expect(res.body[0]).to.have.property('temperature')
//       expect(res.body[0].temperature).to.equal('0.1')
//       expect(res.body[0]).to.have.property('pulse')
//       expect(res.body[0].pulse).to.equal(100)
//       expect(res.body[0]).to.have.property('respirations')
//       expect(res.body[0].respirations).to.equal(60)
//       expect(res.body[0]).to.have.property('oxygen')
//       expect(res.body[0].oxygen).to.equal('3.4')
//       expect(res.body[0]).to.have.property('vaporizer')
//       expect(res.body[0].vaporizer).to.equal('3.3')
//       expect(res.body[0]).to.have.property('gas_agent')
//       expect(res.body[0].gas_agent).to.equal('sevoflurane')
//       expect(res.body[0]).to.have.property('systolic_bp')
//       expect(res.body[0].systolic_bp).to.equal(78)
//       expect(res.body[0]).to.have.property('diastolic_bp')
//       expect(res.body[0].diastolic_bp).to.equal(39)
//       expect(res.body[0]).to.have.property('mean_bp')
//       expect(res.body[0].mean_bp).to.equal(45)
//       expect(res.body[0]).to.have.property('etco2')
//       expect(res.body[0].etco2).to.equal(7)
//       expect(res.body[0]).to.have.property('spo2')
//       expect(res.body[0].spo2).to.equal(41)
//       expect(res.body[0]).to.have.property('procedure_id')
//       expect(res.body[0].procedure_id).to.equal(12)
//       done()
//       })
//   })
//
//   it('GET /api/v1/readings/:id should return a single reading', (done) => {
//     chai.request(app)
//     .get('/api/v1/readings/2')
//     .end((err, res) => {
//     expect(res).to.have.status(200)
//     expect(res).to.be.json
//     expect(res.body).to.be.a('array')
//     expect(res.body.length).to.equal(1)
//     expect(res.body[0]).to.have.property('temperature')
//     expect(res.body[0].temperature).to.equal('3.5')
//     expect(res.body[0]).to.have.property('pulse')
//     expect(res.body[0].pulse).to.equal(20)
//     expect(res.body[0]).to.have.property('respirations')
//     expect(res.body[0].respirations).to.equal(14)
//     expect(res.body[0]).to.have.property('oxygen')
//     expect(res.body[0].oxygen).to.equal('2.5')
//     expect(res.body[0]).to.have.property('vaporizer')
//     expect(res.body[0].vaporizer).to.equal('3.1')
//     expect(res.body[0]).to.have.property('gas_agent')
//     expect(res.body[0].gas_agent).to.equal('Sevoflurane')
//     expect(res.body[0]).to.have.property('systolic_bp')
//     expect(res.body[0].systolic_bp).to.equal(32)
//     expect(res.body[0]).to.have.property('diastolic_bp')
//     expect(res.body[0].diastolic_bp).to.equal(44)
//     expect(res.body[0]).to.have.property('mean_bp')
//     expect(res.body[0].mean_bp).to.equal(42)
//     expect(res.body[0]).to.have.property('etco2')
//     expect(res.body[0].etco2).to.equal(96)
//     expect(res.body[0]).to.have.property('spo2')
//     expect(res.body[0].spo2).to.equal(96)
//     expect(res.body[0]).to.have.property('procedure_id')
//     expect(res.body[0].procedure_id).to.equal(2)
//     done()
//     })
//   })
//
//   it.skip('should return a 404 if reading does not exist', (done) => {
//     chai.request(app)
//     .get('/api/v1/readings/foo')
//     .end((err, res) => {
//       expect(res).to.have.status(404)
//       expect(res).to.be.json
//       done()
//     })
//   })
//
// it('should return an average temperature of a specific reading group', (done) => {
//   chai.request(app)
//   .get('/api/v1/readings/1/avgtemperature')
//   .end((err,res) => {
//     expect(res).to.have.status(200)
//     expect(res).to.be.json
//     expect(res.body[0].avg).to.equal('1.5666666666666667')
//     done()
//     })
//   })
//
//
// it('should return a 422 error if the reading info provided is insufficient', (done) => {
//   chai.request(app)
//   .post('/api/v1/readings')
//   .send({
//     spo22:99
//   })
//   .end((err, res) => {
//     expect(res).to.have.status(422)
//     done()
//     })
//   })
//
//   it.skip('should add a reading', (done) => {
//     chai.request(app)
//     .post('/api/v1/readings')
//     .send({
//       temperature:2.2,
//       pulse:59,
//       respirations:49,
//       oxygen:1.4,
//       vaporizer:2.1,
//       gas_agent:"isoflurane",
//       systolic_bp:94,
//       diastolic_bp:81,
//       mean_bp:80,
//       etco2:87,
//       spo2:6,
//       procedure_id:6
//     })
//     .end((err, res) => {
//       expect(res).to.have.status(200)
//       expect(res).to.be.json
//       expect(res.body).to.be.a('array')
//       expect(res.body[2].temperature).to.equal(2.2)
//       expect(res.body[2].pulse).to.equal('Dr. June')
//       expect(res.body[2].respirations).to.equal('Benny')
//       expect(res.body[2].oxygen).to.equal('2:17 PM')
//       expect(res.body[2].vaporizer).to.equal('6:29 AM')
//       expect(res.body[2].systolic_bp).to.equal(94)
//       expect(res.body[2].diastolic_bp).to.equal(81)
//       expect(res.body[2].mean_bp).to.equal(80)
//       expect(res.body[2].etco2).to.equal(87)
//       expect(res.body[2].spo2).to.equal(6)
//       expect(res.body[2].gas_agent).to.equal('isoflurane')
//       done()
//     })
//   })
//
//   it('should edit fields of a reading', (done) => {
//     chai.request(app)
//     .patch('/api/v1/readings/1')
//     .send({
//       temperature: 1000.0,
//       gas_agent: 'isoflurane'
//     })
//     .end((err, res) => {
//       expect(res).to.have.status(200)
//       expect(res).to.be.json
//       expect(res.body).to.be.a('array')
//       expect(res.body).to.have.length(1)
//       expect(res.body[0].temperature).to.equal(1000.0)
//       expect(res.body[0].pulse).to.equal(100)
//       expect(res.body[0].gas_agent).to.equal('isoflurane')
//       done()
//     })
//   })
// })
