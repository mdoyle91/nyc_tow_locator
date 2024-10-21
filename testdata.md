{
neighborhood_name: "Fort Greene",
zip_code: 11205,
borough: "Brooklyn"
}

{
address: "400 Myrtle Ave",
neighborhood_name: clintonHill.\_id, // Refers to Clinton Hill
zip_code: 11205,
borough: "Brooklyn",
isLot: false, // This is not a lot
location_info: "Street parking near residential area"
}

{
license_plate: "GHI7890",
plate_state: "NY",
vin: "1FTFW1EF3BKD123456",
make: "Ford",
model: "F-150",
wasTowed: true,
date_towed: "2024-09-30",
location: myrtleAve.\_id, // Refers to the new location at 400 Myrtle Ave
neighborhood: clintonHill.\_id, // Refers to Clinton Hill
reason_towed: "Overstayed meter time",
current_fees_owed: 140,
feesAccumulate: true,
fee_rate: 10,
fee_frequency: "daily",
}