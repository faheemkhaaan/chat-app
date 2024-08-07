import express from 'express';
import { config } from 'dotenv';
import path from 'path'

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from './routes/message.routes.js';
import userRouter from './routes/user.routes.js';

import connectToMongoDb from './db/connectToMongoDb.js'; // database import

import cookieParser from 'cookie-parser';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 5000;
config()

const __dirname = path.resolve();

app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())


// app.get('/',(req,res)=>{
//     // root route http://localhost:5000
//     res.send("Hello wordl")
// })

app.use('/api/auth',authRoutes)
app.use("/api/message",messageRoutes)
app.use("/api/users",userRouter)

app.use(express.static(path.join(__dirname,'/chat-app/dist')))

app.get('*',(req,res) =>{
    res.sendFile(path.join(__dirname,"frontend", 'dist',"index.html"))
})

server.listen(PORT,() =>{
    connectToMongoDb();
    console.log(`server is listening at port ${PORT}`)
})