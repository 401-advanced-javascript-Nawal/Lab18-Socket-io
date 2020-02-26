'use strict';

// teacher
const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000/school');

socket.emit('join' , 'teacher'); 

socket.on('submission' , payload => {
  let gradMark = Math.floor(Math.random() * 11);
  socket.emit('graded' , {assignment: `${payload}` , grade : `${gradMark}`}); 
});