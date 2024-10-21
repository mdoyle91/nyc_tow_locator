const { Neighborhood } = require("../models");

const getAllNeighborhoods = async (req, res) => {
  try {
    const neighborhoods = await Neighborhood.find();
    res.json(neighborhoods);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const getNeighborhoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const neighborhood = await Neighborhood.findById(id);
    if (neighborhood) {
      return res.json(neighborhood);
    }
    return res.status(404).send(`that neighborhood with ID not found`);
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const createNeighborhood = async (req, res) => {
  try {
    const neighborhood = await new Neighborhood(req.body);
    await neighborhood.save();
    return res.status(201).json({ neighborhood });
  } catch (e) {
    return res.status(500).json({ error: error.message });
  }
};

const updateNeighborhood = async (req, res) => {
  try {
    let { id } = req.params;
    let neighborhood = await Neighborhood.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (neighborhood) {
      return res.status(200).json(neighborhood);
    }
    throw new Error("neighborhood not found");
  } catch (e) {
    return res.status(500).send(error.message);
  }
};

const deleteNeighborhood = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Neighborhood.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Neigborhood deleted");
    }
    throw new Error("Neighborhood not found");
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

const getNeighborhoodByName = async (req, res) => {
  try {
    const { name } = req.params;
    const neighborhood = await Neighborhood.findOne({
      neighborhood_name: name,
    });
    if (neighborhood) {
      return res.json(neighborhood);
    }
    return res
      .status(404)
      .send(
        `Neighborhood with name '${name}' not found. Check your capitalization.`
      );
  } catch (e) {
    return res.status(500).send(e.message);
  }
};

module.exports = {
  getAllNeighborhoods,
  getNeighborhoodById,
  createNeighborhood,
  updateNeighborhood,
  deleteNeighborhood,
  getNeighborhoodByName,
};
