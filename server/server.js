'use strict';

// server listening on port # 3000 by using socket.io
const sio = require('socket.io')(3000);
// const socket = sio.connect('http://localhost:3000/school');

// make a connection
sio.on('connection', (socket) => {
  console.log('connection', socket.id);
});

// new namespace for school
const school = sio.of('/school');

school.on('connection', (socket) => {
  console.log('SCHOOL', socket.id);

  // to be able to join to the room 
  school.on('join', room => {
    console.log('joined', room);
    socket.join(room);
  });

  school.on('submission ', payload => {
    // send submission
    school.to('teacher').emit('submission' , payload);
  });

  school.on('graded', room => {
    //send grade
    school.to('student').emit('graded' , payload); 
  });

}); // end of school namespace
