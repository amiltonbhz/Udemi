
//image 1 randomization
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

//image2 randomization
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2)


//showing results
if (randomNumber1==randomNumber2){
    document.querySelector("h1").innerText="Draw!";
}

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="Player 1 wins!";
}

if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerText="Player 2 wins!";
}

