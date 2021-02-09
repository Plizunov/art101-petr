/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 3rd February
* Class: ART-101 with Wes Modes
* Assignment: Lab 7
*/

//Test1
function firstThing(test){
  console.log(test + ": This is the first thing.<br>")
}

function secondThing(test){
  console.log(test + ": This is the second thing.<br>")
}

function thirdThing(test){
  console.log(test + ": This is the third thing.<br>")
}

firstThing("TEST 1");
secondThing("TEST 1");
thirdThing("TEST 1");

//Test 2 - in order
setTimeout(function(){
  firstThing("TEST 2");
}, 0);

setTimeout(function(){
  secondThing("TEST 2");
}, 0);

setTimeout(function(){
  thirdThing("TEST 2");
}, 0);

//Test 3 - in order of 2,3,1
setTimeout(function(){
  secondThing("TEST 2");
}, 3000);

setTimeout(function(){
  thirdThing("TEST 2");
}, 1000);

setTimeout(function(){
  firstThing("TEST 2");
}, 2000);
