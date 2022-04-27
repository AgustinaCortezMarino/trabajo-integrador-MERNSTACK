const axios = require("axios").default;
const config = require("config");
const mongoose = require("mongoose");
const Joi = require("joi");
const LugarSchema = require("./schemas/lugar.schema");
const { Lugar } = require("../models/lugar.model");

async function getLugares(req, res) {
  try {
    const response = await Lugar.find({});
    res.status(200).json(response);
  } catch (err) {
    const error = new Error();
    Object.assign(error, {
      code: "BAD REQUEST",
      message: err.details[0].message,
      severity: "LOW",
    });
    res.status(400).json(error);
  }
}
async function getLugar(req, res) {
  try {
    const id = mongoose.Types.ObjectId(req.params);
    const response = await Lugar.findById(id);
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    const error = new Error();
    Object.assign(error, {
      code: "BAD REQUEST",
      message: err.details[0].message,
      severity: "LOW",
    });
    res.status(400).json(error);
  }
}
async function createLugar(req, res) {
  const data = req.body;
  try {
    Joi.assert(data, LugarSchema);
    const lugar = new Lugar(data);
    const response = await lugar.save();
    res.status(200).json(response);
  } catch (err) {
    const error = new Error();
    Object.assign(error, {
      code: "BAD REQUEST",
      message: err.details[0].message,
      severity: "LOW",
    });
    res.status(400).json(error);
  }
}
async function editLugar(req, res) {
  const id = mongoose.Types.ObjectId(req.params);
  const data = req.body;
  try {
    Joi.assert(data, LugarSchema);
    const response = await Lugar.update({ id }, data);
    res.status(200).json(response);
  } catch (err) {
    const error = new Error();
    Object.assign(error, {
      code: "BAD REQUEST",
      message: err.details[0].message,
      severity: "LOW",
    });
    res.status(400).json(error);
  }
}
async function deleteLugar(req, res) {
  const id = mongoose.Types.ObjectId(req.params);
  try {
    const response = await Lugar.delete(id);
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    const error = new Error();
    Object.assign(error, {
      code: "BAD REQUEST",
      message: err.details[0].message,
      severity: "LOW",
    });
    res.status(400).json(error);
  }
}
module.exports = {
  getLugares,
  getLugar,
  createLugar,
  editLugar,
  deleteLugar,
};
