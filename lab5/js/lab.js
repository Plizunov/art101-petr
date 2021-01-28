/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 26th January
* Class: ART-101 with Wes Modes
*/

//Defining the variables to be printed out

var make = "VolksWagen";
var model = "Jetta";
var color = "Silk Blue";
var year = 2016;
var current = 2021;

//Calculating the age of the car by subtracting the make year from current year

var age = current - year;

//Output the results

document.writeln("Make: " + make + "<br>");
document.writeln("Model: " + model + "<br>");
document.writeln("Color: " + color + "<br>");
document.writeln("Year: " + year + "<br>");
document.writeln("Age: " + age + "<br>");
