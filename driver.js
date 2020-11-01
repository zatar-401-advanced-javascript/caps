'use strict';
const events = require('./events');

events.on('pickup', (payload) => {
  setTimeout(function () {
    console.log(`DRIVER: picked up ${payload.orderID}`);
    events.emit('in-transit', payload);
  }, 1000);

  setTimeout(function () {
    console.log(`DRIVER: delivered up  ${payload.orderID}`);
    events.emit('delivered', (payload));
  }, 4000);
});

module.exports = events;