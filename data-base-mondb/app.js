import express from "express";
//import router from "./route";
import router from "./route/user.js";
import route  from "./route/product.js";
import cors from 'cors'
const app  = express();
const port = 2000;
app.use(cors())
app.use(express.json());
app.use("/user", router)

app.use("/", route)
app.listen(port)