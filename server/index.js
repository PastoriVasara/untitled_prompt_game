import http from 'http';
import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import { Server } from 'socket.io'; 
import cors from 'cors';

dotenv.config();

const app = express();
const server = http.createServer(app);

const io = new Server(server);
let origin = process.env.ORIGIN;
app.use(helmet({
    crossOriginResourcePolicy: false
}));

app.use(cors({
    credentials: true,
    origin: origin,
    optionsSuccessStatus: 200,
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

server.listen(8080, () => {
    console.log('listening on *:8080');
});