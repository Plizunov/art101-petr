/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 10th February
* Class: ART-101 with Wes Modes
* Assignment: Lab 10
*/

//get the button element from the HTML page and assign a function upon click event to it
var button = document.getElementById('button');
button.addEventListener('click', function() {

  // Read the value that has been input into the field by the user
  var inputValue = document.getElementById('input').value;
  console.log("inputValue = ", inputValue);

  //Split the input into an array
  var inputArray = inputValue.split("");
  console.log("inputArray = ", inputArray);

  //sort the array alphabetically
  var sortedInput = inputArray.sort();
  console.log("sortedInput = ", sortedInput);


  //join the array back into a string
  var joinedOutput = sortedInput.join('');
  console.log("joinedOutput = ", joinedOutput);

  //replace the placeholder text on the page with our results
  document.getElementById('output').innerHTML = "<p>" + joinedOutput + "</p>";

});
