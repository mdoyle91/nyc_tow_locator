const express = require("express");
const db = require("./db");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const neighborhoodController = require("./controllers/neighborhoodController");
const locationController = require("./controllers/locationController");
const vehicleController = require("./controllers/vehicleController");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

app.get("/", (req, res) => res.send("This is our landing page!"));

app.get("/neighborhoods", neighborhoodController.getAllNeighborhoods);
app.get("/neighborhoods/:id", neighborhoodController.getNeighborhoodById);
app.post("/neighborhoods", neighborhoodController.createNeighborhood);
app.put("/neighborhoods/:id", neighborhoodController.updateNeighborhood);
app.delete("/neighborhoods/:id", neighborhoodController.deleteNeighborhood);
app.get(
  "/neighborhoods/neighborhood/:name",
  neighborhoodController.getNeighborhoodByName
);

app.get("/locations", locationController.getAllLocations);
app.get("/locations/:id", locationController.getLocationById);
app.post("/locations", locationController.createLocation);
app.put("/locations/:id", locationController.updateLocation);
app.delete("/locations/:id", locationController.deleteLocation);
app.get("/locations/address/:name", locationController.getLocationByAddress);

app.get("/vehicles", vehicleController.getAllVehicles);
app.get("/vehicles/:id", vehicleController.getVehicleById);
app.post("/vehicles", vehicleController.createVehicle);
app.put("/vehicles/:id", vehicleController.updateVehicle);
app.delete("/vehicles/:id", vehicleController.deleteVehicle);
app.get("/vehicles/plate/:name", vehicleController.getVehicleByPlate);
app.get("/vehicles/vin/:name", vehicleController.getVehicleByVin);
