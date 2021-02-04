/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 3rd February
* Class: ART-101 with Wes Modes
* Assignment: Lab 7
*/

var input = window.prompt("Give me some text so I can mess it up!");

//Defining the variables to be printed out
function intakeAndSort(arg) { //declare the function, which takes a value as an argument to use in the function

  //prompt the user to enter their text into the function
  var userText = arg;
  console.log("userText =", userText);

  //capitalize the string to avoid sorting capitalized letters first
  var userTextUpped = userText.toUpperCase();
  console.log("userTextUpped =", userTextUpped);

  //split the userText into multiple strings using whitespace. If there are no white spaces, the string doesn't change.
  var noSpaceArray = userTextUpped.split(" ");
  console.log("noSpaceArray =", noSpaceArray);

  //join the split strings back together, eliminating white spaces. If there were no white spaces to begin with, the string doesn't change.
  var noSpaceText = noSpaceArray.join('');
  console.log("noSpaceText =", noSpaceText);

  //split the string of the noSpaceText into an array of letters
  var array = noSpaceText.split('');
  console.log("array =", array);

  //sort the array of letters alphabetically, capitalized letters first
  var sorted = array.sort();
  console.log("sorted =", sorted);

  //join together the array of letters into one string
  var joined = sorted.join('');
  console.log("joined =", joined);

  //return the result of the joined string
  return joined;
}

//output of the script
document.writeln("ENJOY YOUR TEXT IN CHAOS MUAHAHAHAH: <div class=output> ", intakeAndSort(input), "</br></div>");
