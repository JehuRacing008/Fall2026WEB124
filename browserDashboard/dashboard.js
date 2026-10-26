/*
    Name: Noah Monnington
    Date: 10/26/26
*/
"use strict";

console.log(location.href);
console.log(navigator.language);
console.log(window.navigator.onLine);
console.log(screen.height);
console.log(screen.width);
console.log(window.innerHeight);
console.log(window.innerWidth);

const form = document.querySelector('#My')

form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log("This has been prevented");
    const formName = form.elements.name.value;
    const formWeb = form.elements.web.value;

    const output = document.querySelector('#output')
    output.textContent = `Name: ${formName}\nFavorite Website: ${formWeb}`;
    const pageURL = new URL(formWeb);
    console.log(pageURL.hostname);
    console.log(pageURL.protocol);
    console.log(pageURL.pathname);
    localStorage.setItem("name", formName);
    console.log(localStorage.getItem("name"));
    sessionStorage.setItem("web", formWeb);
    console.log(sessionStorage.getItem("web"));
})


const nameField = document.querySelector("#name");

nameField.addEventListener("focus", function () {
    console.log("Name field selected.");
});

nameField.addEventListener("blur", function () {
    console.log("Name field left.");
});

const webField = document.querySelector("#web");

webField.addEventListener("focus", function () {
    console.log("web field selected.");
});

webField.addEventListener("blur", function () {
    console.log("web field left.");
});
