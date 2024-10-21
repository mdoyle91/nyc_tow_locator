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
// app.get("/brands/:id", brandController.getBrandById);
// app.post("/brands", brandController.createBrand);
// app.put("/brands/:id", brandController.updateBrand);
// app.get("/brands/name/:name", brandController.getByName);

app.get("/locations", locationController.getAllLocations);
// app.get("/products/:id", productController.getProductById);
// app.post("/products", productController.createProduct);
// app.put("/products/:id", productController.updateProduct);
// app.delete("/products/:id", productController.deleteProduct);
// app.get("/products/brand/:brandName", productController.getByBrand)

app.get("/vehicles", vehicleController.getAllVehicles);
// app.get("/sausages/:id", sausageController.getSausageById);
// app.post("/sausages", sausageController.createSausage);
// app.put("/sausages/:id", sausageController.updateSausage);
// app.get("/sausages/name/:name", sausageController.getByName);
