
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];


// Generates random numbers between 0 and 3
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

}
