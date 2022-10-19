const { connect } = require('./client');
const { setupInput } = require('./input');

// Letting the users know when its loading, if its idle or taking a while that means there is something wrong, check the IP or Port
console.log("Connecting ...");

setupInput(connect());