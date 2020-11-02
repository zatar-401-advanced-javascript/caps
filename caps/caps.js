const net = require('net');
const uuidv4 = require('uuid').v4;
const PORT = process.env.PORT || 4000;

const server = net.createServer();
server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
const socketPool = {};

server.on('connection', (socket) => {
  console.log('Socket Connected!');
  const id = `socket-${uuidv4()}`;
  socketPool[id] = socket;
  socket.on('data', (buffer) => dispatchEvent(buffer));
  socket.on('error', (e) => console.log('SOCKET ERROR', e.message));
  socket.on('end', (id) => delete socketPool[id]);
});

server.on('error', (e) => console.log('SERVER ERROR', e.message));

function dispatchEvent(buffer) {
  for (let socket in socketPool) {
    socketPool[socket].write(buffer);
  }

  const data = JSON.parse(buffer.toString().trim());
  if(data.event == 'pickup'){
    log('pickup',data);
  }
  if(data.event == 'in-transit'){
    log('in-transit',data);
  }
  if(data.event == 'delivered'){
    log('delivered',data);
  }
}

// events.on('pickup', (payload) => log('pickup',payload));
// events.on('in-transit', (payload) => log('in-transit',payload));
// require('./vendor');
// require('./driver');
// events.on('delivered', (payload) => log('delivered',payload));

function log(event, payload) {
  console.log('EVENT',{ event, time: new Date(), payload });
}

// module.exports = events;