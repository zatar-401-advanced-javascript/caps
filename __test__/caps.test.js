'use strict';
// const caps = require('../caps');
jest.spyOn(global.console,'log');

xdescribe('CAPS',()=>{
  it('logger method for pickup event',()=>{
    caps.emit('pickup','test');
    expect(console.log).toHaveBeenCalled();
  });
  it('logger method for in-transit event',()=>{
    caps.emit('in-transit','test');
    expect(console.log).toHaveBeenCalled();
  });
  it('logger method for delivered event',()=>{
    caps.emit('delivered','test');
    expect(console.log).toHaveBeenCalled();
  });
});