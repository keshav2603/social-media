import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app= express();
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));
const corsOptions ={
    origin:"http://localhost:5173",
    Credentials:true
}
app.use(cors(corsOptions));


export {app};