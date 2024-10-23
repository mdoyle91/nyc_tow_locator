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
  console.log(`Searching for:`, searchTerm);
  try {
    //Got the suggestion to input a try from ChatGPT
    let vinResponse = await axios.get(
      `http://localhost:3001/vehicles/vin/${searchTerm}`
    );

    if (vinResponse.data && vinResponse.data.vin === searchTerm) {
      console.log("Vehicle found by VIN:", vinResponse.data);
      await displayVehicleData(vinResponse.data);
      return;
    } else {
      console.log("No vehicle found by VIN, checking license plate...");
    }
  } catch (error) {
    console.log(
      `Vin search error: ${
        error.response ? error.response.data : error.message
      }`
    );
  }

  try {
    let plateResponse = await axios.get(
      `http://localhost:3001/vehicles/plate/${searchTerm}`
    );
    if (plateResponse.data && plateResponse.data.license_plate === searchTerm) {
      console.log("Vehicle found by license plate:", plateResponse.data);
      await displayVehicleData(plateResponse.data);
    } else {
      console.log(`No vehicle found with this license plate or VIN`);
    }
  } catch (error) {
    console.error(
      `Error fetching vehicle data:`,
      error.response ? error.response.data : error.message
    );
  }
});

async function displayVehicleData(data) {
  //Turned this portion of the code into a separate display function via the suggestion from ChatGPT.
  const {
    license_plate,
    plate_state,
    date_towed,
    location,
    neighborhood,
    reason_towed,
    current_fees_owed,
    fee_rate,
    fee_frequency,
  } = data;

  try {
    const neighborhoodResponse = await axios.get(
      `http://localhost:3001/neighborhoods/${neighborhood}`
    );
    const locationResponse = await axios.get(
      `http://localhost:3001/locations/${location}`
    );

    plate.textContent = `Plate Number: ${license_plate}`;
    state.textContent = `State: ${plate_state}`;
    dateTowed.textContent = `Date Towed: ${date_towed}`;
    parked.textContent = `Location: ${locationResponse.data.address}`;
    neighborhoodTowed.textContent = `Neighborhood: ${neighborhoodResponse.data.neighborhood_name}`;
    reasonTowed.textContent = `Reason Towed: ${reason_towed}`;
    currentFees.textContent = `Current Fees: $${current_fees_owed}`;
    feeRate.textContent = `Fee Rate: $${fee_rate}`;
    feeFrequency.textContent = `Fee Frequency: ${fee_frequency}`;
  } catch (error) {
    //Catch portion added by ChatGPT
    console.error(`Error fetching additional data:`, error);
  }
}

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

// const localHostAddress = `http://localhost:3001/vehicles`;
// const newVehicleInput = document.querySelector(`#new-vehicle input`);
// let submitButton = document.querySelector(`#submit`);
// let isEditingVehicle = false;
// let editButtonVehicleId = ``;

// async function getVehicles() {
//   try {
//     const response = await fetch(localHostAddress);
//     const responseData = await response.json();
//     return responseData;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// async function createVehicle(data) {
//   try {
//     const response = await fetch(localHostAddress, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     const result = await response.json();
//     console.log("Success:", result.message);
//   } catch (error) {
//     console.error("Error", error);
//   }
// }

// async function deleteVehicle(vehicleId) {
//   try {
//     const response = await fetch(`${localhostAddress}/${vehicleId}`, {
//       method: "DELETE",
//     });
//     const result = await response.json();
//     console.log("Success:", result.message);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// async function updateVehicle(id, data) {
//   try {
//     const response = await fetch(`${localHostAddress}/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// async function addVehicle() {
//   const data = { title: newVehicleInput.value };
//   await createVehicle(data);
//   displayVehicles();
//   newVehicleInput.value = "";
// }

// function deleteVehicleButton() {
//   const deleteVehicleButtons = document.querySelectorAll(".delete");

//   for (const deleteButton of deleteVehicleButtons) {
//     deleteButton.onclick = async function () {
//       const vehicleID = deleteButton.getAttribute("data-id");
//       await deleteVehicle(vehicleId);
//     };
//   }
// }

// function editVehicleButton() {
//   const editVehicleButtons = document.querySelectorAll(".edit");

//   for (const editButton of editVehicleButtons) {
//     const vehicle = editButton.parentNode.parentNode.children[0];

//     editButton.onclick = async function () {
//       newVehicleInput.value = vehicle.innerText;
//       submitButton.innerHTML = "Edit";
//       isEditingVehicle = true;

//       editButtonVehicleId = editButton.getAttribute("data-id");
//     };
//   }
// }

// async function displayVehicles() {
//   const vehicleList = await getVehicles();
//   console.log(vehicleList);
//   let vehicleListContainer = document.querySelector(`#vehicles`);

//   if (!vehicleList) {
//     vehicleListContainer.innerHTML += `
//     <div class="vehicle">
//       <span> Loading Vehicles... </span>
//     </div>
//     `;
//   } else {
//     vehicleList.forEach((vehicle) => {
//       vehicleListContainer.innerHTML += `
//       <div class="vehicle">
//         <span>${vehicle.license_plate}</span>

//         <div class="actions">
//           <button data-id=${vehicle.id} class="edit">
//             <i class="fas fa-edit></i>
//           </button>
//           <button data-id=${vehicle.id} class="delete">
//           <i class="far fa-trash-alt"></i>
//           </button>
//         </div>

//         </div>
//       `;
//     });
//   }
//   deleteVehicleButton();
//   editVehicleButton();
// }

// submitButton.addEventListener(`click`, () => addVehicle());

// displayVehicles();

// const onload = async () => {
//   await getVehicles();
//   displayVehicles();
// };

// onload();
