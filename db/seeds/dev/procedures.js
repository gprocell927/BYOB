exports.seed = function(knex, Promise) {
  return knex('procedures').del()
  .then(() => {
    return Promise.all([
      knex('procedures').insert({
        date:7/26/2016,
        surgeon:'Patricia',
        anesthetist:'Amélie',
        patient_id:1,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:12:03 PM,
        end_time:10:48 PM,
        notes:'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet'
      }),
      knex('procedures').insert({
        date:2/18/2017,
        surgeon:"Bonnie",
        anesthetist:"Ruì",
        patient_id:2,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:2:17 PM,
        end_time:6:29 AM,
        notes:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
      }),
      knex('procedures').insert({
        date:9/25/2016,
        surgeon:"Bonnie",
        anesthetist:"Inès",
        patient_id:3,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:7:25 PM,
        end_time:2:56 PM,
        notes:"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
      }),
      knex('procedures').insert({
        date:11/16/2016,
        surgeon:"Sandra",
        anesthetist:"Faîtes",
        patient_id:4,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:4:01 PM,
        end_time:2:35 PM,
        notes:"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
      }),
      knex('procedures').insert({
        date:1/4/2017,
        surgeon:"Thomas",
        anesthetist:"Aurélie",
        patient_id:5,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:5:11 AM,
        end_time:1:20 AM,
        notes:"Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
      }),
      knex('procedures').insert({
        {"date":"2/10/2017",surgeon:"Mark",
        anesthetist:"Gösta",
        patient_id:6,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:11:01 AM,
        end_time:2:09 PM,
        notes:"Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
      }),
      knex('procedures').insert({
        date:5/11/2016,
        surgeon:"Betty",
        anesthetist:"Clélia",
        patient_id:7,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:6:26 AM,
        end_time:9:51 PM,
        notes:"Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."
      }),
      knex('procedures').insert({
        date:5/8/2016,
        surgeon:"Andrea",
        anesthetist:"Bérangère",
        patient_id:8,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:11:52 PM,
        end_time:6:23 PM,
        notes:"Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi."
      }),
      knex('procedures').insert({
        date:"9/17/2016",
        surgeon:"Jesse",
        anesthetist:"Léandre",
        patient_id:9,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"11:28 AM",
        end_time:"2:11 PM",
        notes:"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      }),
      knex('procedures').insert({
        date:"3/28/2016",
        surgeon:"Marie",
        anesthetist:"Aí",
        patient_id:10,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"11:53 AM",
        end_time:"2:26 AM",
        notes:"Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi."
      }),
      knex('procedures').insert({
        date:"4/15/2016",
        surgeon:"Marilyn",
        anesthetist:"Maïly",
        patient_id:11,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"9:54 AM",
        end_time:"7:14 AM",
        notes:"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
      }),
      knex('procedures').insert({
        date:"9/22/2016",
        surgeon:"Ronald",
        anesthetist:"Yénora",
        patient_id:12,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"3:36 PM",
        end_time:"10:19 AM",
        notes:"Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum."
      }),
      knex('procedures').insert({
        date:"2/18/2017",
        surgeon:"Harold",
        anesthetist:"Mélodie",
        patient_id:13,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"5:02 PM",
        end_time:"2:42 AM",
        notes:"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
      }),
      knex('procedures').insert({
        date:"10/28/2016",
        surgeon:"Helen",
        anesthetist:"Maëly",
        patient_id:14,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"5:30 AM",
        end_time:"5:57 AM",
        notes:"Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem."
      }),
      knex('procedures').insert({
        date:"2/11/2017",
        surgeon:"Pamela",
        anesthetist:"Andréa",
        patient_id:15,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"2:02 PM",
        end_time:"12:23 PM",
        notes:"In congue. Etiam justo. Etiam pretium iaculis justo."
      }),
      knex('procedures').insert({
        date:"1/14/2017",
        surgeon:"Kelly",
        anesthetist:"Laurène",
        patient_id:16,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"5:52 AM",
        end_time:"12:18 AM",
        notes:"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
      }),
      knex('procedures').insert({
        date:"5/11/2016",
        surgeon:"Jeffrey",
        anesthetist:"Styrbjörn",
        patient_id:17,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"1:56 AM",
        end_time:"8:59 AM",
        notes:"Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
      }),
      knex('procedures').insert({
        date:"12/14/2016",
        surgeon:"Sarah",
        anesthetist:"Tú",
        patient_id:18,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"12:15 AM",
        end_time:"3:00 PM",
        notes:"Sed ante. Vivamus tortor. Duis mattis egestas metus."
      }),
      knex('procedures').insert({
        date:"5/18/2016",
        surgeon:"Betty",
        anesthetist:"Nuó",
        patient_id:19,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"12:47 PM",
        end_time:"6:05 AM",
        notes:"In congue. Etiam justo. Etiam pretium iaculis justo."
      }),
      knex('procedures').insert({
        date:"7/3/2016",
        surgeon:"Samuel",
        anesthetist:"Mélinda",
        patient_id:20,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"12:39 PM",
        end_time:"3:36 AM",
        notes:"Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      }),
      knex('procedures').insert({
        date:"4/25/2016",
        surgeon:"Robert",
        anesthetist:"Naëlle",
        patient_id:21,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"2:08 AM",
        end_time:"9:00 AM",
        notes:"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
      }),
      knex('procedures').insert({
        date:"1/13/2017",
        surgeon:"Carl",
        anesthetist:"Crééz",
        patient_id:22,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"2:05 PM",
        end_time:"8:21 PM",
        notes:"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum."
      }),
      knex('procedures').insert({
        date:"8/24/2016",
        surgeon:"Benjamin",
        anesthetist:"Léonore",
        patient_id:23,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"7:31 AM",
        end_time:"8:32 AM",
        notes:"Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
      }),
      knex('procedures').insert({
        date:"10/21/2016",
        surgeon:"Henry",
        anesthetist:"Régine",
        patient_id:24,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"10:37 AM",
        end_time:"7:11 AM",
        notes:"In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo."
      }),
      knex('procedures').insert({
        date:"11/23/2016",
        surgeon:"Harold",
        anesthetist:"Maëlann",
        patient_id:25,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"9:52 AM",
        end_time:"6:17 AM",
        notes:"In congue. Etiam justo. Etiam pretium iaculis justo."
      }),
      knex('procedures').insert({
        date:"10/11/2016",
        surgeon:"Janet",
        anesthetist:"Andréa",
        patient_id:26,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"9:19 AM",
        end_time:"7:43 PM",
        notes:"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
      }),
      knex('procedures').insert({
        date:"8/5/2016",
        surgeon:"Amy",
        anesthetist:"Dù",
        patient_id:27,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"4:04 PM",
        end_time:"8:27 AM",
        notes:"Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
      }),
      knex('procedures').insert({
        date:"10/8/2016",
        surgeon:"Ashley",
        anesthetist:"Illustrée",
        patient_id:28,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"2:40 AM",
        end_time:"2:42 AM",
        notes:"Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
      }),
      knex('procedures').insert({
        date:"12/14/2016",
        surgeon:"Jonathan",
        anesthetist:"Tán",
        patient_id:29,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"5:11 AM",
        end_time:"2:52 PM",
        "notes":"Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
      }),
      knex('procedures').insert({
        date:"5/3/2016",
        surgeon:"Ruby",
        anesthetist:"Hélène",
        patient_id:30,
        readings:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}],
        start_time:"2:00 AM",
        end_time:"1:44 PM",
        notes:"Sed ante. Vivamus tortor. Duis mattis egestas metus."
      })
    ]);
  });
};
