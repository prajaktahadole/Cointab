
import express from "express";
import Connection from "./db/db";
import userRouter from "./routes/users.js";
import cors from "cors";
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/user", userRouter)



app.get("/",(req,res)=>{
    res.send("Welcome to Home Page")
})

app.listen( process.env.PORT || 8080, async()=>{
    await Connection
    console.log("server started at http://localhost:8080");
})

