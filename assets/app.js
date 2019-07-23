
var vocations = ["happy", "fighter pilot", "cowboy monkey", "power ranger"];
var search = "";
var a;

$("#buttons").on("click", ".btn", function(){

  var object = $(this).attr("data");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + object + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response){
        // console.log(response);

        var imageObjArr = response.data;
        for(var i = 0; i < imageObjArr.length; i++){

          var newSearchDiv = $("<div>");
          var p = $("<p>");
          p.text(imageObjArr[i].rating);
          var p = $("<p>").text("Rating: " + imageObjArr[i].rating);
  
          var image = $("<img>").addClass("job");
          image.attr("src", imageObjArr[i].images.fixed_height_still.url);
          image.attr("data-still", imageObjArr[i].images.fixed_height_still.url);
          image.attr("data-animate", imageObjArr[i].images.fixed_height.url);
          image.attr("data-state", "still");
          image.addClass("gif");

          newSearchDiv.append(image);
          newSearchDiv.append(p);
          $("#gifs-display").prepend(newSearchDiv);
        }
      })
    })
  
  function renderButtons(){

      $("#buttons").empty();

      for(var i = 0; i < vocations.length; i++) {
          a = $("<button type=" + "button" + ">" + vocations[i] + "</button>").addClass("btn").attr("data", vocations[i]);

          $("#buttons").append(a);
      }
  }
  //     $("#add-search").on("click", function(event){
  //       event.preventDefault();

  //       var vocation = $("#search-input").val().trim();
  //       vocations.push(vocation);
  //       renderButtons();
  //     })
  //     function buttonSearch(){
  //       $(".vocation-btn").on("click",function(event){
  //         queryURL;
  //         newSearchDiv.append(image);
  //         newSearchDiv.append(pRating);
  //       })
  //     }
  //     console.log();

  // STOP & START
  $("#gifs-display").on("click", ".gif", function(event){
    event.preventDefault();

    var state = $(this).attr("data-state");

    if (state === "still") {

      $(this).attr("src", $(this).attr("data-animate"));

      $(this).attr("data-state", "animate");

    } else {
      $(this).attr("src", $(this).attr("data-still"));

      $(this).attr("data-state", "still");
    }
  
  })

  $("#add-search").on("click", function(event){
    event.preventDefault();

    console.log("add-search");

    search = $("#search-input").val().trim();
    vocations.push(search);
    console.log(vocations);
    renderButtons();
  })
  renderButtons();