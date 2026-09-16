// Noah Monnington
// Date: 9/16/26

"use strict";


//  PET CONSTRUCTOR FUNCTION

//  Complete the constructor function to assign parameter values to instance properties using 'this'.
function Pet(name, type, age, owner = null, id = " ", image = "") {
  // Example: this.name = name;
  // Assign type, age, owner, id, and image properties below:
  this.name = name;
  this.type = type;
  this.age = age;
  this.owner = owner;
  this.id = id;
  this.image = image;

}

// PROTOTYPE METHODS
// Complete each prototype method according to its instructions.

Pet.prototype.getDescription = function () {
  // Return a string formatted like: "Stanley is a cat and is 6 years old."
  return (`${this.name} is a ${this.type} and is ${this.age} years old.`);

};

Pet.prototype.haveBirthday = function () {
  // Increase the pet's age property by 1
  this.age += 1;

};

Pet.prototype.getOwnerName = function () {
  // Return owner's name using optional chaining (?.), or "none" if null
  return this.owner?.name ?? "none";
 
};

Pet.prototype.getOwnerPhone = function () {
  // Return owner's phone using optional chaining (?.), or "No phone on file"
  return this.owner?.phone ?? "No phone on file";

};

Pet.prototype.getID = function () {
  // Return the pet's id property
  return this.id
};


// OBJECT INSTANTIATION & CONSOLE LOGGING

const owner1 = { name: "Sarah", phone: "555-0199" };
const owner2 = { name: "Alex", phone: "555-0142" };

// Instantiate 2 Pet objects using 'new Pet(...)' with image filenames for the dog and parrot
const pet1 = new Pet("Stanley", "cat", 6, owner1, "pet1", "cat.webp");
const pet2 = new Pet("Amber", "dog", 6, owner1, "pet2", "dog.webp");
const pet3 = new Pet("Tod", "parrot", 6, null, "pet3", "parrots.jpg");


const pets = [pet1, pet2, pet3];

//  Use Array.prototype.forEach() to log each pet's details to the browser console.
// Log Name, Type, Age, Owner Name, Owner Phone, and ID.
pets.forEach(function (pet) {
  // Write your console.log statements here:
  console.log(pet.name)
  console.log(pet.type)
  console.log(pet.age)
  console.log(pet.getOwnerName())
  console.log(pet.getOwnerPhone())
  console.log(pet.getID())
});

pet1.haveBirthday();
console.log(pet1.getDescription())

console.log(new Date())


// DOM SELECTION

let currentIndex = 0;

// Select the DOM elements using document.querySelector().
// Double check that element IDs match your HTML file exactly!
const headingElement = document.querySelector("#galleryHeading");
//finish the DOM definitions for PetImage, petName, petDetails, petOwner,OwnerPhone, and petID
const imageElement = document.querySelector("#PetImage");
const nameElement = document.querySelector("#petName")
const detailElement = document.querySelector("#petDetails");
const ownerElement = document.querySelector("#petOwner");
const phoneElement = document.querySelector("#OwnerPhone");
const idElement = document.querySelector("#petID");




const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");

// DISPLAY LOGIC & NAVIGATION

//  Write the showPet function to update DOM elements with current pet data.
function showPet(index) {
  const pet = pets[index];

  // 1. Update gallery heading text content (e.g., "Pet 1 of 3")
    headingElement.textContent = `Pet ${index + 1} of 3`

  // 2. Update pet image src and alt attributes safely if petImageElement exists
  if (imageElement !== null){
    imageElement.src = pet.image
    imageElement.alt = pet.name
  }


  // 3. Update text content for name, details, owner, phone, and ID elements using prototype methods
    nameElement.textContent = pet.name
    detailElement.textContent = pet.getDescription()
    ownerElement.textContent = pet.getOwnerName()
    phoneElement.textContent = pet.getOwnerPhone()
    idElement.textContent = pet.getID()


}

// Complete button handlers to update currentIndex and loop at boundaries.
function handleNextClick() {
  // Increment index. If index exceeds array length, reset to 0. Then update display.
  currentIndex += 1;
  if (currentIndex >= pets.length){
    currentIndex = 0;
  }
  showPet(currentIndex)
}

function handlePrevClick() {
  // Decrement index. If index is less than 0, wrap to last item. Then update display.
  currentIndex -= 1
  if (currentIndex < 0){
    currentIndex = pets.length - 1
  }
  showPet(currentIndex)

}

// Event Listeners
nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);

// Initial display on page load
showPet(currentIndex);
