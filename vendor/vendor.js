'use strict';
const faker = require('faker');
require('dotenv').config();
const io = require('socket.io-client');
const caps = io.connect('http://localhost:4000/caps');

const storeName = process.env.STORE_NAME || 'test';

caps.on('connect', () => {

  caps.emit('join', storeName);

  setInterval(function () {
    let payload = { storeName, orderID: faker.random.uuid(), customer: faker.name.findName(), address: faker.address.streetAddress() }
    caps.emit('pickup',payload)
  }, 5000)

  caps.on('delivered',(payload)=>{
      console.log(`Thanks you for delivering ${payload.orderID}`)
  })

})