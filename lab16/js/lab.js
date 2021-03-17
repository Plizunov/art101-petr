
/*
* Author: Petr Lizunov <plizunov@ucsc.edu>
* Created: 10th February
* Class: ART-101 with Wes Modes
* Assignment: Lab 10
*/

$("#button").click(function(){

    $("#title").empty();
    $("#output").empty();

    $.ajax({
    url: "https://xkcd.com/640/info.0.json",

    data: {},

    type: "GET",

    dataType: "json",

    success: function(data) {
      var stringified = JSON.stringify(data);
      console.log(stringified);
      var comicObj = JSON.parse(stringified);
      console.log(comicObj);
      $("#title").append("Title: " + comicObj.title + "!");
      $("#output").append("<img src='" + comicObj.img + "'>");
    },

    error: function(jqXHR, textStatus, errorThrown){
      console.log("Error:", textStatus, errorThrown);
    }
  });
});
