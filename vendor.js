'use strict';
const events = require('./events');
const faker = require('faker');
require('dotenv').config()

const storeName = process.env.STORE_NAME

setInterval(function(){events.emit('pickup', {storeName, orderId: faker.random.uuid, customerName:faker.name.findName(), address:faker.address.streetAddress()});
}, 5000);

events.on('delivered',console.log('thank you'));

