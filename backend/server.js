// import express from "express";   -> "type":"module"
const express=require("express");
const noteRoutes = require("./routes/noteRoutes");
const { connectDB } = require("./config/db")
const dotenv = require("dotenv")

dotenv.config();

const app = express()

app.use("/api/notes", noteRoutes);

connectDB();

app.listen(5001, ()=>{
    console.log("server is running");
})


