const mongoose = require("mongoose");
const { Schema } = mongoose;

const lugarSchema = new Schema({
  name: { type: String, required: true },
  map: { type: String, required: true },
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  images: { type: [String] },
});

const Lugar = mongoose.model("lugar", lugarSchema);

module.exports = { Lugar };
