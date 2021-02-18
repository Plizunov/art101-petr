/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 17th February
* Class: ART-101 with Wes Modes
* Assignment: Lab 11
*/

//append a button to the Challenges section of the HTML document
$("p#challenges").after("<button id='button1'>Click me to turn the text red!</button>");


//assign a function to the button that, on-click, turns the text in the section red
$("#button1").click(function(){
  $("#challenges").toggleClass("red");
});

//append a button to the Problems section of the HTML document
$("p#problems").before("<button id='button2'>Click me to make the text smaller!</button>");


//assign a function to the button that, on-click, turns the text in the section smaller
$("#button2").click(function(){
  $("#problems").toggleClass("smol");
});

//append a button to the Results section of the HTML document
$("#results").before("<button id='button3'>Click me to show the results text!</button>");

//assign a function to the button that, on-click, toggles between two classes with different CSS attributes, hiding and unhiding the text
$("#button3").click(function(){
  $("#results").toggleClass("nonexistent");
});
