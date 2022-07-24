const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', function() {
  console.log("WaterFull please turn of the motor!");

  setTimeout(() =>{
    console.log("WaterFull please turn off the motor! Its gentle reminder!");
  },3000);

});
myEmitter.emit('WaterFull');