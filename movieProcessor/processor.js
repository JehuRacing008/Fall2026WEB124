/*
Name: Noah Monnington
Date: 9/22/26
*/

"use strict"
// This is our original data array. It is an array of strings.
const movieArray = [
    "Inception,sci-fi,9,user1@gmail.com", 
    "Project Hail Mary,sci-fi,8,user2@gmail.com",
    "Ford v Ferrari,action,10,user3@gmail.com",
    "F1,action,8,user4@gmail.com",
    "Star Wars: The Mandalorian and Grogu,action,7,user5@gmail.com",
    "Star Wars: Starfighter,action,,user6@gmail.com",
    "Star Wars: New Jedi Order,,,"
]
// Here is the class constructor.
function Movie(title, genre, rating, reviewEmail, id){
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.reviewEmail = reviewEmail;
    this.id = id;
}
/* Here is the new array ready to take in the split, remapped, and trimmed array. This new array is created to separate 
all the data fields in the original strings and convert them to movie objects. */
let newMovieArray = [];
for (let item = 0; item < movieArray.length; item++){
    let movieArraySplit = movieArray[item].split(",").map(function(item){
        return item.trim()
    })
    // This try catch block checks the title, genre, and rating fields with if statements 
    // to make sure they are included in the string before it is converted to an object and pushed into the new array.
     try{
        if (movieArraySplit[0] === "" || movieArraySplit[1] === "" || movieArraySplit[2] === "")
            throw new Error(`ERROR: Movie ${item + 1} had faulty or missing data.Therefore it has been skipped.\n`)
            let [title, genre, rating, reviewEmail] = movieArraySplit;
            newMovieArray.push(new Movie(title, genre, Number(rating), reviewEmail, item));        
        } catch(err){
            console.log(err.message)
        }
}
// getSummary returns a nicely formatted summary statement.
Movie.prototype.getSummary = function () {
    return `${this.title} is a ${this.genre} movie with a rating of ${this.rating}.`;
};
// isHighlyRated only returns true if the movie rating is greater than or equal to 8.
Movie.prototype.isHighlyRated = function () {
    if (this.rating >= 8){
        return true;
    }
    return false;
}
// getReviewEmail only returns the user email if it exists. Otherwise it returns none.
Movie.prototype.getReviewEmail = function () {
    if (this.reviewEmail == null){
        return "none"
    }
    return this.reviewEmail
}
// getID returns the unique movie id. I used the index to create the id.
Movie.prototype.getID = function () {
    return this.id
}
// This for loop goes through all the movies and prints a nicely formatted summary statement. It accomplishes this by calling the getSummary function.
for (let i = 0; i < newMovieArray.length; i++){
    console.log(`Movie ${i + 1}: ${newMovieArray[i].getSummary()} \n`)
}
// This filter statement takes the new array and applies the isHighlyRated function to it. Any object that has a rating less than 8 is filtered out.
let filteredMovies = []
filteredMovies = newMovieArray.filter(function(i) {
    return i.isHighlyRated()
})
// This block of code simply prints the title of the movies that have a rating greater than 7. It also singles out the movie with the highest rating to be printed later.
let bestMovie = filteredMovies[0];
console.log("\nAll movies with a rating of 8 or higher.")
for (let i = 0; i < filteredMovies.length; i++){
    console.table(`Movie ${i + 1}: ${filteredMovies[i].title}`)
    if (filteredMovies[i].rating > bestMovie.rating){
        bestMovie = filteredMovies[i]
    }
}
// This console log statement prints the title of the movie with the highest rating and adds a nice little message about the movie.
console.log
(
    `\n
    ${bestMovie.title} is the highest rated movie and obviously one of my favorites. 
    It's a thrilling true story. All the scenes were real, no cgi. 
    And to top things off this movie had to have had one of the best acting lineup of all time.`
)