const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const LocationSchema = new Schema({
  address: { type: String, required: true },
  neighborhood_name: { type: Schema.Types.ObjectId, ref: "NeighborhoodSchema" },
  zip_code: { type: Number, required: true },
  borough: { type: String, required: true },
  isLot: { type: Boolean, required: true },
  location_info: { type: String, required: true },
});

module.exports = LocationSchema;
