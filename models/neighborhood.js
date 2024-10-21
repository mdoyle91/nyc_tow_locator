const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const NeighborhoodSchema = new Schema(
  {
    neighborhood_name: { type: String, required: true },
    zip_code: { type: Number, required: true },
    borough: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = NeighborhoodSchema;
