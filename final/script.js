"use strict";


//  Position CONSTRUCTOR FUNCTION

//  Complete the constructor function to assign parameter values to instance properties using 'this'.
function Position(name, job, id, image = "") {
  this.name = name;
  this.job = job;
  this.id = id;
  this.image = image;
}

// PROTOTYPE METHODS
// Complete each prototype method according to its instructions.

Position.prototype.getDescription = function () {
  // Return a string formatted like: "Stanley is a cat and is 6 years old."
  return (`${this.name}: ${this.job}`);

};

Position.prototype.getID = function () {
  // Return the Position's id property
  return this.id
};


// OBJECT INSTANTIATION & CONSOLE LOGGING

// Instantiate 2 Position objects using 'new Position(...)' with image filenames for the dog and parrot
const position1 = new Position("Outside Hitter", "Serve recieve and primary hitter", "position1", "OH.jpg");
const position2 = new Position("Middle Blocker", "Blocking", "position2", "middle.jpg");
const position3 = new Position("Opposite Hitter", "Decoy", "position3", "oppo.jpeg");
const position4 = new Position("Setter", "Run the offense", "position4", "setter.jpg");
const position5 = new Position("Second Outside Hitter", "Serve recieve and defense", "position5", "OH2.jpg");
const position6 = new Position("Libero", "Defense", "position6", "libero.jpg");


const Positions = [position1, position2, position3, position4, position5, position6];

//  Use Array.prototype.forEach() to log each Position's details to the browser console.
// Log Name, Type, Age, Owner Name, Owner Phone, and ID.
Positions.forEach(function (Position) {
  // Write your console.log statements here:
  console.log(Position.name)
  console.log(Position.getID())
});

// DOM SELECTION

let currentIndex = 0;


// Select the DOM elements using document.querySelector().
// Double check that element IDs match your HTML file exactly!
const headingElement = document.querySelector("#galleryHeading");
//finish the DOM definitions for PositionImage, PositionName, PositionDetails, PositionOwner,OwnerPhone, and PositionID
const imageElement = document.querySelector("#positionImage");
const nameElement = document.querySelector("#positionName")
const detailElement = document.querySelector("#positionDetails");
const idElement = document.querySelector("#positionID");




const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

// DISPLAY LOGIC & NAVIGATION

//  Write the showPosition function to update DOM elements with current Position data.
function showPosition(index) {
  const Position = Positions[index];

  // 1. Update gallery heading text content (e.g., "Position 1 of 3")
    headingElement.textContent = `Position ${index + 1} of 6`

  // 2. Update Position image src and alt attributes safely if PositionImageElement exists
  if (imageElement !== null){
    imageElement.src = Position.image
    imageElement.alt = Position.name
  }


  // 3. Update text content for name, details, owner, phone, and ID elements using prototype methods
    nameElement.textContent = Position.name
    detailElement.textContent = Position.getDescription()
    idElement.textContent = Position.getID()


}

// Complete button handlers to update currentIndex and loop at boundaries.
function handleNextClick() {
  // Increment index. If index exceeds array length, reset to 0. Then update display.
  currentIndex += 1;
  if (currentIndex >= Positions.length){
    currentIndex = 0;
  }
  showPosition(currentIndex)
}

function handlePrevClick() {
  // Decrement index. If index is less than 0, wrap to last item. Then update display.
  currentIndex -= 1
  if (currentIndex < 0){
    currentIndex = Positions.length - 1
  }
  showPosition(currentIndex)

}

// Event Listeners
nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);

// Initial display on page load
showPosition(currentIndex);

function Rally(name, description, image = "") {
  this.name = name;
  this.description = description;
  this.image = image;
}


Rally.prototype.getDescription = function () {
  // Return a string formatted like: "Stanley is a cat and is 6 years old."
  return (`${this.name}: ${this.description}`);
};

const rally1 = new Rally("Serve", "The ball is served by team 1 to team 2.", "serving.jpg");
const rally2 = new Rally("Recieve", "The ball is recieved by team 2", "recieve.jpg");
const rally3 = new Rally("Set", "The ball is then set to one of team 2's hitters", "setting.jpeg");
const rally4 = new Rally("Spike", "The hitter then strikes the ball over the net to team 1", "spiking.jpg");
const rally5 = new Rally("Terminated", "The teams rally until the ball hits the floor or a foul is commited", "finish.jpg");
let index = 0;

const Rallys = [rally1, rally2, rally3, rally4, rally5];


const rallyGallery = document.getElementById('rallyGallery');

rallyGallery.addEventListener("click", function(event){
    index += 1;
    if (index >= Rallys.length){
        index = 0;
  }
})
