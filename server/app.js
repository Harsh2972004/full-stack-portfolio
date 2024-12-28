// app.js

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// configuring cors
app.use(cors());

// connecting to MongoDB database
connectDB();

app.get("/", (res, req) => res.send("hello world"));

const port = process.env.PORT || 8002;

app.listen(port, () => console.log(`server running on pert ${port}`));
