/**
Exercise 2: Calculate Area of a Rectangle
Problem Statement:

Write a function calculateRectangleArea that takes two parameters length and width and returns the area 
of a rectangle.
example

let length = 5;
let width = 3;

let area = calculateRectangleArea(length, width);

console.log(area); // Output: 15
 */
let length = 5;
let width = 3;

let area = calculateRectangleArea(length, width);
console.log('area:', area);
function calculateRectangleArea(length, width) {
  return length*width;
}

module.exports = calculateRectangleArea;
