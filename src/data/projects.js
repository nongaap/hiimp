const projects = [
  {
    className: 'sheep',
    description: 'Sheep Host is a backend-as-as-service built on top of MongoDB that gives developers the ability to quickly generate hosted databases with the click of a button.',
    link: 'sheep-host/sheep-host',
    title: 'Sheep Host',
    cover: require('./sheep.png'),
    theme: {
      background: '#5ab6ff',
    },
  },
  {
    className: 'tictactoe',
    description: 'AI engine built on top of Node.js to play board games (i.e. tic tac toe) using minimax, alpha-beta pruning. API currently supports 3x3 and 4x4 games but is extensible to play NxN with customizable winning combinations.',
    link: 'nongaap/minimax',
    title: 'Tic Tac Toe Algorithm',
    cover: require('./tictactoe.png'),
    theme: {
      background: '#F7F7F7',
      light: true,
    },
  },
  {
    className: 'mochashot',
    description: 'Mocha Shot is a way to create Mocha/Chai tests on-the-fly directly from files. I was inspired to create Mocha Shot when writing Mocha tests and wanted a way to generate Mocha tests using a console.log like mechanism.',
    link: 'chadstone',
    title: 'Mocha Shot Testing',
    cover: require('./mocha.png'),
    theme: {
      background: '#a77e60',
    },
  },
];

export default projects;
