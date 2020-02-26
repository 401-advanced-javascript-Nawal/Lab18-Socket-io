'use strict';

// teacher
const sio = require('socket.io-client');

const socket = sio.connect('http://localhost:3000/school');

socket.emit('join' , 'teacher'); 

socket.on('submission' , payload => {
  let mark = Math.floor(Math.random() * 10);
  socket.emit('graded' , {assignment: `${payload}` , grade : `${mark}`}); 
});