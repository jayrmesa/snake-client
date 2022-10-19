const net = require("net");
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address from constant
    port: PORT // PORT number from constant
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('You are Connected, dear snake');
    conn.write('Name: AM');
  });

  return conn;
};


module.exports = { connect };