import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import cors from 'cors';
import socketHandler from './socketHandler.js';

const app = express();
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

socketHandler(io);

export default server;

