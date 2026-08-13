const axios = require("axios");

const url = "http://localhost:5000";


// Method 1: Retrieve all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${url}/`);
        console.log("All Books:");
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}


// Method 2: Retrieve book by ISBN
async function getBooksByISBN(isbn) {
    try {
        const response = await axios.get(`${url}/isbn/${isbn}`);
        console.log("Book by ISBN:");
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}


// Method 3: Retrieve books by author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(
            `${url}/author/${encodeURIComponent(author)}`
        );
        console.log("Books by Author:");
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}


// Method 4: Retrieve books by title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(
            `${url}/title/${encodeURIComponent(title)}`
        );
        console.log("Books by Title:");
        console.log(response.data);
    } catch (error) {
        console.log(error.message);
    }
}


// Calling all methods
async function run() {

    await getAllBooks();

    await getBooksByISBN(1);

    await getBooksByAuthor("Chinua Achebe");

    await getBooksByTitle("Things Fall Apart");

}


run();
