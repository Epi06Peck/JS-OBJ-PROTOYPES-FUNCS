// Exercise 5: Dynamic Property Access
// Create a file named exercise5.js:
// • Create a book object with properties: title, author, year, and isbn
const book = {
  title: "JavaScript: The Good Parts",
  author: "Douglas Crockford",
  year: 2008,
  isbn: "978-0596517748",
};
// • Write a function displayProperty(obj, propertyName) that prints the property value
function displayProperty(obj, propertyName) {
  // Use bracket notation: obj[propertyName]
  console.log(obj[propertyName]);
}
// • Write a function updateProperty(obj, propertyName, newValue) that updates a property
function updateProperty(obj, propertyName, newValue) {
  // Your code here
  obj[propertyName] = newValue;
}
// • Test both functions with different properties
displayProperty(book, "title");
updateProperty(book, "year", 2024);
displayProperty(book, "year");
