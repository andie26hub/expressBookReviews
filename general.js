const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Method 1: Retrieve all books
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/`);
        console.log("All Books:");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving all books:", error.message);
    }
}

// Method 2: Retrieve book details by ISBN
async function getBooksByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
        console.log("Book by ISBN:");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving book by ISBN:", error.message);
    }
}

// Method 3: Retrieve books by author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(
            `${BASE_URL}/author/${encodeURIComponent(author)}`
        );
        console.log("Books by Author:");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving books by author:", error.message);
    }
}

// Method 4: Retrieve books by title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(
            `${BASE_URL}/title/${encodeURIComponent(title)}`
        );
        console.log("Books by Title:");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error retrieving books by title:", error.message);
    }
}

// Run all four methods
async function main() {
    await getAllBooks();
    await getBooksByISBN(1);
    await getBooksByAuthor("Chinua Achebe");
    await getBooksByTitle("Things Fall Apart");
}

main();
