const events = require('./events');


events.on('pickup', (payload) => log(payload));
events.on('in-transit', (payload) => log(payload));
events.on('delivered', (payload) => log(payload));

require('./driver');
require('./vendor');

function log(event, payload) {
  console.log({ event, time: new Date(), payload });
}