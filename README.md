# BYOB (Build Your Own Backend)

Version 1 of this particular API provides information for a veterinary anesthetic record: patient profiles, procedure details, and anesthetic readings.

<hr />

## Endpoints

### GET endpoints

`GET /api/v1/patients`: Returns all patients in the database.

`GET /api/v1/procedures`: Returns all procedures in the database.

`GET /api/v1/readings`: Returns all reading in the database.

`GET /api/v1/patients/:id`: Dynamic route that returns the patient with the corresponding id.

`GET /api/v1/procedures/:id`: Dynamic route that returns the procedure with the corresponding id.

`GET /api/v1/readings/:id`: Dynamic route that returns reading(s) with the corresponding id.

### POST endpoints

`POST /api/v1/patients`: Adds a new patient to the database.

`POST /api/v1/procedures`: Adds a new procedure to the database.

`POST /api/v1/readings`: Adds a new reading to the database.

### PATCH endpoints

`PATCH /api/v1/patients/:id`: Updates information for the patient that matches the entered id.

`PATCH /api/v1/procedures/:id`: Updates information for the procedure(s) that matches the entered id.

`PATCH /api/v1/readings/:id`: Updates information for the reading(s) that matches the entered id.

### DELETE endpoints

`DELETE /api/v1/patient/:id`: Deletes a patient and it's associated procedures and readings from the database.

`DELETE /api/v1/procedures/:id`: Deletes a procedure and it's readings from the database.

`DELETE /api/v1/readings/:id`: Deletes a reading from the database.

### Custom endpoints

#### Calculating endpoint

`GET /api/v1/readings/:id/avgtemperature`: Returns an average of the body temperature readings from the specified reading group.

#### GET params endpoint 
`GET /api/v1/patients?species={species_name_here}`: Returns all patients matching the queried species.
