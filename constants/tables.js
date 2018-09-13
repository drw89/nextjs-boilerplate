const tables = [
  {
    tableID: 'table1',
    name: 'Die erste generische Tabelle',
    head: [
      {
        title: 'Name',
        width: '10%',
      },
      {
        title: 'Date',
        // width: '5%',
      },
      {
        title: 'Location',
        // width: '5%',
      },
      {
        title: 'Drink',
        // width: '5%',
      },
      {
        title: 'Amount',
        // width: '5%',
      },
      {
        title: 'Feedback',
        width: '60%',
      },
    ],
    body: [
      {
        id: '1',
        name: 'Louis',
        date: `${new Date().toLocaleDateString()}`,
        location: 'Maximus',
        drink: 'Beer',
        amount: '3',
        feedback: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', // eslint-disable-line
      },
      {
        id: '2',
        name: 'Yves',
        date: `${new Date().toLocaleDateString()}`,
        location: 'Office',
        drink: 'Tequila Shot',
        amount: '5',
        feedback: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', // eslint-disable-line
      },
      {
        id: '3',
        name: 'Philipp',
        date: `${new Date().toLocaleDateString()}`,
        location: 'Maximus',
        drink: 'Cola',
        amount: '1',
        feedback: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', // eslint-disable-line
      },
      {
        id: '4',
        name: 'Kieran',
        date: `${new Date().toLocaleDateString()}`,
        location: 'Maximus',
        drink: 'Beer',
        amount: '999',
        feedback: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', // eslint-disable-line
      },
    ],
  },
  {
    tableID: 'table2',
    name: 'Die zweite generische Tabelle',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.', // eslint-disable-line
    head: [],
    body: [
      {
        id: '1',
        name: 'Louis',
        date: `${new Date().toLocaleDateString()}`,
        location: 'Maximus',
        drink: 'Beer',
        amount: '3',
      },
      {
        id: '2',
        name: 'Yves',
        date: `${new Date().toLocaleDateString()}`,
        location: 'Office',
        drink: 'Tequila Shot',
        amount: '5',
      },
      {
        id: '3',
        name: 'Philipp',
        date: `${new Date().toLocaleDateString()}`,
        location: 'Maximus',
        drink: 'Cola',
        amount: '1',
      },
      {
        id: '4',
        name: 'Kieran',
        date: `${new Date().toLocaleDateString()}`,
        location: 'Maximus',
        drink: 'Beer',
        amount: 'Too much',
      },
    ],
  },
];

export default tables;
