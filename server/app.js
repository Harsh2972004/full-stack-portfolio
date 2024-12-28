// app.js

const express = require("express");
const cors = require("cors");
const projectRouter = require("./routes/api/projects");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");

const app = express();

// configuring cors
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// use the routes module as the middleware
// for the /api/projects path
app.use("/projects", projectRouter);

// connecting to MongoDB database
connectDB();

app.get("/", (req, res) => res.send("hello world"));

const port = process.env.PORT || 8002;

app.listen(port, () => console.log(`server running on pert ${port}`));
