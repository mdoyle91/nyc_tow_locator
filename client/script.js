//Setters

const searchButton = document.querySelector(`#searchButton`);
const searchBar = document.querySelector(`#searchBar`);
const plate = document.querySelector(`#plate`);
const state = document.querySelector(`#state`);
const dateTowed = document.querySelector(`#dateTowed`);
const parked = document.querySelector(`#location`);
const neighborhood = document.querySelector(`#neighborhood`);
const reasonTowed = document.querySelector(`#reasonTowed`);
const currentFees = document.querySelector(`#currentFees`);
const feeRate = document.querySelector(`#feeRate`);
const feeFrequency = document.querySelector(`feeFrequency`);

//Functions

searchButton.addEventListener(`click`, async () => {
  const searchTerm = searchBar.value.trim();
  if (searchTerm !== ``) {
    console.log(`${searchTerm}`);
    let response = await axios.get(
      `http://localhost:3001/vehicles/plate/${searchTerm}`
    );
    let {
      license_plate,
      plate_state,
      date_towed,
      vehicleLocation,
      vehicleNeighborhood,
      reason_towed,
      current_fees_owed,
      fee_rate,
      fee_frequency,
    } = response.data;
    plate.textContent = `Plate Number: ${license_plate}`;
    state.textContent = `State: ${plate_state}`;
    dateTowed.textContent = `Date Towed: ${date_towed}`;
    parked.textContent = `Location: ${vehicleLocation}`;
    neighborhood.textContent = `Neighborhood: ${vehicleNeighborhood}`;
    reasonTowed.textContent = `Reason Towed: ${reason_towed}`;
    currentFees.textContent = `Current Fees: $${current_fees_owed}`;
    feeRate.textContent = `Fee Rate: $${fee_rate}`;
    feeFrequency.textContent = `Fee Frequency: ${fee_frequency}`;
  }
});

//In HTML I need:
// Header, Logo, User Selection, Search Bar, Search Button, Dynamic Display Field, Update Button at bottom based on user
//In Javascript I need:
//Search Functionality-eventListener based on clicking search button
//Dynamically created displays--create DIVs in html, and used CSS to give them a display of none, the click event will dynamically create the display (need a function for the display creation)
