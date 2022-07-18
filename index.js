// import "express" from "express";
// import "cors" from "cors";
// import "dotenv" from "dotenv";
// import "jwt" from "jsonwebtoken";

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken")


const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`))