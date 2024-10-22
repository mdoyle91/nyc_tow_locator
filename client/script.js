//Setters

const searchButton = document.querySelector(`#searchButton`);
const searchBar = document.querySelector(`#searchBar`);
const plate = document.querySelector(`#plate`);
const state = document.querySelector(`#state`);
const dateTowed = document.querySelector(`#dateTowed`);
const parked = document.querySelector(`#location`);
const neighborhoodTowed = document.querySelector(`#neighborhood`);
const reasonTowed = document.querySelector(`#reasonTowed`);
const currentFees = document.querySelector(`#currentFees`);
const feeRate = document.querySelector(`#feeRate`);
const feeFrequency = document.querySelector(`#feeFrequency`);

//Function to Pull Info Regarding Towed Cars

searchButton.addEventListener(`click`, async () => {
  const searchTerm = searchBar.value.trim();
  let criteria = await axios.get(
    `http://localhost:3001/vehicles/plate/${searchTerm}`
  );

  if (searchTerm === criteria.data.license_plate) {
    let response = await axios.get(
      `http://localhost:3001/vehicles/plate/${searchTerm}`
    );
    {
      let {
        license_plate,
        plate_state,
        date_towed,
        location,
        neighborhood,
        reason_towed,
        current_fees_owed,
        fee_rate,
        fee_frequency,
      } = response.data;
      let neighborhoodReference = await axios.get(
        `http://localhost:3001/neighborhoods/${neighborhood}`
      );
      let locationReference = await axios.get(
        `http://localhost:3001/locations/${location}`
      );
      plate.textContent = `Plate Number: ${license_plate}`;
      state.textContent = `State: ${plate_state}`;
      dateTowed.textContent = `Date Towed: ${date_towed}`;
      parked.textContent = `Location: ${locationReference.data.address}`;
      neighborhoodTowed.textContent = `Neighborhood: ${neighborhoodReference.data.neighborhood_name}`;
      reasonTowed.textContent = `Reason Towed: ${reason_towed}`;
      currentFees.textContent = `Current Fees: $${current_fees_owed}`;
      feeRate.textContent = `Fee Rate: $${fee_rate}`;
      feeFrequency.textContent = `Fee Frequency: ${fee_frequency}`;
    }
  }
});
//Having difficulty trying to integrate the search via VIN into the searchbar functionality.
// } else {
//   let response = await axios.get(
//     `http://localhost:3001/vehicles/vin/${searchTerm}`
//   );
//   {
//     let {
//       license_plate,
//       plate_state,
//       date_towed,
//       location,
//       neighborhood,
//       reason_towed,
//       current_fees_owed,
//       fee_rate,
//       fee_frequency,
//     } = response.data;
//     let neighborhoodReference = await axios.get(
//       `http://localhost:3001/neighborhoods/${neighborhood}`
//     );
//     let locationReference = await axios.get(
//       `http://localhost:3001/locations/${location}`
//     );
//     plate.textContent = `Plate Number: ${license_plate}`;
//     state.textContent = `State: ${plate_state}`;
//     dateTowed.textContent = `Date Towed: ${date_towed}`;
//     parked.textContent = `Location: ${locationReference.data.address}`;
//     neighborhoodTowed.textContent = `Neighborhood: ${neighborhoodReference.data.neighborhood_name}`;
//     reasonTowed.textContent = `Reason Towed: ${reason_towed}`;
//     currentFees.textContent = `Current Fees: $${current_fees_owed}`;
//     feeRate.textContent = `Fee Rate: $${fee_rate}`;
//     feeFrequency.textContent = `Fee Frequency: ${fee_frequency}`;
//   }
// }

//In HTML I need:
// Header, Logo, User Selection, Search Bar, Search Button, Dynamic Display Field, Update Button at bottom based on user
//In Javascript I need:
//Search Functionality-eventListener based on clicking search button
//Dynamically created displays--create DIVs in html, and used CSS to give them a display of none, the click event will dynamically create the display (need a function for the display creation)

//Front end CUD functionality--Utilized this source throughout for guidance in the code https://agirlcodes.medium.com/build-a-crud-todo-app-with-vanilla-javascript-and-fetch-api-44a664c0de52

const localHostAddress = `http://localhost:3001/vehicles`;
const newVehicleInput = document.querySelector(`#new-vehicle input`);
let submitButton = document.querySelector(`#submit`);

async function getVehicles() {
  try {
    const response = await fetch(localHostAddress);
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createVehicle(data) {
  try {
    const response = await fetch(localHostAddress, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result.message);
  } catch (error) {
    console.error("Error", error);
  }
}

async function addVehicle() {
  const data = { title: newVehicleInput.value };
  await createVehicle(data);
  displayVehicles();
  newVehicleInput.value = "";
}

async function displayVehicles() {
  const vehicleList = await getVehicles();
  console.log(vehicleList);
  let vehicleListContainer = document.querySelector(`#vehicles`);

  // if (vehicleList.length == 0) {
  if (!vehicleList) {
    vehicleListContainer.innerHTML += `
    <div class="vehicle">
      <span> Loading Vehicles... </span>
    </div>
    `;
  } else {
    vehicleList.forEach((vehicle) => {
      vehicleListContainer.innerHTML += `
      <div class="vehicle">
        <span>${vehicle.license_plate}</span>  
        
        <div class="actions">
          <button class="edit">
            <i class="fas fa-edit></i>
          </button>
          <button class="delete">
          <i class="far fa-trash-alt"></i>
          </button>
        </div>
      
        </div>
      `;
    });
  }
}

submitButton.addEventListener(`click`, () => addVehicle());

displayVehicles();

// const onload = async () => {
//   await getVehicles();
//   displayVehicles();
// };

// onload();
