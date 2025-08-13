// import express from "express";   -> "type":"module"
const express=require("express");
const noteRoutes = require("./routes/noteRoutes");

const app = express()

app.use("/api/notes", noteRoutes);



app.listen(5001, ()=>{
    console.log("server is running");
})