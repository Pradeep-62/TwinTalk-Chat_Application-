import express from "express";
import colors from "colors";
import cors from "cors";
import connectDB  from './config/mongoDB.js';
import dotenv from  "dotenv";
import user_router from "./routes/user_routers.js";
import cookieParser from "cookie-parser";



dotenv.config();

connectDB();


const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser())
app.use(cors());
const corsOption={
  origin:'http://localhost:3000',
  credentials:true
};
app.use(cors(corsOption)); 


app.use('/api/v1/auth',user_router);


const PORT=process.env.PORT || 5050
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`.bgCyan.white);
  });
  