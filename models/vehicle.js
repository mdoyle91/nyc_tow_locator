const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const VehicleSchema = new Schema({
  license_plate: { type: String, required: true },
  plate_state: { type: String, required: true },
  vin: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  wasTowed: { type: Boolean, required: true },
  date_towed: { type: String, required: true },
  location: { type: String, required: true },
  neighborhood: { type: String, required: true },
  reason_towed: { type: String, required: true },
  current_fees_owed: { type: Number, required: true },
  feesAccumulate: { type: Boolean, required: true },
  fee_rate: { type: Number, required: true },
  fee_frequency: { type: String, required: true },
});

module.exports = VehicleSchema;
