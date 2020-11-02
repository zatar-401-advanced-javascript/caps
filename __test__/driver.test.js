'use strict';
// const driver = require('../driver');

xdescribe('Drivers Module',()=>{
  beforeEach(() => {
    jest.spyOn(global.console,'log');
    jest.useFakeTimers();
  });
  it('DRIVER log when order picked',()=>{
    const payload = {orderID:'test'};
    driver.emit('pickup',payload);
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderID}`);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 4000);
  });
  it('DRIVER log when order delivered',()=>{
    const payload = {orderID:'test'};
    driver.emit('pickup',payload);
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledWith(`DRIVER: delivered up  ${payload.orderID}`);
    expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 4000);
  });
  it('emit for in-transit',()=>{
    const payload = {orderID:'test'};
    driver.on('in-transit',payload=>{console.log('test');});
    driver.emit('pickup',payload);
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledWith(`test`);
  });
  it('emit for delivered',()=>{
    const payload = {orderID:'test'};
    driver.on('delivered',payload=>{console.log('test');});
    driver.emit('pickup',payload);
    jest.runAllTimers();
    expect(console.log).toHaveBeenCalledWith(`test`);
  });
});