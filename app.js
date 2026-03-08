import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';  // Import the CORS middleware
import socketHandler from './socketHandler.js';

const app = express();
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Create an HTTP server using the Express app
const server = http.createServer(app);
// Initialize Socket.IO server  
const io = new Server(server, {
  cors: { // use of cors in socket.io server configuration to allow cross-origin requests from any origin and specify allowed HTTP methods for socket.io connections. 
    origin: '*',
    methods: ['GET', 'POST']
  }
});

socketHandler(io);

export default server;

