let connection;

//userInputmovements with Say messages
const movementCommand = {
  w: 'Move: up',
  a: 'Move: left',
  s: 'Move: down',
  d: 'Move: right',
  e: 'Say: Hi',
  r: 'Say: Ssss'
};

const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  connection = conn;
  return stdin;
};

const handleUserInput = (key) => {
  if (key === '\u0003') { // When the user Ctrl + C to exit
    console.log('Connection Terminated, user quit');
    return process.exit();
  }

  if (movementCommand[key]) {
    console.log(movementCommand[key]);
    connection.write(movementCommand[key]);
  }

};

module.exports = { setupInput };