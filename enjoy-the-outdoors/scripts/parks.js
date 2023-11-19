const parkTableBody = document.getElementById("parkTableBody");
const parkTypeList = document.getElementById("parkTypeList");
const stateRadioButton = document.getElementById("stateRadioButton");
const typeRadioButton = document.getElementById("typeRadioButton");
const stateParkList = document.getElementById("stateParkList");

function loadStates() {
  parkTypeList.style.display = "none";
  parkTableBody.innerHTML = "";
  stateParkList.style.display = "block";

  let defaultOption = new Option("Select By State...");
  stateParkList.appendChild(defaultOption);

  for (const location of locationsArray) {
    let option = document.createElement("option");
    option.value = location;
    option.innerText = location;

    stateParkList.appendChild(option);
  }
}

function loadParkListingBody(park) {
  let row = parkTableBody.insertRow(-1);

  let cell1 = row.insertCell(0);
  cell1.innerText = park.LocationName;

  let cell2 = row.insertCell(1);
  cell2.innerText = park.Address;

  let cell3 = row.insertCell(2);
  cell3.innerText = park.City;

  let cell4 = row.insertCell(3);
  cell4.innerText = park.State;

  let cell5 = row.insertCell(4);
  cell5.innerText = park.ZipCode;

  let cell6 = row.insertCell(5);
  cell6.innerText = park.Phone;

  let cell7 = row.insertCell(6);
  

  if (park.Visit) {
    let link = document.createElement("a");
    link.href = park.Visit;
    link.innerText = "Learn More";
    link.target = "_blank";
    cell7.appendChild(link);
  }
}
function changeLocation() {
  for (const park of Parks) {
    if (park.State == stateParkList.value) {
      loadParkListingBody(park);
    }
  }
}

function loadParksByState() {
  stateParkList.style.display = "none";
  parkTableBody.innerHTML = "";
  parkTypeList.style.display = "block";

  typeRadioButton.checked = true;

  let defaultOption = new Option("Select By Type...");
  parkTypeList.appendChild(defaultOption);
  for (const park of parkTypesArray) {
    let option = document.createElement("option");
    option.value = park;
    option.innerText = park;

    parkTypeList.appendChild(option);
  }
}
function loadParksByType() {
  parkTableBody.innerHTML = "";
}
function changeType() {
  for (const park of Parks) {
    if (park.LocationName.indexOf(parkTypeList.value) !== -1) {
      loadParkListingBody(park);
    }
  }
}
parkTypeList.onchange = function () {
  parkTableBody.innerHTML = "";
  changeType();
};
loadParksByState();
typeRadioButton.onclick = loadParksByState;

stateParkList.onchange = function () {
  parkTableBody.innerHTML = "";
  changeLocation();
};
// loadparkListingBody();
stateRadioButton.onclick = loadStates;
