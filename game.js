
var gamePattern = [];

var buttonColours = ["red", "blue", "green", "yellow"];


// Generates random numbers between 0 and 3
function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  //2. Using jQuery to animate a flash to the button selected
$("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

//3. Using Javascript to play the sound for the button colour selected
var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();

}
