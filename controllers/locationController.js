const { Location } = require("../models");

const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getLocationById = async (req, res) => {
  try {
    const { id } = req.params;
    const location = await Location.findById(id);
    if (location) {
      return res.json(location);
    }
    return res.status(404).send(`that location with ID not found`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createLocation = async (req, res) => {
  try {
    const location = await new Location(req.body);
    await location.save();
    return res.status(201).json({ location });
  } catch (e) {
    return res.status(500).json({ error: error.message });
  }
};

const updateLocation = async (req, res) => {
  try {
    let { id } = req.params;
    let location = await Location.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (location) {
      return res.status(200).json(location);
    }
    throw new Error("location not found");
  } catch (e) {
    return res.status(500).send(error.message);
  }
};

const deleteLocation = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Location.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Location deleted");
    }
    throw new Error("Location not found");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getLocationByAddress = async (req, res) => {
  try {
    const { name } = req.params;
    const location = await Location.findOne({ address: name });
    if (location) {
      return res.json(location);
    }
    return res
      .status(404)
      .send(
        `Location with the address at '${name}' not found. Check your capitalization.`
      );
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocation,
  deleteLocation,
  getLocationByAddress,
};
