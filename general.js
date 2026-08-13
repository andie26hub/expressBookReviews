const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Task 10 - Method 1: Retrieve all books
async function getAllBooks() {
    try {
        const response = await axios.get(${BASE_URL}/);

        console.log("\n===== ALL BOOKS =====");
        console.log(response.data);
    } catch (error) {
        console.error("Error retrieving all books:", error.message);
    }
}


// Task 10 - Method 2: Retrieve book by ISBN
async function getBooksByISBN(isbn) {
    try {
        const response = await axios.get(
            ${BASE_URL}/isbn/${isbn}
        );

        console.log("\n===== BOOK BY ISBN =====");
        console.log(response.data);
    } catch (error) {
        console.error("Error retrieving book by ISBN:", error.message);
    }
}


// Task 10 - Method 3: Retrieve books by author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(
            ${BASE_URL}/author/${encodeURIComponent(author)}
        );

        console.log("\n===== BOOKS BY AUTHOR =====");
        console.log(response.data);
    } catch (error) {
        console.error("Error retrieving books by author:", error.message);
    }
}


// Task 10 - Method 4: Retrieve books by title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(
            ${BASE_URL}/title/${encodeURIComponent(title)}
        );

        console.log("\n===== BOOKS BY TITLE =====");
        console.log(response.data);
    } catch (error) {
        console.error("Error retrieving books by title:", error.message);
    }
}


// Run all four methods
async function run() {
    console.log("Starting Book Review API tests...");

    await getAllBooks();

    await getBooksByISBN(1);

    await getBooksByAuthor("Chinua Achebe");

    await getBooksByTitle("Things Fall Apart");

    console.log("\nAll API requests completed.");
}

run();
