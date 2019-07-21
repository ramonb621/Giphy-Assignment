var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + vocations + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

var vocations = ["cop", "nurse", "doctor", "plumber"];
  

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(data){
      
        console.log(data);

        var newSearchDiv = $("<div class='vocation'>");
        var rating = data.rating;
        var pRating = $("<p>").text("Rating: " + rating);
        newSearchDiv.append(pRating);

        var imageURL = data.url;
        var image = $("<img>").attr("src", imageURL);
        newSearchDiv.append(image);

        $("#gifs-display").prepend(newSearchDiv);
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
      // $(document).on("click", ".vocation-btn", renderButtons);
      renderButtons();


  // STOP & START
    $(".gif").on("click", function() {

    var state = $(this).attr("data-state");

    if (state === "still") {

      $(this).attr("src", $(this).attr("data-animate"));

      $(this).attr("data-state", "animate");

    } else {
      $(this).attr("src", $(this).attr("data-still"));

      $(this).attr("data-state", "still");
    }
  
  });
