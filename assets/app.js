$(document).ready(function(){
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + vocations + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

var vocations = ["cop", "nurse", "doctor", "plumber"];
  
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response){
        var imageObjArr = response.data[0];
        for(var j = 0; j < imageObjArr.length; j++){
          imageLink = imageObjArr.length[j];
          console.log(response);
        }

        var newSearchDiv = $("<div class='vocation'>");
        var rating = imageObjArr.rating;
        var pRating = $("<p>").text("Rating: " + rating);
        newSearchDiv.append(pRating);

        var imageURL = imageObjArr.images.fixed_height.url;
        var image = $("<img>").attr("src", imageURL);
        newSearchDiv.append(image);
        console.log(imageURL)

        $("#gifs-display").prepend(newSearchDiv);
        renderButtons();
      })
  

  function renderButtons(){

      $("#buttons").empty();

      for(var i = 0; i < vocations.length; i++) {
          var a = $("<button>");
          a.addClass("vocation-btn");
          a.attr("data-name", vocations[i]);
          a.text(vocations[i]);
          $("#buttons").append(a);
      }
  }
      $("#add-search").on("click", function(event){
        event.preventDefault();

        var vocation = $("#search-input").val().trim();
        vocations.push(vocation);
        renderButtons();
      })


  // STOP & START
    $(".vocation").on("click", function() {

    var state = $(this).attr("data-state");

    if (state === "still") {

      $(this).attr("src", $(this).attr("data-animate"));

      $(this).attr("data-state", "animate");

    } else {
      $(this).attr("src", $(this).attr("data-still"));

      $(this).attr("data-state", "still");
    }
  
  })
})
