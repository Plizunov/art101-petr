
/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 10th February
* Class: ART-101 with Wes Modes
* Assignment: Lab 10
*/

$.ajax({
  url: "https://xkcd.com/info.0.json",

  data: {},

  type: "GET",

  dataType: "json",

  success: function(data) {
    console.log(data);
  },

  error: function(jqXHR, textStatus, errorThrown){
    console.log("Error:", textStatus, errorThrown);
  }
});
