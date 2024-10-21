const { Vehicle } = require("../models");

const getAllVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// const getBrandById = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const brand = await Brand.findById(id);
//     if (brand) {
//       return res.json(brand);
//     }
//     return res.status(404).send(`that brand with ID not found`);
//   } catch (e) {
//     return res.status(500).send(e.message);
//   }
// };

// const createBrand = async (req, res) => {
//   try {
//     const brand = await new Brand(req.body);
//     await brand.save();
//     return res.status(201).json({ brand });
//   } catch (e) {
//     return res.status(500).json({ error: error.message });
//   }
// };

// const updateBrand = async (req, res) => {
//   try {
//     let { id } = req.params;
//     let brand = await Brand.findByIdAndUpdate(id, req.body, { new: true });
//     if (brand) {
//       return res.status(200).json(brand);
//     }
//     throw new Error("brand not found");
//   } catch (e) {
//     return res.status(500).send(error.message);
//   }
// };

// const getByName = async (req, res) => {
//   try {
//     const { name } = req.params;
//     const brand = await Brand.findOne({ brand_name: name });
//     if (brand) {
//       return res.json(brand);
//     }
//     return res.status(404).send(`Brand with name '${name}' not found. Check your capitalization.`);
//   } catch (e) {
//     return res.status(500).send(e.message);
//   }
// }

module.exports = {
  getAllVehicles,
  //   getBrandById,
  //   createBrand,
  //   updateBrand,
  //   getByName
};
