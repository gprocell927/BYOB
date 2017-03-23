exports.seed = function(knex, Promise) {
  return knex('patients').del()
  .then(() => {
    return Promise.all([
      knex('patients').insert({
        id:1,
        name: 'Sophie Procell',
        sex:'FS',
        species:'Canine',
        dob: "04/01/2007"
      }),
      knex('patients').insert({
        id:2,
        name: 'Tucker Procell',
        sex:'MN',
        species:'Canine',
        dob: "09/01/2012"
      }),
      knex('patients').insert({
        id:3,
        name: 'Walter Procell',
        sex:'MN',
        species:'Canine',
        dob: "03/01/2009"
      }),
      knex('patients').insert({
        id:4,
        name: 'Jack Cepeda',
        sex:'MN',
        species:'Canine',
        dob: "06/01/2007"
      }),
      knex('patients').insert({
        id:5,
        name: 'Buddy Cepeda',
        sex:'MN',
        species:'Canine',
        dob: "06/01/2009"
      }),
      knex('patients').insert({
        id:6,
        name: 'Tootsie Cepeda',
        sex:'FS',
        species:'Canine',
        dob: "06/01/2002"
      }),
      knex('patients').insert({
        id:7,
        name: 'Nala Cepeda',
        sex:'SF',
        species:'Canine',
        dob: "07/01/2007"
      }),
      knex('patients').insert({
        id:8,
        name: 'Dracula Varnold',
        sex:'MN',
        species:'Feline',
        dob: "07/01/2013"
      }),
      knex('patients').insert({
        id:9,
        name: 'Cyan Motichka',
        sex:'SF',
        species:'Canine',
        dob: "07/01/2008"
      }),
      knex('patients').insert({
        id:10,
        name: 'Zoey Cepeda',
        sex:'SF',
        species:'Feline',
        dob: "07/01/2006"
      }),
      knex('patients').insert({
        id:11,
        name: 'Cat Achee',
        sex:'SF',
        species:'Feline',
        dob: "07/21/2006"
      }),
      knex('patients').insert({
        id:12,
        name: 'ZZ Top Procell',
        sex:'M',
        species:'Reptile',
        dob: "07/21/2005"
      }),
      knex('patients').insert({
        id:13,
        name: 'Louie Smith',
        sex:'MN',
        species:'Canine',
        dob: "03/21/2007"
      }),
      knex('patients').insert({
        id:14,
        name: 'Lula Smith',
        sex:'SF',
        species:'Canine',
        dob: "02/21/2014"
      }),
      knex('patients').insert({
        id:15,
        name: 'Gypsy Velazquez',
        sex:'SF',
        species:'Feline',
        dob: "01/21/2008"
      }),
      knex('patients').insert({
        id:16,
        name: 'Radar Munger',
        sex:'MN',
        species:'Canine',
        dob: "07/20/2016"
      }),
      knex('patients').insert({
        id:17,
        name: 'Freya Munger',
        sex:'SF',
        species:'Canine',
        dob: "11/21/2006"
      }),
      knex('patients').insert({
        id:18,
        name: 'Action Jackson',
        sex:'MN',
        species:'Canine',
        dob: "07/04/2014"
      }),
      knex('patients').insert({
        id:19,
        name: 'Princess Peabody',
        sex:'SF',
        species:'Feline',
        dob: "07/02/2005"
      }),
      knex('patients').insert({
        id:20,
        name: 'DC Jones',
        sex:'MN',
        species:'Feline',
        dob: "12/21/2006"
      }),
      knex('patients').insert({
        id:21,
        name: 'Herbie Hancock',
        sex:'M',
        species:'Hedgehog',
        dob: "01/12/2002"
      }),
      knex('patients').insert({
        id:22,
        name: 'Snake Pliskin',
        sex:'M',
        species:'Reptile',
        dob: "07/22/2010"
      }),
      knex('patients').insert({
        id:23,
        name: 'Velcro Jiminez',
        sex:'F',
        species:'Sloth',
        dob: "01/01/2006"
      }),
      knex('patients').insert({
        id:24,
        name: 'Monk Kraemer',
        sex:'MN',
        species:'Canine',
        dob: "08/22/2007"
      }),
      knex('patients').insert({
        id:25,
        name: 'Bailey',
        sex:'MN',
        species:'Canine',
        dob: "08/14/2002"
      }),
      knex('patients').insert({
        id:26,
        name: 'Max',
        sex:'SF',
        species:'Lizard',
        dob: "09/27/2003"
      }),
      knex('patients').insert({
        id:27,
        name: 'Bella',
        sex:'SF',
        species:'Feline',
        dob: "07/21/2006"
      }),
      knex('patients').insert({
        id:28,
        name: 'Barley',
        sex:'M',
        species:'Canine',
        dob: "07/21/2011"
      }),
      knex('patients').insert({
        id:29,
        name: 'Everett',
        sex:'M',
        species:'Canine',
        dob: "03/21/2000"
      }),
      knex('patients').insert({
        id:30,
        name: 'Fiona',
        sex:'SF',
        species:'Feline',
        dob: "07/31/2010"
      })
    ]);
  });
};
