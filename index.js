import dotenv from "dotenv";
import express from "express";
import router from "./src/routes/routes.js";

const app = express()

dotenv.config();

app.use("/", router);

const port = process.env.PORT7878;

app.use(express.json());

app.listen(port, ()=>{
   console.log(`The server is running in the port ${port}`);
})