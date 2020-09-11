"use strict";

let library = [
     { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
     { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
     { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3245 }
];
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function bookLibarary(){
     let title = document.getElementById("title").Value;
     let author  = document.getElementById("author").Value;
     let id= document.getElementById("id").value; 
}
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {""}
 */
function showTitles() {

     /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

     let titles = [];
     for (let book of library) {
          titles.push(book.title);
     }

     /*need to sort and then join the titles still (e.g., someArray.join("\n")  */

     let textArea = document.getElementById("displayArea");
     textArea.innerHTML = "the titles should replace this string";
}
 /**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showAuthor() {

     /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

     let author = [];
     for (let book of library) {
          author.push(book.author);
     }

     /*need to sort and then join the titles still (e.g., someArray.join("\n")  */

     let textArea = document.getElementById("displayArea");
     textArea.innerHTML = "the titles should replace this string";
}
/**
 * Event handler to display library titles sorted alphabetically
 * @returns {undefined}
 */
function showId() {

     /* put all titles into an array, then sort, then join with newline and insert in textarea innerHTML */

     let id = [];
     for (let book of library) {
          id.push(book.id);
     }

     /*need to sort and then join the titles still (e.g., someArray.join("\n")  */

     let textArea = document.getElementById("displayArea");
     textArea.innerHTML = "the titles should replace this string";
}






