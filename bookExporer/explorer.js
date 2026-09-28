/*
Name: Noah Monnington
Date: 9/27/26
*/

"use strict";
// This is a list of objects
let books = [
{
    title: "The Fellowship of the Ring", 
    author: "J.R.R. Tolkien", 
    pages: 423
},
{
    title: "The Two Towers", 
    author: "J.R.R. Tolkien", 
    pages: 352
},
{
    title: "The Return of the King", 
    author: "J.R.R. Tolkien", 
    pages: 416
},
{
    title: "The Hobbit", 
    author: "J.R.R. Tolkien", 
    pages: 310
},
{
    title: "Allegiance", 
    author: "Timothy Zahn", 
    pages: 432
}
]

console.log(`\n DOM Tree Exploration`)
// This statement prints the book information.
books.forEach(function(book){
    console.log(`${book.title} by ${book.author} (${book.pages} pages)`)
})

console.log(`\n DOM Tree Exploration`)
// This statement prints the html document in the console.
console.log(document)

// This statement displays the body elements in the console.
let displayBody = document.querySelector("body")
console.log(displayBody)

// This statement print the first element in the body which is h1.
let firstChild = document.body.firstElementChild
console.log(firstChild)

// This statement prints the body html colection
let children = document.body.children
console.log(children)

console.log(`\n DOM Tree Exploration`)
// This statement prints the third element in the body, which is unordered list
let ulElement = document.body.children[2]
console.log(ulElement)
// This statement prints the first index of the ulElement children which is the first list item
let firstLi = ulElement.children[0]
console.log(firstLi)
// This statement prints the parent element of the first list item.
let perentOfLi = firstLi.parentElement
console.log(perentOfLi)
// This statement print the next element of the list item list.
let siblingLi = firstLi.nextElementSibling
console.log(siblingLi)

console.log(`\n Node Properties`)
// This statement creates a node list and prints the text of the first list item.
let nodeListItem = document.body.querySelectorAll("li")
console.log(nodeListItem[0].textContent)

console.log(`\n Styles & Classes`)
// This statement assigns ulElement children to the listItems variable.
let listItems = ulElement.children;
// This statement "loops" through the objects and adds the featured modifications to the books with over 300 pages and prints them to the console.
books.forEach(function (book, index){
    if (book.pages > 300){
        listItems[index].classList.add("featured")
        console.log(`${book.title} recieved the class.`)
    }
})