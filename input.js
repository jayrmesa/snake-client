let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  connection = conn;
  return stdin;
}

const handleUserInput = (key) => {
  if (key === '\u0003') { // When you Ctrl + C
    console.log('Connection Terminated, user quit');
    return process.exit();;
  }

}

module.exports = { setupInput }