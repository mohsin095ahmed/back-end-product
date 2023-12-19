import express from "express";
//import router from "./route";
import router from "./route/user.js";
import route  from "./route/product.js";
import cors from 'cors'
//import mongoose from "./db/product.js";
import mongoose from "./db/product.js";
import UploadRouter from "./route/upload.js";
import {Server} from "socket.io"
import { createServer } from "http";

const app  = express();
const port = 2000;
app.use(cors())
app.use(express.json());
 const db = mongoose.connection;
 db.on("error", console.error.bind(console, "conection err:"));
 db.once("open", ()=>{
    console.log("data base conected")});



    

    app.use("/user", router)
app.use("/upload", UploadRouter);



app.use("/", route)
// app.listen(port, ()=>{
//     console.log("startr server")
// })
const httpServer= createServer(app);
    const io = new Server(httpServer, {cors:"*"})
    io.on("connection", (socket)=>{
        console.log("made this connections")
        socket.on("add product",(data)=>{
            console.log("product, ",data);
            io.emit("send", data);
        })
    })

httpServer.listen(port, ()=>{
    console.log("start the project for port on 2000")
})