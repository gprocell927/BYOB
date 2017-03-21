exports.seed = function(knex, Promise) {
  return knex('patients').del()
  .then(() => {
    return Promise.all([
      knex('patients').insert({
        name: 'Sophie Procell',
        sex:'FS',
        species:'Canine',
        dob: 04/01/2007
      }),
      knex('patients').insert({
        name: 'Tucker Procell',
        sex:'MN',
        species:'Canine',
        dob: 09/01/2012
      }),
      knex('patients').insert({
        name: 'Walter Procell',
        sex:'MN',
        species:'Canine',
        dob: 03/01/2009
      }),
      knex('patients').insert({
        name: 'Jack Cepeda',
        sex:'MN',
        species:'Canine',
        dob: 06/01/2007
      }),
      knex('patients').insert({
        name: 'Buddy Cepeda',
        sex:'MN',
        species:'Canine',
        dob: 06/01/2009
      }),
      knex('patients').insert({
        name: 'Tootsie Cepeda',
        sex:'FS',
        species:'Canine',
        dob: 06/01/2002
      }),
      knex('patients').insert({
        name: 'Nala Cepeda',
        sex:'SF',
        species:'Canine',
        dob: 07/01/2007
      }),
      knex('patients').insert({
        name: 'Dracula Varnold',
        sex:'MN',
        species:'Feline',
        dob: 07/01/2013
      }),
      knex('patients').insert({
        name: 'Cyan Motichka',
        sex:'SF',
        species:'Canine',
        dob: 07/01/2008
      }),
      knex('patients').insert({
        name: 'Zoey Cepeda',
        sex:'SF',
        species:'Feline',
        dob: 07/01/2006
      }),
      knex('patients').insert({
        name: 'Cat Achee',
        sex:'SF',
        species:'Feline',
        dob: 07/21/2006
      }),
      knex('patients').insert({
        name: 'ZZ Top Procell',
        sex:'M',
        species:'Reptile',
        dob: 07/21/2005
      }),
      knex('patients').insert({
        name: 'Louie Smith',
        sex:'MN',
        species:'Canine',
        dob: 03/21/2007
      }),
      knex('patients').insert({
        name: 'Lula Smith',
        sex:'SF',
        species:'Canine',
        dob: 02/21/2014
      }),
      knex('patients').insert({
        name: 'Gypsy Velazquez',
        sex:'SF',
        species:'Feline',
        dob: 01/21/2008
      }),
      knex('patients').insert({
        name: 'Radar Munger',
        sex:'MN',
        species:'Canine',
        dob: 07/20/2016
      }),
      knex('patients').insert({
        name: 'Freya Munger',
        sex:'SF',
        species:'Canine',
        dob: 11/21/2006
      }),
      knex('patients').insert({
        name: 'Action Jackson',
        sex:'MN',
        species:'Canine',
        dob: 07/04/2014
      }),
      knex('patients').insert({
        name: 'Princess Peabody',
        sex:'SF',
        species:'Feline',
        dob: 07/02/2005
      }),
      knex('patients').insert({
        name: 'DC Jones',
        sex:'MN',
        species:'Feline',
        dob: 12/21/2006
      }),
      knex('patients').insert({
        name: 'Herbie Hancock',
        sex:'M',
        species:'Hedgehog',
        dob: 01/12/2002
      }),
      knex('patients').insert({
        name: 'Snake Pliskin',
        sex:'M',
        species:'Reptile',
        dob: 07/22/2010
      }),
      knex('patients').insert({
        name: 'Velcro Jiminez',
        sex:'F',
        species:'Sloth',
        dob: 01/01/2006
      }),
      knex('patients').insert({
        name: 'Monk Kraemer',
        sex:'MN',
        species:'Canine',
        dob: 08/22/2007
      }),
      knex('patients').insert({
        name: 'Bailey',
        sex:'MN',
        species:'Canine',
        dob: 08/14/2002
      }),
      knex('patients').insert({
        name: 'Max',
        sex:'SF',
        species:'Lizard',
        dob: 09/27/2003
      }),
      knex('patients').insert({
        name: 'Bella'
        sex:'SF',
        species:'Feline',
        dob: 07/21/2006
      }),
      knex('patients').insert({
        name: 'Barley',
        sex:'M',
        species:'Canine',
        dob: 07/21/2011
      }),
      knex('patients').insert({
        name: 'Everett',
        sex:'M',
        species:'Canine',
        dob: 03/21/2000
      }),
      knex('patients').insert({
        name: 'Fiona'
        sex:'SF',
        species:'Feline',
        dob: 07/31/2010
      })
    ]);
  });
};
