/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 23rd February
* Class: ART-101 with Wes Modes
* Assignment: Lab 13
*/

//define the function fizzBuzz
function fizzBuzz(f1, f2, f3, f4, maxnum, fizz, buzz, boom, bang){

  //loop through numbers 1 through maxnum, which is defined by the value the user enters in the input field
  for (var i = 1; i <= maxnum; i++){

    //create a string that we will later mutate
    var string = "";

    //check if the current number is a multiple of the factor 1 and append a word to the string if true
    if(i%f1 == 0){
      string = string + fizz;
    }

    //check if the current number is a multiple of the factor 2 and append a word to the string if true
    if(i%f2 == 0){
      string = string + buzz;
    }

    //check if the current number is a multiple of the factor 3 and append a word to the string if true
    if(i%f3 == 0){
      string = string + boom;
    }

    //check if the current number is a multiple of the factor 4 and append a word to the string if true
    if(i%f4 == 0){
      string = string + bang;
    }

    //if any multiples were detected for the current number, print out the full string
    if(string.length >= 1){
      string = i + ": " + string + "!";
    }else{ //if no multiples were detected, print the number and a space
      string = i + ": ";
    }

    //log the string int he console for debugging
    console.log(string);

    //append the output the to the ouput div
    $("#output").append('<p>' + string + '</p>');
  }
}

//on button click, call the function
$("#button").click(function(){

  //get values from the input fields
  var w1 = $("#inputw1").val(); //word 1
  var w2 = $("#inputw2").val(); //word 2
  var w3 = $("#inputw3").val(); //word 3
  var w4 = $("#inputw4").val(); //word 4
  var fac1 = $("#inputf1").val(); //factor 1
  var fac2 = $("#inputf2").val(); //factor 2
  var fac3 = $("#inputf3").val(); //factor 3
  var fac4 = $("#inputf4").val(); //factor 4
  var num = $("#inputMax").val(); //limit for loops

  //call the fizzbuzz function, parsing the input values as arguments
  fizzBuzz(fac1, fac2, fac3, fac4, num, w1, w2, w3, w4);
});
