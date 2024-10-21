const mongoose = require("mongoose");
const neighborhoodSchema = require("./neighborhood");
const locationSchema = require("./location");
const vehicleSchema = require("./vehicle");

const Neighborhood = mongoose.model("Neighborhood", neighborhoodSchema);
const Location = mongoose.model("Location", locationSchema);
const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = {
  Neighborhood,
  Location,
  Vehicle,
};
