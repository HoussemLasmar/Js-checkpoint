//Convert Minutes into Seconds
function convert(minutes) {
	seconds = minutes * 60
    return seconds
}

//Convert Hours into Seconds
function howManySeconds(hours) {
	return hours*3600
}
//Return the Next Number from the Integer Passed
function addition(num) {
	return num+1
}
//Find the Perimeter of a Rectangle
function findPerimeter(length, width) {
	const perimeter = 2 * (length + width);
  return perimeter;
}
//Return the Sum of Two Numbers
function addition(a, b) {
	return a+b
}
//Power Calculator
function circuitPower(voltage, current) {
	const power = voltage * current;
  return power;
}
//Convert Age to Days
function calcAge(age) {
	const daysInYear = 365;
  const ageInDays = age * daysInYear;
  return ageInDays;
}
//Maximum Edge of a Triangle
function nextEdge(side1, side2) {
	const maxRange = side1 + side2 - 1;
  return maxRange;
}
//Area of a Triangle
function triArea(base, height) {
	const area = (base * height) / 2;
  return area;
}
//Sum of Polygon Angles
function sumPolygon(n) {
	const sum = (n - 2) * 180;
  return sum;
}
//Basic Variable Assignment
function nameString(name){
 var result = name + "Edabit";
  return result;
}
//Buggy Code (Part 5)
function printArray(number) {
var newArray = [];

  for (var i = 1; i <= number; i++) {
    newArray.push(i);
  }

  return newArray;
}
//Is the Number Less than or Equal to Zero?
function lessThanOrEqualToZero(num) {
  return num <= 0;
}
//Tile Teamwork Tactics
function possibleBonus(a, b) {
	const possiblePositions = [a + 1, a + 2, a + 3, a + 4, a + 5, a + 6];
  return possiblePositions.includes(b);
}
