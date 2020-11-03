'use strict';
const io = require('socket.io-client');
const caps = io.connect('http://localhost:4000/caps');

caps.on('connect',()=>{
  caps.on('pickup',(payload)=>{
    setTimeout(function(){
      console.log(`picked up ${payload.orderID}`);
      caps.emit('in-transit',payload);
    },1500);

    setTimeout(function(){
      console.log(`delivered up ${payload.orderID}`);
      caps.emit('delivered',payload);
    },3000);
  });
});