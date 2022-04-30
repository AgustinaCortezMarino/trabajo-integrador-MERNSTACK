const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const Router = require("./src/routes/lugares");
const app = express();
const config = require("config");
require("dotenv").config();
const mongoose = require("mongoose");
const { MONGODB_DB } = config.get("database.mongodb");

const MONGODB_URI = `mongodb+srv:/${MONGODB_DB}`;

async function connectToDB() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Database is connected");
  } catch (error) {
    console.log(err);
  }
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//complete with your resource
app.use("/lugares", Router);

module.exports = app;
