var randomNum1=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");

var randomNum2=Math.floor(Math.random()*6)+1;

document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum2 + ".png");

if (randomNum1 > randomNum2) {
  document.querySelector("h2").innerHTML = "Player 1 Wins!";
}
else if(randomNum2 > randomNum1) {
  document.querySelector("h2").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h2").innerHTML = "It's a Draw!";
}
