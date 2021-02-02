/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 1st February
* Class: ART-101 with Wes Modes
* Assignment: Lab 6
*/

//Defining the variables to be printed out

var myTransport = ["VW Jetta", "Walking", "Bus"];

var myMainRide = {
  make: "VolksWagen",
  model: "Jetta",
  color: "SilkBlue",
  year: 2016,
  age: function(){
    return 2021 - this.year;
  }
};

document.writeln("Main modes of transportation: " + myTransport + "<br>");
document.writeln("My main vehicle: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre");
