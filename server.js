const http = require('http')
const express = require('express')
const path = require('path')
const reload = require('reload')
const bodyParser = require('body-parser')
const app = express()

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.set('port', process.env.PORT || 3000)

//ENDPOINTS

app.get('/api/v1/patients', (req, res) => {
  database('patients').select()
  .then(patients => {
    console.log(patients)
    res.status(200).json(patients)
  })
  .catch((error) => {
    console.error(error)
  })
})
app.get('/api/v1/procedures', (req, res) => {

})
app.get('/api/v1/readings', (req, res) => {

})
app.get('/api/v1/patients/:id', (req, res) => {

})
app.get('/api/v1/procedures/:id', (req, res) => {

})
app.get('/api/v1/readings/:id', (req, res) => {

})
app.listen(app.get('port'), ()=> {
  console.log('Magic is running on 3000')
})
