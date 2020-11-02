'use strict';
require('dotenv').config();
const net = require('net');
const client = new net.Socket();
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 4000;

client.connect(PORT, HOST, () => {
  console.log('Driver Connected');

  client.on('data', (bufferData) => {

    const dataObj = JSON.parse(bufferData);
    // console.log(dataObj);
    if (dataObj.event === 'pickup') {

      setTimeout(function () {
        console.log(`DRIVER: picked up ${dataObj.payload.orderID}`);
        const message = JSON.stringify({ event: 'in-transit', payload:dataObj.payload});
        client.write(message);
        
        setTimeout(function () {
          console.log(`DRIVER: delivered up ${dataObj.payload.orderID}`);
          const message = JSON.stringify({ event: 'delivered', payload:dataObj.payload});
          client.write(message);
        }, 3000);
      }, 1000);
      
      
    }
    
    // if (dataObj.event === 'pickup') {
    //   console.log(`VENDOR: Thanks you for delivering ${dataObj.payload.orderID}`)
    // }
  });
});


// events.on('pickup', (payload) => {
//   setTimeout(function () {
//     console.log(`DRIVER: picked up ${payload.orderID}`);
//     events.emit('in-transit', payload);
//   }, 1000);

//   setTimeout(function () {
//     console.log(`DRIVER: delivered up  ${payload.orderID}`);
//     events.emit('delivered', (payload));
//   }, 4000);
// });

// module.exports = events;