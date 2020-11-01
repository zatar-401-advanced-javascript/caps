'use strict';
const events = require('./events');

events.on('pickup',setTimeout(function(payload){
  console.log(`DRIVER: picked up ${payload.orderId}`)
  events.emit('in-transit',payload)
  setTimeout(function(payload){

  }, 3000)
}, 1000))
