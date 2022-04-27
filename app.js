const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const Router = require("./src/routes/lugares");
const app = express();

const mongoose = require("mongoose");
const mongooseConnectionString = config.get("db.con.conString");
mongoose
  .connect(mongooseConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to DB"))
  .catch((err) => {
    throw err;
  });

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//complete with your resource
app.use("/lugares", Router);

module.exports = app;
