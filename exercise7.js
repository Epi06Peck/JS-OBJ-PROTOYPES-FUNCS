// Exercise 7: Multi-Level Prototype Chain
// Create a file named exercise7.js. Build a three-level inheritance chain:
// • Create a person object with properties: species ('Human') and a method breathe()
const person = {
  species: "Human",
  breathe() {
    return "Breathing...";
  },
};
// • Create an employee object that inherits from person, add: company and position
// properties
const employee = Object.create(person);
employee.company = "Tech Corp";
employee.position = "Developer";
// • Create a manager object that inherits from employee, add: department and team (array)
// properties
const manager = Object.create(employee);
manager.department = "Engineering";
manager.team = [];
// • Add a method to manager called addTeamMember(name) that adds to the team array
manager.addTeamMember = function (name) {
  // Your code here
  this.team.push(name);
};
// • Demonstrate the prototype chain by accessing properties from all levels
// Prototype chain should be:
// manager -> employee -> person -> Object.prototype -> null
// Test the method
manager.addTeamMember("Alice");
manager.addTeamMember("Bob");

console.log(manager.species); // "Human" (From person)
console.log(manager.company); // "Tech Corp" (From employee)
console.log(manager.department); // "Engineering" (From manager)
console.log(manager.team); // ["Alice", "Bob"] (Own property)
console.log(manager.breathe()); // "Breathing..." (From person)
