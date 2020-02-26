'use strict';

// server listening on port # 3000 by using socket.io
const sio = require('socket.io')(3000);
// new namespace for school
const school = sio.of('/school');

// make a connection
sio.on('connection', (socket) => {
  console.log('connection', socket.id);
});

/************************************************** school *****************************************************/
// make a connection for school 
school.on('connection', (socket) => {
  console.log('SCHOOL', socket.id);

  // to be able to join to the room 
  school.on('join', room => {
    console.log('joined', room);
    socket.join(room);
  });

  // lab requirment
  socket.on('submission ', payload => {
    // send submission
    school.to('teacher').emit('submission' , payload);
  });

  socket.on('graded', payload => {
    //send grade
    school.to('student').emit('graded' , payload); 
  });

}); // end of school namespace
