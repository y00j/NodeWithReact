//keys.js
if (PROCESS.ENV.NODE_ENV === 'production') {
  module.exports = require('./prod');
} else {
  module.exports = require('./dev');
}