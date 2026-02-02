// Exercise 9: Library Management System (Challenge)
// Create a file named exercise9.js. Build a simple library system:
// • Create a library object with properties: name and books (empty array)
const library = {
  name: "City Library",
  books: [],
  // • Add a method addBook(title, author, isbn) that creates a book object and adds it to
  // books
  addBook(title, author, isbn) {
    // Create book object and push to books array
    const book = { title, author, isbn };
    this.books.push(book);
  },
  // • Add a method findBookByTitle(title) that returns the book object or null
  findBookTitle(title) {
    return this.books.find((book) => book.title === title) || null;
  },
  // • Add a method listAllBooks() that prints all book titles
  listAllBooks() {
    this.books.forEach((book) => console.log(book.title));
  },
  searchByAuthor(authorName) {
    return this.books.filter((book) => book.author === authorName);
  },
};
// • Create a universityLibrary object using Object.create(library)

const universityLibrary = Object.create(library);
// • Add a courses property (array) to universityLibrary
universityLibrary.courses = [];
universityLibrary.books = [];
// • Add a method addCourseBook(courseName, title, author, isbn) that adds both the
// coure and book
universityLibrary.addCourseBook = function (courseName, title, author, isbn) {
  this.courses.push(courseName);
  this.addBook(title, author, isbn);
};
// • Test all methods with at least 3 books

// Bonus:
// Add a method to search books by author using an arrow function with filter()
// --- TESTING ---
library.addBook("The Great Gatsby", "F. Scott Fitzgerald", "101");
library.addBook("Tender is the Night", "F. Scott Fitzgerald", "102");
universityLibrary.addCourseBook(
  "CS50",
  "Introduction to Programming",
  "David Malan",
  "103",
);

console.log("--- City Library Books ---");
library.listAllBooks();

console.log("--- Search by Author (Fitzgerald) ---");
console.log(library.searchByAuthor("F. Scott Fitzgerald"));

console.log("--- University Courses ---");
console.log(universityLibrary.courses);
