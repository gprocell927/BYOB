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

//6 GET ENDPOINTS

app.get('/api/v1/patients', (req, res) => {
  database('patients').select()
  .then(patients => {
    res.status(200).json(patients)
  })
  .catch((error) => {
    res.status(404)
  })
})
app.get('/api/v1/procedures', (req, res) => {
  database('procedures').select()
  .then(procedures => {
    res.status(200).json(procedures)
  })
  .catch(error => {
    res.status(404)
  })
})

app.get('/api/v1/readings', (req, res) => {
  database('readings').select()
  .then(readings => {
    res.status(200).json(readings)
  })
  .catch(error => {
    res.status(404)
  })
})

app.get('/api/v1/patients/:id', (req, res) => {
  database('patients').where('id', req.params.id).select()
  .then(patients => {
    res.status(200).json(patients)
  })
  .catch(error => {
    res.status(404)
  })
})

app.get('/api/v1/procedures/:id', (req, res) => {
  database('procedures').where('id', req.params.id).select()
  .then(procedures => {
    res.status(200).json(procedures)
  })
  .catch(error => {
    res.status(404)
  })
})


app.get('/api/v1/readings/:id', (req, res) => {
  database('readings').where('procedure_id', req.params.id).select()
  .then(readings => {
    res.status(200).json(readings)
  })
  .catch(error => {
    res.status(404)
  })
})

//3 POST ENDPOINTS

app.post('/api/v1/patients', (req, res) => {
  const { name, sex, species, dob } = req.body
  const patient = { name, sex, species, dob }
  database('patients').insert(patient)
  .then(() => {
    database('patients').select()
      .then( patients => {
        res.status(200).json(patients)
      })
    .catch(error => {
      console.error('Something stinks about the db')
      res.sendStatus(500)
    })
  })
})

app.post('/api/v1/procedures', (req, res) => {
  const { date, surgeon, anesthetist, patient_id, start_time, end_time, notes } = req.body
  const patient = { date, surgeon, anesthetist, patient_id, start_time, end_time, notes }
  database('procedure').insert(procedure)
  .then(() => {
    database('procedures').select()
      .then( patients => {
        res.status(200).json(procedures)
      })
    .catch(error => {
      res.send('Something stinks about the db')
      res.sendStatus(500)
    })
  })
})

app.post('/api/v1/readings', (req, res) => {
  const {temperature,
        pulse,
        respirations,
        oxygen,
        vaporizer,
        gas_agent,
        systolic_bp,
        diastolic_bp,
        mean_bp,
        etco2,
        spo2,
        procedure_id
 } = req.body

  const reading = {
          temperature,
          pulse,
          respirations,
          oxygen,
          vaporizer,
          gas_agent,
          systolic_bp,
          diastolic_bp,
          mean_bp,
          etco2,
          spo2,
          procedure_id
 }
  database('readings').insert(reading)
  .then(() => {
    database('readings').select()
      .then( readings => {
        res.status(200).json(readings)
      })
    .catch(error => {
      console.error('Something stinks about the db')
      res.sendStatus(500)
    })
  })
})

// 3 PUT OR PATCH ENDPOINTS

app.patch('/api/v1/patients/:id', (req, res) => {
  const { id } = req.params
  const { name, species, sex, dob } = req.body
  database('patients').where('id', id).update({ name, species, sex, dob})
  .then(() => {
    database('patients').where('id',id).select()
    .then(patients => {
        res.status(200).json(patients)
    })
    .catch(error => {
      res.status(500)
    })
  })
})

app.patch('/api/v1/readings/:procedure_id', (req, res) => {
  const { procedure_id } = req.params
  const { temperature, pulse, respirations, oxygen, vaporizer, gas_agent, systolic_bp, diastolic_bp, mean_bp, etco2, spo2 } = req.body
  database('readings').where('procedure_id', procedure_id).update({
    temperature, pulse, respirations, oxygen, vaporizer, gas_agent, systolic_bp, diastolic_bp, mean_bp, etco2, spo2
  })
  .then(() => {
    database('readings').where('procedure_id', procedure_id).select()
    .then((readings) => {
      res.status(200).json(readings)
    })
    .catch(error => res.status(500))
  })
})

app.patch('/api/v1/procedures/:id', (req, res) => {
  const { id } = req.params
  const { date, surgeon, anesthetist, start_time, end_time, notes} = req.body
  database('procedures').where('id', id).update({ date, surgeon, anesthetist, start_time, end_time, notes
  })
  .then(() => {
    database('procedures').where('id', id).select()
    .then(procedures => res.status(200).json(procedures))
  })
  .catch(error => error.status(500))
})

// 3 DELETE ENDPOINTS

// 1 ENDPOINT THAT CALCULATES A TOTAL NUMBER OF SOMETHING

// USE GET PARAMS ON AT LEAST ONE ENDPOINT

if(!module.parent){
  app.listen(app.get('port'), ()=> {
    console.log('Magic is running on 3000')
  })
}

module.exports = app
