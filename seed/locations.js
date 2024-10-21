const db = require("../db");
const { Neighborhood, Location } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const bedstuy = await Neighborhood.find({ neighborhood_name: `Bed-Stuy` });
  const clintonHill = await Neighborhood.find({
    neighborhood_name: `Clinton Hill`,
  });
  const crownHeights = await Neighborhood.find({
    neighborhood_name: `Crown Heights`,
  });

  const locations = [
    {
      address: "123 Fulton St",
      neighborhood_name: bedstuy._id, // Used ChatGPT to populate all of the data in the schemas for locations
      zip_code: 11216,
      borough: "Brooklyn",
      isLot: true,
      location_info: "Vacant lot near the park",
    },
    {
      address: "456 Nostrand Ave",
      neighborhood_name: bedstuy._id,
      zip_code: 11216,
      borough: "Brooklyn",
      isLot: false,
      location_info: "Residential building with 3 floors",
    },
    {
      address: "789 Bedford Ave",
      neighborhood_name: bedstuy._id,
      zip_code: 11216,
      borough: "Brooklyn",
      isLot: false,
      location_info: "Commercial space near subway station",
    },
    {
      address: "101 Dekalb Ave",
      neighborhood_name: clintonHill._id,
      zip_code: 11238,
      borough: "Brooklyn",
      isLot: true,
      location_info: "Large lot next to the library",
    },
    {
      address: "202 Vanderbilt Ave",
      neighborhood_name: clintonHill._id,
      zip_code: 11238,
      borough: "Brooklyn",
      isLot: false,
      location_info: "Historic brownstone, 4 floors",
    },
    {
      address: "303 Washington Ave",
      neighborhood_name: clintonHill._id,
      zip_code: 11238,
      borough: "Brooklyn",
      isLot: false,
      location_info: "Modern apartment complex",
    },
    {
      address: "111 Eastern Parkway",
      neighborhood_name: crownHeights._id,
      zip_code: 11213,
      borough: "Brooklyn",
      isLot: true,
      location_info: "Open lot near the botanical garden",
    },
    {
      address: "222 Franklin Ave",
      neighborhood_name: crownHeights._id,
      zip_code: 11213,
      borough: "Brooklyn",
      isLot: false,
      location_info: "Multi-family residence",
    },
    {
      address: "333 Nostrand Ave",
      neighborhood_name: crownHeights._id,
      zip_code: 11213,
      borough: "Brooklyn",
      isLot: false,
      location_info: "Retail storefront on main street",
    },
  ];

  await Location.insertMany(locations);
  console.log("Added locations");
};

const run = async () => {
  await main();
  db.close();
};

run();
