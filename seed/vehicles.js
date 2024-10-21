const db = require("../db");
const { Neighborhood, Location, Vehicle } = require("../models");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const bedstuy = await Neighborhood.find({ neighborhood_name: `Bed-Stuy` });
  const clintonHill = await Neighborhood.find({
    neighborhood_name: `Clinton Hill`,
  });
  const crownHeights = await Neighborhood.find({
    neighborhood_name: `Crown Heights`,
  });
  const fulton = await Location.find({ address: `123 Fulton St` }); //Used ChatGPT to generate these constants and the data that populates the schemas.
  const nostrandBedStuy = await Location.find({ address: `456 Nostrand Ave` });
  const bedford = await Location.find({ address: `789 Bedford Ave` });
  const dekalb = await Location.find({ address: `101 Dekalb Ave` });
  const vanderbilt = await Location.find({ address: `202 Vanderbilt Ave` });
  const washington = await Location.find({ address: `303 Washington Ave` });
  const easternParkway = await Location.find({
    address: `111 Eastern Parkway`,
  });
  const franklin = await Location.find({ address: `222 Franklin Ave` });
  const nostrandCrownHeights = await Location.find({
    address: `333 Nostrand Ave`,
  });

  const vehicles = [
    {
      license_plate: "ABC1234",
      plate_state: "NY",
      vin: "1HGCM82633A123456",
      make: "Toyota",
      model: "Camry",
      wasTowed: true,
      date_towed: "2023-05-12",
      location: fulton._id,
      neighborhood: bedstuy._id,
      reason_towed: "Parking in a no-parking zone",
      current_fees_owed: 150,
      feesAccumulate: true,
      fee_rate: 10,
      fee_frequency: "daily",
    },
    {
      license_plate: "XYZ9876",
      plate_state: "NY",
      vin: "2T1BURHE4FC123456",
      make: "Honda",
      model: "Civic",
      wasTowed: true,
      date_towed: "2023-08-25",
      location: fulton._id,
      neighborhood: bedstuy._id,
      reason_towed: "Expired registration",
      current_fees_owed: 120,
      feesAccumulate: true,
      fee_rate: 8,
      fee_frequency: "daily",
    },
    {
      license_plate: "LMN4567",
      plate_state: "NY",
      vin: "1FTRW12W34KA12345",
      make: "Ford",
      model: "F-150",
      wasTowed: true,
      date_towed: "2024-02-18",
      location: nostrandBedStuy._id,
      neighborhood: bedstuy._id,
      reason_towed: "Double parked",
      current_fees_owed: 200,
      feesAccumulate: true,
      fee_rate: 15,
      fee_frequency: "daily",
    },
    {
      license_plate: "DEF5678",
      plate_state: "NY",
      vin: "1J4FA49S93P123456",
      make: "Jeep",
      model: "Wrangler",
      wasTowed: true,
      date_towed: "2023-11-10",
      location: dekalb._id,
      neighborhood: clintonHill._id,
      reason_towed: "Obstructing a fire hydrant",
      current_fees_owed: 180,
      feesAccumulate: true,
      fee_rate: 12,
      fee_frequency: "daily",
    },
    {
      license_plate: "GHI6789",
      plate_state: "NY",
      vin: "5N1AL0MM5FC123456",
      make: "Infiniti",
      model: "QX60",
      wasTowed: true,
      date_towed: "2024-03-01",
      location: dekalb._id,
      neighborhood: clintonHill._id,
      reason_towed: "Blocking driveway",
      current_fees_owed: 250,
      feesAccumulate: true,
      fee_rate: 20,
      fee_frequency: "daily",
    },
    {
      license_plate: "JKL9012",
      plate_state: "NY",
      vin: "1FAFP53U4WA123456",
      make: "Ford",
      model: "Taurus",
      wasTowed: true,
      date_towed: "2024-05-19",
      location: vanderbilt._id,
      neighborhood: clintonHill._id,
      reason_towed: "Blocking fire lane",
      current_fees_owed: 220,
      feesAccumulate: true,
      fee_rate: 15,
      fee_frequency: "daily",
    },
    {
      license_plate: "MNO3456",
      plate_state: "NY",
      vin: "1C4BJWEG9FL123456",
      make: "Jeep",
      model: "Cherokee",
      wasTowed: true,
      date_towed: "2024-01-11",
      location: easternParkway._id,
      neighborhood: crownHeights._id,
      reason_towed: "Blocking crosswalk",
      current_fees_owed: 300,
      feesAccumulate: true,
      fee_rate: 25,
      fee_frequency: "daily",
    },
    {
      license_plate: "PQR5678",
      plate_state: "NY",
      vin: "3VWD07AJ7EM123456",
      make: "Volkswagen",
      model: "Jetta",
      wasTowed: true,
      date_towed: "2024-06-20",
      location: easternParkway._id,
      neighborhood: crownHeights._id,
      reason_towed: "Illegal parking",
      current_fees_owed: 180,
      feesAccumulate: true,
      fee_rate: 12,
      fee_frequency: "daily",
    },
    {
      license_plate: "STU7890",
      plate_state: "NY",
      vin: "2C3CDXHG2JH123456",
      make: "Dodge",
      model: "Charger",
      wasTowed: true,
      date_towed: "2023-09-05",
      location: franklin._id,
      neighborhood: crownHeights._id,
      reason_towed: "Unpaid parking tickets",
      current_fees_owed: 400,
      feesAccumulate: true,
      fee_rate: 30,
      fee_frequency: "daily",
    },
    {
      license_plate: "UVW1234",
      plate_state: "NY",
      vin: "1N4AL3AP5JC123456",
      make: "Nissan",
      model: "Altima",
      wasTowed: true,
      date_towed: "2024-04-10",
      location: bedford._id,
      neighborhood: bedstuy._id,
      reason_towed: "Parked at a bus stop",
      current_fees_owed: 170,
      feesAccumulate: true,
      fee_rate: 12,
      fee_frequency: "daily",
    },
    {
      license_plate: "XYZ6789",
      plate_state: "NY",
      vin: "4T1BF1FK7HU123456",
      make: "Toyota",
      model: "Corolla",
      wasTowed: true,
      date_towed: "2023-12-15",
      location: washington._id,
      neighborhood: clintonHill._id,
      reason_towed: "Expired inspection sticker",
      current_fees_owed: 130,
      feesAccumulate: true,
      fee_rate: 10,
      fee_frequency: "daily",
    },
    {
      license_plate: "DEF3456",
      plate_state: "NY",
      vin: "3VWFA7AT4FM123456",
      make: "Volkswagen",
      model: "Passat",
      wasTowed: true,
      date_towed: "2024-07-21",
      location: nostrandCrownHeights._id,
      neighborhood: crownHeights._id,
      reason_towed: "Parked in front of a fire hydrant",
      current_fees_owed: 210,
      feesAccumulate: true,
      fee_rate: 15,
      fee_frequency: "daily",
    },
  ];

  await Vehicle.insertMany(vehicles);
  console.log("Created vehicles with locations!");
};

const run = async () => {
  await main();
  db.close();
};

run();
