import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkMiddleware, requireAuth } from '@clerk/express'
import aiRouter from './routes/aiRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import userRouter from './routes/userRoutes.js';

const app = express() // create express app

await connectCloudinary()// connect to cloudinary

app.use(cors()) // to enable CORS
app.use(express.json()) // to parse JSON request bodies
app.use(clerkMiddleware()) // Clerk middleware to handle authentication

app.get('/', (req, res)=>res.send('Server is Live!'))

app.use(requireAuth()) // from this line onwards, all routes are protected

app.use('/api/ai', aiRouter)
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log('Server is running on port', PORT);
})