import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connection from "./connection/db.js";
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import userRoute from './routes/user.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express();
dotenv.config();

connection();


// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Routes
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err,req,res,next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something wen wrong!";
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack:err.stack,
    }) ;
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})