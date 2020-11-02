// 'use strict';
// const vendor = require('../vendor');

// xdescribe('Vendor Module',()=>{
//   beforeEach(() => {
//     jest.spyOn(global.console,'log');
//     jest.useFakeTimers();
//   });
//   it('VENDOR log when deliver is done',()=>{
//     const payload = {orderID:'test'};
//     vendor.emit('delivered',payload);
//     expect(console.log).toHaveBeenCalledWith(`VENDOR: Thanks you for delivering ${payload.orderID}`);
//   });
//   it('emit for pickup',()=>{
//     const payload = {orderID:'test'};
//     vendor.on('pickup',payload=>{console.log('test');});
//     vendor.emit('pickup',payload);
//     jest.runAllTimers();
//     expect(console.log).toHaveBeenCalledWith(`test`);
//   });
// });