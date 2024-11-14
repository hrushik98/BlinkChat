import path from "path";
import express from "express";
import dotenv from "dotenv";

const app=express();
dotenv.config();
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import cookieParser from "cookie-parser";
/*
import { app, server } from "./socket/socket.js";
const __dirname = path.resolve();
*/

app.use(cookieParser());


const PORT = process.env.PORT || 5000;

app.use(express.json());




app.get("/",(req,res)=>{
    res.send("hello world");
})
app.use("/api/auth", authRoutes);

app.use("/api/messages",messageRoutes);

app.use("/api/users",userRoutes);



app.listen(PORT, () => {
    connectToMongoDB();
	console.log(`Server Running on port ${PORT}`);
});