var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
var randomImageSource = "images/" + randomDiceImage; //images.dice1png - images.dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() *6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; //images.dice1png - images.dice6.png and dice1.png - dice6.png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player 1 wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
//if player 2 wins
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
}
//if draw
else {
    document.querySelector("h1").innerHTML = "Draw!";
}