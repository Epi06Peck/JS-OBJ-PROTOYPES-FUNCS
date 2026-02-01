// Exercise 4: Creating and Modifying Object Literals
// Create a file named exercise4.js. Build a student object with the following requirements:
// • Create an object literal with properties: firstName, lastName, studentId, and courses
// (empty array)
const student = {
  firstName: "John",
  lastName: "Doe",
  studentId: "12345",
  courses: [],
  // • Add a method called getFullName() that returns the full name
  getFullName() {
    // Your code here
    return `${this.firstName} ${this.lastName}`;
  },
  // • Add a method called enrollCourse(courseName) that adds a course to the courses array
  enrollCourse(courseName) {
    // Your code here
    this.courses.push(courseName);
  },
  // • Add a method called getCourseCount() that returns the number of enrolled courses
  getCourseCount() {
    // Your code here
    return this.courses.length;
  },
};
// • Test all methods with appropriate console.log statements
console.log(student.getFullName());
student.enrollCourse("CMPS2212");
student.enrollCourse("MATH2210");
console.log(student.getCourseCount()); // Expected: 2
