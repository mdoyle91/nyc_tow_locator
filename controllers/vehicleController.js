const { Vehicle } = require("../models");

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getVehicleById = async (req, res) => {
  try {
    const { id } = req.params;
    const vehicle = await Vehicle.findById(id);
    if (vehicle) {
      return res.json(vehicle);
    }
    return res.status(404).send(`that vehicle with ID not found`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createVehicle = async (req, res) => {
  try {
    const vehicle = await new Vehicle(req.body);
    await vehicle.save();
    return res.status(201).json({ vehicle });
  } catch (e) {
    return res.status(500).json({ error: error.message });
  }
};

const updateVehicle = async (req, res) => {
  try {
    let { id } = req.params;
    let vehicle = await Vehicle.findByIdAndUpdate(id, req.body, { new: true });
    if (vehicle) {
      return res.status(200).json(vehicle);
    }
    throw new Error("vehicle not found");
  } catch (e) {
    return res.status(500).send(error.message);
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Vehicle.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Vehicle deleted");
    }
    throw new Error("Vehicle not found");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getVehicleByPlate = async (req, res) => {
  try {
    const { name } = req.params;
    const vehicle = await Vehicle.findOne({ license_plate: name });
    if (vehicle) {
      return res.json(vehicle);
    }
    return res
      .status(404)
      .send(
        `Vehicle with plate '${name}' not found. Check your capitalization.`
      );
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getVehicleByVin = async (req, res) => {
  try {
    const { name } = req.params;
    const vehicle = await Vehicle.findOne({ vin: name });
    if (vehicle) {
      return res.json(vehicle);
    }
    return res
      .status(404)
      .send(`Vehicle with VIN '${name}' not found. Check your capitalization.`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = {
  getAllVehicles,
  getVehicleById,
  createVehicle,
  updateVehicle,
  deleteVehicle,
  getVehicleByPlate,
  getVehicleByVin,
};
