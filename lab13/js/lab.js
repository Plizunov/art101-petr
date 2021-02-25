/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 23rd February
* Class: ART-101 with Wes Modes
* Assignment: Lab 13
*/

/*
//constants that define the words used for the different multiples
var word3 = "Fizz";
var word5 = "Buzz";
var word7 = "Boom";
*/

function fizzBuzz(maxnum){
  for (var i = 1; i <= maxnum; i++){
    var string = "";

    if(i%3 == 0){
      string = string + "Fizz";
    }

    if(i%5 == 0){
      string = string + "Buzz";
    }

    if(i%7 == 0){
      string = string + "Boom";
    }

    if(string.length > 1){
      string = i + ": " + string + "!";
    }else{
      string = i + ": ";
    }

    console.log(string);
    $("#output").append('<p>' + string + '</p>');
  }
}

$("#button").click(function(){
  var num = $("#input").val();
  fizzBuzz(num);
  console.log("Button Clicked")
});


/*
//declare sortinghat function with a string argument
function sortinghat(str){

  //declare var len and assign the length of the argument to it
  var len = str.length;
  //divide the len value by 4 and use the remainder to determine which outcome will be returned
  var mod = len % 4;

  //if the remainder is 0, return Gryddinfor
  if(mod == 0){
    return "Gryddinfor"
  }
  //if the remainder is 1, return Pufflehuff
  else if(mod == 1){
    return "Pufflehuff"
  }
  //if the remainder is 2, return Clavenraw
  else if(mod == 2){
    return "Clavenraw"
  }
  //if the remainder is 3, return Innerslyth
  else if(mod == 3){
    return "Innerslyth"
  }
}

//locate the button using jQuery and attach a function execution on click
$("#button").click(function() {

  //get the input value fromt he input form in the HTML doc
  var name = $("#input").val();

  //parse the received value to the sortinghat function and assign the result value to var house
  var house = sortinghat(name);

  //append the new value to the output div and atach a corresponsing house picture
  $("#output").after("<p>The Sorting Hat has sorted you into " + house + "</p></br>" + "<img src='img/" + house + ".png' id='image'></br>");

});
*/
