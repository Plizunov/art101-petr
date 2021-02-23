/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 23rd February
* Class: ART-101 with Wes Modes
* Assignment: Lab 12
*/

function sortinghat(str){
  var len = str.length;
  var mod = len % 4;
  if(mod == 0){
    return "Gryddinfor"
  }
  else if(mod == 1){
    return "Pufflehuff"
  }
  else if(mod == 2){
    return "Clavenraw"
  }
  else if(mod == 3){
    return "Innerslyth"
  }
}

$("#button").click(function() {
  var name = $("#input").val();
  var house = sortinghat(name);
  $("#output").after("<p>The Sorting Hat has sorted you into " + house + "</p></br>" + "<img src='img/" + house + ".png' id='image'></br>");
});
