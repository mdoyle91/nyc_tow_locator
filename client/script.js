//Setters

const searchButton = document.querySelector(`#searchButton`);
const searchBar = document.querySelector(`#searchBar`);
const plate = document.querySelector(`#plate`);
const state = document.querySelector(`#state`);
const dateTowed = document.querySelector(`#dateTowed`);
const location = document.querySelector(`#location`);
const neighborhood = document.querySelector(`#neighborhood`);
const reasonTowed = document.querySelector(`#reasonTowed`);
const currentFees = document.querySelector(`#currentFees`);
const feeRate = document.querySelector(`#feeRate`);
const feeFrequency = document.querySelector(`feeFrequency`);

//Functions

searchButton.addEventLister("click", () => {
  const searchTerm = searchBar.value;
});

//In HTML I need:
// Header, Logo, User Selection, Search Bar, Search Button, Dynamic Display Field, Update Button at bottom based on user
//In Javascript I need:
//Search Functionality-eventListener based on clicking search button
//Dynamically created displays--create DIVs in html, and used CSS to give them a display of none, the click event will dynamically create the display (need a function for the display creation)
