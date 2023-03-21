import express from 'express';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import connect from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import cors from 'cors';



// dotenv config
dotenv.config();


const app = express();


// middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// routes
app.use('/api/v1/auth', authRoutes)


//listen port
const port = process.env.PORT || 8080;
app.listen(port, () => {
    connect();
    console.log(`Server is running ${process.env.NODE_MODE} mode on port ${process.env.PORT}`.bgYellow.black);
})