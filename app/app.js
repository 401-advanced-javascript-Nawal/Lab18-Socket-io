'use strict';

// school
const sio = require('socket.io-client');
const socket = sio.connect('http://localhost:3000/school');


socket.emit('join' , 'student'); 

// setup a time interval for msgs
setInterval(() =>submission(), 1000); 

const submission = () => {
  const mark = Math.floor(Math.random() * 11); 
  socket.emit('submission' , `lab : ${mark}`); 
};
socket.on('graded' , payload => {
  console.log(payload);
});

