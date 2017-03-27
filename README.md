# BYOB (Build Your Own Backend)

Version 1 of this particular API provides information for a veterinary anesthetic record: patient profiles, procedure details, and anesthetic readings.

<hr />
## To Begin
Install dependencies `npm install`

Start the server with `node server.js`

## Endpoints

### GET endpoints

`GET /api/v1/patients`: Returns all patients in the database.

`GET /api/v1/procedures`: Returns all procedures in the database.

`GET /api/v1/readings`: Returns all reading in the database.

`GET /api/v1/patients/:id`: Returns a single patient.<br>
  ** Parameters: ** <br>
      ** :id ** : the patient ID

`GET /api/v1/procedures/:id`: Returns a single procedure <br>
  ** Parameters: ** <br>
    ** :id ** : the procedure ID

`GET /api/v1/readings/:id`: Returns a single reading <br>
  ** Parameters: ** <br>
    ** :id ** : the reading ID

### POST endpoints

`POST /api/v1/patients`: Adds a new patient to the patient table.<br>
  ** Body: ** <br>
  You must pass in a full patient object
  ```
  {
    name: 'Sophie Procell',
    sex:'FS',
    species:'Canine',
    dob: "04/01/2007"
  }
  ```

`POST /api/v1/procedures`: Adds a new procedure to the procedure table.<br>
** Body: ** <br>
You must pass in a full procedure object
```
{
  date:"7/26/2016",
  surgeon:'Patricia',
  anesthetist:'Amélie',
  start_time:"12:03 PM",
  end_time:"10:48 PM",
  notes:'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet'
}
```

`POST /api/v1/readings`: Adds a new reading to the readings table.<br>
** Body: ** <br>
You must pass in a full readings object
```
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
}
```

### PATCH endpoints

** Body Requirements: **
Pass in an existing key with an updated value.<br>
`{
  date: 4/28/2002
}`

`PATCH /api/v1/patients/:id`: Updates information for the patient that matches the entered patient id.

`PATCH /api/v1/procedures/:id`: Updates information for the procedure(s) that matches the entered procedure id.

`PATCH /api/v1/readings/:id`: Updates information for the reading(s) that matches the entered readings id.

### DELETE endpoints

`DELETE /api/v1/patient/:id`: Deletes a patient and it's associated procedures and readings from the database using the patient id.

`DELETE /api/v1/procedures/:id`: Deletes a procedure and it's readings from the database using the procedure id.

`DELETE /api/v1/readings/:id`: Deletes a reading from the database using the reading id.

### Custom endpoints

#### Calculating endpoint

`GET /api/v1/readings/:id/avgtemperature`: Returns an average of the body temperature readings from the specified reading group using the reading id.

#### GET params endpoint
`GET /api/v1/patients?species={species_name_here}`: Returns all patients matching the queried species. A query should be made like so: ```/api/v1/patients?species=hedgehog```
