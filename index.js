var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomeImage1 = "/images/dice" + randomNumber1 + ".png";
document.getElementsByTagName("img")[0].src = randomeImage1;

var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomeImage2 = "/images/dice" + randomNumber2 + ".png";
document.getElementsByTagName("img")[1].src = randomeImage2;

var heading = document.querySelector("h1");

if(randomNumber1 > randomNumber2) {
    heading.innerHTML = "Player1 Wins!!"
} else if(randomNumber1 === randomNumber2) {
    heading.innerHTML = "Draw!";
} else {
    heading.innerHTML = "Player2 Wins!!";
}
