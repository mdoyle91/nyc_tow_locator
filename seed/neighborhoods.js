const db = require("../db");
const { Neighborhood } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const neighborhoods = [
    {
      neighborhood_name: `Bed-Stuy`,
      zip_code: 11216,
      borough: `Brooklyn`,
    },
    {
      neighborhood_name: `Clinton Hill`,
      zip_code: 11238,
      borough: `Brooklyn`,
    },
    {
      neighborhood_name: `Crown Heights`,
      zip_code: 11213,
      borough: `Brooklyn`,
    },
  ];

  await Neighborhood.insertMany(neighborhoods);
  console.log("Created Neighborhoods");
};

const run = async () => {
  await main();
  db.close();
};

run();
