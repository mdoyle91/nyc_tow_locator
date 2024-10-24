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
const addVehicleButton = document.querySelector(`#addVehicleButton`);
const vehicleFormContainer = document.querySelector(`#vehicleFormContainer`);

//Function to Pull Info Regarding Towed Cars

searchButton.addEventListener(`click`, async () => {
  const searchTerm = searchBar.value.trim();
  console.log(`Searching for:`, searchTerm);
  const container = document.querySelector(`.container1`); //Used ChatGPT for adding the background color with the ClickEvent as I was initially going to try to dynamically create the DIV, since I knew how to do that. Ultimately, I decided I only wanted to dynmically alter the background color, so thought to ask ChatGPT isntead, and this makes complete sense to me.
  if (container) {
    container.style.backgroundColor = `rgba(116, 180, 232, 0.5)`;
  }
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

// In HTML I need:
// Header, Logo, User Selection, Search Bar, Search Button, Dynamic Display Field, Update Button at bottom based on user
// In Javascript I need:
// Search Functionality-eventListener based on clicking search button
// Dynamically created displays--create DIVs in html, and used CSS to give them a display of none, the click event will dynamically create the display (need a function for the display creation)

// Front end CUD functionality--Utilized this source throughout for guidance in the code https://agirlcodes.medium.com/build-a-crud-todo-app-with-vanilla-javascript-and-fetch-api-44a664c0de52, then had ChatGPT help finesse some of the code (i.e. asking it to use axios gets instead of await fetch, and also dialoguing with it until I could get the desired functionality on the page.)--I ended up deleting everything from the article and dialoguging back and forth with ChatGPT as what I was trying to get from the article was too piecemiel for my needs.

// Function to create input fields for adding a vehicle
addVehicleButton.addEventListener("click", () => {
  createVehicleInputFields();
  const vehicleFormContainer = document.querySelector(`#vehicleFormContainer`);
  if (vehicleFormContainer) {
    vehicleFormContainer.style.backgroundColor = `rgba(116, 180, 232, 0.5)`;
  }
});

// Function to dynamically create input fields for adding a vehicle
function createVehicleInputFields() {
  // Clear existing input fields if any
  vehicleFormContainer.innerHTML = "";

  // Array of input field definitions corresponding to the vehicle schema
  const inputFields = [
    { label: "License Plate", id: "license_plate", type: "text" },
    { label: "Plate State", id: "plate_state", type: "text" },
    { label: "VIN", id: "vin", type: "text" },
    { label: "Make", id: "make", type: "text" },
    { label: "Model", id: "model", type: "text" },
    { label: "Was Towed", id: "wasTowed", type: "checkbox" },
    { label: "Date Towed", id: "date_towed", type: "text" },
    { label: "Location", id: "location", type: "text" },
    { label: "Neighborhood", id: "neighborhood", type: "text" },
    { label: "Reason Towed", id: "reason_towed", type: "text" },
    { label: "Current Fees Owed", id: "current_fees_owed", type: "number" },
    { label: "Fees Accumulate", id: "feesAccumulate", type: "checkbox" },
    { label: "Fee Rate", id: "fee_rate", type: "number" },
    { label: "Fee Frequency", id: "fee_frequency", type: "text" },
  ];

  // Create and append input fields to the container
  inputFields.forEach((field) => {
    const inputContainer = document.createElement("div");
    inputContainer.classList.add("inputField");

    const label = document.createElement("label");
    label.textContent = field.label;
    label.setAttribute("for", field.id);

    const input = document.createElement("input");
    input.setAttribute("id", field.id);
    input.setAttribute("type", field.type);
    input.setAttribute("required", true); // Makes the input required

    // If the field is a checkbox, set it differently
    if (field.type === "checkbox") {
      inputContainer.appendChild(input);
      inputContainer.appendChild(label); // Place label after the checkbox
    } else {
      inputContainer.appendChild(label);
      inputContainer.appendChild(input);
    }

    vehicleFormContainer.appendChild(inputContainer);
  });

  // Create the submit button for adding the vehicle
  const addButton = document.createElement("button");
  addButton.textContent = "Submit";
  addButton.addEventListener("click", addVehicle); // Call the addVehicle function on click
  vehicleFormContainer.appendChild(addButton);
}

// Function to add the vehicle to the database
async function addVehicle(event) {
  event.preventDefault(); // Prevent the default form submission

  const vehicleData = {
    license_plate: document.querySelector("#license_plate").value,
    plate_state: document.querySelector("#plate_state").value,
    vin: document.querySelector("#vin").value,
    make: document.querySelector("#make").value,
    model: document.querySelector("#model").value,
    wasTowed: document.querySelector("#wasTowed").checked, // Checkbox value
    date_towed: document.querySelector("#date_towed").value,
    location: document.querySelector("#location").value,
    neighborhood: document.querySelector("#neighborhood").value,
    reason_towed: document.querySelector("#reason_towed").value,
    current_fees_owed: parseFloat(
      document.querySelector("#current_fees_owed").value
    ), // Convert to number
    feesAccumulate: document.querySelector("#feesAccumulate").checked, // Checkbox value
    fee_rate: parseFloat(document.querySelector("#fee_rate").value), // Convert to number
    fee_frequency: document.querySelector("#fee_frequency").value,
  };

  try {
    const response = await axios.post(
      "http://localhost:3001/vehicles",
      vehicleData
    );
    console.log("Vehicle added successfully:", response.data);
    // Optionally, refresh the vehicle list or clear the input fields
    // For example, you might want to clear fields or show a success message
    vehicleFormContainer.innerHTML = ""; // Clear input fields after adding
  } catch (error) {
    console.error("Error adding vehicle:", error);
  }
}
