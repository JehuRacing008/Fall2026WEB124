// Name: Noah Monnignton
// Date: 10/27/26
"use strict";

function Position(name, job, id, image = "") {
    this.name = name;
    this.job = job;
    this.id = id;
    this.image = image;
}


Position.prototype.getDescription = function () {
    return (`${this.name}: ${this.job}`);

};

Position.prototype.getID = function () {
    return this.id
};



const position1 = new Position("Outside Hitter", "Serve recieve and primary hitter", "position1", "OH.jpg");
const position2 = new Position("Middle Blocker", "Blocking", "position2", "middle.jpg");
const position3 = new Position("Opposite Hitter", "Decoy", "position3", "oppo.jpeg");
const position4 = new Position("Setter", "Run the offense", "position4", "setter.jpg");
const position5 = new Position("Second Outside Hitter", "Serve recieve and defense", "position5", "OH2.jpg");
const position6 = new Position("Libero", "Defense", "position6", "libero.jpg");


const Positions = [position1, position2, position3, position4, position5, position6];

Positions.forEach(function (Position) {
    console.log(Position.name)
    console.log(Position.getDescription())
});


let currentIndex = 0;


const headingElement = document.querySelector("#galleryHeading");
const imageElement = document.querySelector("#positionImage");
const nameElement = document.querySelector("#positionName")
const detailElement = document.querySelector("#positionDetails");
const idElement = document.querySelector("#positionID");




const nextButton = document.querySelector("#next");
const prevButton = document.querySelector("#prev");


function showPosition(index) {
    const Position = Positions[index];

    headingElement.textContent = `Position ${index + 1} of 6`

    if (imageElement !== null) {
        imageElement.src = Position.image
        imageElement.alt = Position.name
    }


    nameElement.textContent = Position.name
    detailElement.textContent = Position.getDescription()
    idElement.textContent = Position.getID()


}

function handleNextClick() {
    currentIndex += 1;
    if (currentIndex >= Positions.length) {
        currentIndex = 0;
    }
    showPosition(currentIndex)
}

function handlePrevClick() {
    currentIndex -= 1
    if (currentIndex < 0) {
        currentIndex = Positions.length - 1
    }
    showPosition(currentIndex)

}

nextButton.addEventListener("click", handleNextClick);
prevButton.addEventListener("click", handlePrevClick);

showPosition(currentIndex);

function Rally(name, description, image = "") {
    this.name = name;
    this.description = description;
    this.image = image;
}


Rally.prototype.getDescription = function () {
    return (`${this.description}`);
};

const rally1 = new Rally("Serve", "The ball is served by one of team 1's players from behind serve line to team 2.", "serve2.jpg");
const rally2 = new Rally("Recieve", "The ball is recieved by team 2 and passed to the setter.", "recieve.jpg");
const rally3 = new Rally("Set", "The ball is then redirected by the setter to one of team 2's hitters.", "setting.jpg");
const rally4 = new Rally("Spike", "The hitter then strikes the ball over the net to team 1.", "spiking.jpg");
const rally5 = new Rally("How the rally ends", "The teams rally until the ball hits the floor or a foul is commited. Then the process starts all over again.", "finish2.jpg");


const Rallys = [rally1, rally2, rally3, rally4, rally5];


Rallys.forEach(function (Rally) {
    console.log(Rally.name)
});

let index = 0;

const rallyHeadingElement = document.querySelector("#rallyHeading");
const rallyimageElement = document.querySelector("#rallyImage");
const rallyNameElement = document.querySelector("#rallyName")
const rallyDetailElement = document.querySelector("#rallyDetails");

const rallyGallery = document.getElementById('rallyGallery');

rallyGallery.addEventListener("click", function (event) {
    if (event.target.id === "rallynext") {
        index += 1;
        if (index >= Rallys.length) {
            index = 0;
        }
        rallyShowPosition(index)
    }
})

function rallyShowPosition(index) {
    const Rally = Rallys[index];


    if (rallyimageElement !== null) {
        rallyimageElement.src = Rally.image;
        rallyimageElement.alt = Rally.name;
    }
    rallyNameElement.textContent = Rally.name;
    rallyDetailElement.textContent = Rally.getDescription();
}
rallyShowPosition(index)

const form = document.querySelector('#profileForm')

form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("This has been prevented");
    const formName = form.elements.playerName.value;
    const formPosition = form.elements.favoritePosition.value;

    const output = document.querySelector('#profileResult')
    output.textContent = `Player name: ${formName}\nFavorite position: ${formPosition}`;
    sessionStorage .setItem("playerName", formName);
    console.log(sessionStorage .getItem("playerName"));
    sessionStorage .setItem("favoritePosition", formPosition);
    console.log(sessionStorage .getItem("favoritePosition"));
})
const savedName = sessionStorage .getItem("playerName");
const savedPosition = sessionStorage .getItem("favoritePosition");
const savedProfile = document.querySelector("#savedProfile");

if (savedName && savedPosition) {
    savedProfile.textContent =
        `Saved name: ${savedName} | Favorite position: ${savedPosition}`;
}

const nameField = document.querySelector("#playerName");

nameField.addEventListener("focus", function () {
    console.log("Name field selected.");
});

nameField.addEventListener("blur", function () {
    console.log("Name field left.");
});

console.log(window.innerHeight);
console.log(window.innerWidth);

/*
     - Which JavaScript feature was easiest for you to use? Definitely the focus and blur.
     - Which JavaScript feature was most challenging? Setting up my rally object.
     - How did you use events in your project? One example was with the rally code. I used single parent event listener to handle the code. aka delegation.
     - How did you use storage in your project? I used localStorage to store the users name and favorite position.
*/
