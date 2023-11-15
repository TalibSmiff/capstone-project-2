"use strict";
const descriptionDiv = document.getElementById("descriptionDiv");
const imageDiv = document.getElementById("imageDiv");
const mountainSelect = document.getElementById("mountainSelect");

function loadMountains() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.value = mountain.name;
    option.innerText = mountain.name;

    mountainSelect.appendChild(option);
    console.log(mountain);
  }
}
// function displayMountains() {
//   for (const mountain of mountainsArray) {
//     let paragraph = document.createElement("p");
//     paragraph.innerText = mountain.desc;
//     document.body.appendChild(paragraph);
//   }
// }
function mountainDescription() {
  descriptionDiv.innerHTML = "";
  imageDiv.innerHTML = ""; 
  for (const mountain of mountainsArray) {
    if (mountain.name === mountainSelect.value) {
      let paragraph = document.createElement("p");
      paragraph.innerText = mountain.desc;
      descriptionDiv.appendChild(paragraph);
      
      let picture = document.createElement("img");
      picture.src = "images/" + mountain.img;
      imageDiv.appendChild(picture);
      console.log(picture);
    }
  }
}
// function mountainPicture() {
//   imageDiv.innerHTML = "";
//   for (const mountain of mountainsArray) {
//     if (mountain.name == mountainSelect.value) {
//       let picture = document.createElement("img");
//       picture.src = "images/" + mountain.img;
//       imageDiv.appendChild(picture);
//       console.log(picture);
//     }
//   }
// }
// mountainSelect.onchange = mountainPicture; 
mountainSelect.onchange = mountainDescription;
loadMountains();
