var gamePattern=[];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColor = buttonColours[randomNumber];
gamePattern.push(randomChosenColor);




function nextSequence(){
    let anyNumber = (Math.random()*4);
    var randomNumber = Math.floor(anyNumber);
    console.log(randomNumber);
}
