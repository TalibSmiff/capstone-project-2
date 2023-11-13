const parkTypesArray = [
  "National Park",
  "National Monument",
  "Recreation Area",
  "Scenic Trail",
  "Battlefield",
  "Historic",
  "Memorial",
  "Preserve",
  "Island",
  "River",
  "Seashore",
  "Trail",
  "Parkway",
];



function loadParkTypes() {
const parkTypeList = document.getElementById("parkTypeList")

  for (const park of parkTypesArray) {
    let option = document.createElement("option")
    option.value= park
    option.innerText = park
    
    parkTypeList.appendChild(option);
  }
}
loadParkTypes();
