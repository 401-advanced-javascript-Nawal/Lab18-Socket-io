'use strict';

// school
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/school');


socket.emit('join' , 'student'); 


setInterval(() =>submission(), 1000); 

const submission = () => {
  const labMark = Math.floor(Math.random() * 11); 
  socket.emit('submission' , `lab : ${labMark}`); 
};
socket.on('graded' , payload => {
  console.log(payload);
});

