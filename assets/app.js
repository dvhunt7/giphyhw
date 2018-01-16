//zwSkp5SkYy6QBQvKg4O7XjohB61VtJfY


//https://api.giphy.com/v1/gifs/search?api_key=zwSkp5SkYy6QBQvKg4O7XjohB61VtJfY&q=cats&limit=25&offset=0&rating=G&lang=en

//var APIKey = "zwSkp5SkYy6QBQvKg4O7XjohB61VtJfY";

// Here we are building the URL we need to query the database
//var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=zwSkp5SkYy6QBQvKg4O7XjohB61VtJfY&q=" + search + "&limit=25&offset=0&rating=G&lang=en";



var characters = ["Dr.Doom" , "Thanos" , "Spider-man" , "Cyclops" , "Wolverine" , "Deadpool"]

renderbuttons()

function renderbuttons() {

	$("#char-buttons").empty();

	for (var i = 0; i < characters.length; i++){

		var a = $("<button>");

		a.addClass("character");

		a.attr("data-name", characters[i]);

		a.text(characters[i]);

		$("#char-buttons").append(a);

	}
}

$("#add-char").on("click", function(event){

	event.preventDefault();

	var charinput = $("#char-input").val().trim();

	characters.push(charinput);

	renderbuttons();

	$("#char-input").val("")
})




$(".character").on("click", function(){

	var APIchar = $(this).attr("data-name");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    APIchar + "&apikey=zwSkp5SkYy6QBQvKg4O7XjohB61VtJfY";

  $.ajax({
      url: queryURL,
      method: "GET"
    })

  .then(function(response){

  	var results = response.data;

  	for (var i = 0; i < results.length; i++){

  		var gifDiv = $("<div>");

  		var charImage = $("<img>");

  		charImage.attr("src", results[i].images.fixed_height.url);

  		gifDiv.append(charImage);

  		$("#gifs").prepend(gifDiv)
  	}
  })

})