'use strict';
const events = require('./events');
const faker = require('faker');
require('dotenv').config();

const storeName = process.env.STORE_NAME || 'test';

setInterval(function(){events.emit('pickup', {storeName, orderID: faker.random.uuid(), customer:faker.name.findName(), address:faker.address.streetAddress()});
}, 5000);

events.on('delivered', (payload) => console.log(`VENDOR: Thanks you for delivering ${payload.orderID}`));

module.exports = events;