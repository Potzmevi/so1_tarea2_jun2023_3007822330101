const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Evento de conexión de Socket.IO
io.on('connection', (socket) => {
  console.log('Un cliente se ha conectado');

  // Evento de recepción de mensaje del cliente
  socket.on('mensaje', (msg) => {
    console.log('Mensaje recibido: ' + msg);

    // Emitir el mensaje recibido a todos los clientes conectados
    io.emit('mensaje', msg);
  });

  // Evento de desconexión del cliente
  socket.on('disconnect', () => {
    console.log('Un cliente se ha desconectado');
  });
});

// Iniciar el servidor en el puerto 3000
http.listen(3000, () => {
  console.log('Servidor Socket.IO escuchando en el puerto 3000');
});
