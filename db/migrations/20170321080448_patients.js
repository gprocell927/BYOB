exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('patients', function(table) {
      table.increments('id').primary()
      table.string('name')
      table.string('sex')
      table.string('species')
      table.string('dob')
      table.timestamps
    }),

    knex.schema.createTable('procedures', function(table) {
      table.increments('id').primary()
      table.string('date')
      table.string('surgeon')
      table.string('anesthetist')
      table.integer('patient_id')
            .references('id')
            .inTable('patients')
      table.json('readings')
      table.string('start_time')
      table.string('end_time')
      table.text('notes')
      table.timestamps
    }),

    knex.schema.createTable('readings', function(table) {
      table.timestamp
      table.decimal('temperature',4,1)
      table.integer('pulse')
      table.integer('respirations')
      table.decimal('oxygen',2,1)
      table.decimal('vaporizer',2,1)
      table.string('gas_agent')
      table.integer('systolic_bp')
      table.integer('diastolic_bp')
      table.integer('mean_bp')
      table.integer('etco2')
      table.integer('spo2')
      table.integer('procedure_id')
            .references('id')
            .inTable('procedures')
    })
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('readings'),
    knex.schema.dropTableIfExists('procedures'),
    knex.schema.dropTableIfExists('patients')
  ])
};
