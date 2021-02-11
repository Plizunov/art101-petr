/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 10th February
* Class: ART-101 with Wes Modes
* Assignment: Lab 9
*/

// Use getElementById() to find your output <div> and assign it to a variable outputEl
var outputEl = document.getElementById("main");
console.log("outputEl =", outputEl, "</br>");

// Create a new element with document.createElement("p") and assign it to a variable new1El
var new1El = document.createElement("p");
console.log("new1El =", new1El, "</br>");

// Change the html attribute of new1El to say something new.
new1El.innerHTML = "This is an added paragraph from new1El. In this one, I tell you that firetrucks are red.";

// Create another new element and assign it to a variable new2El
var new2El = document.createElement("p");
console.log("new2El =", new2El, "</br>");

// Change the html attribute of new2El to say something else.
new2El.innerHTML = "This is an added paragraph from new2El. In this one, I tell you that dragons are actually real.";

// Append both new elements one at a time using appendChild() to your output <div>
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

// Change the css attributes of at least two elements of your page
new1El.style.fontSize = "25px";
new2El.style.fontSize = "50px";
