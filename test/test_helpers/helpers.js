const environment = 'test';
const configuration = require('../../knexfile')[environment];
const knex = require('knex')(configuration);

const clearDatabase = (name) => {
  return knex.raw('TRUNCATE TABLE patients, procedures CASCADE')
}

const addRow = (name, rowInfo) => {
  return knex(name).insert(rowInfo)
}


module.exports = { clearDatabase, addRow }
