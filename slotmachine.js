var reel = ["cherry", "bar", "7", "JACKPOT", "orange", "lemon", "cash", "win", "grapes"]
var money = 500;

function randomSymbol(reel) {
  reel1 = reel[Math.floor(Math.random() * reel.length)];
  reel2 = reel[Math.floor(Math.random() * reel.length)];
  reel3 = reel[Math.floor(Math.random() * reel.length)];
  console.log(reel1, reel2, reel3);
  updateReels(reel1, reel2, reel3);
}

function updateMoney(money) {
	currentMoney.innerHTML = "You have $" + money;
    if (money < 10) {
      	currentMoney.innerHTML = "You don\'t have enough money to play.";
    }
}

function updateReels(reel1, reel2, reel3) {
	spinResults.innerHTML = (`Results: ${reel1}, ${reel2}, ${reel3}`);
}

function updateWinnings(prize) {
	currentWinnings.innerHTML = (prize);
}


function checkWin() {
  var win = 0;
  if (reel1 == "JACKPOT" && reel1 == reel2 && reel2 == reel3) {
     prize = "JACKPOT! You won $1000!";
    money += 990;
  } else if (reel1 == reel2 && reel2 == reel3) {
     prize = "You won $100!";
    money += 90;
  } else if (reel1 == reel3 && reel1 != reel2) {
     money += 40;
    prize = "You won $50!"
  } else {
     money -= 10;
    prize = "You lost."
  }
  console.log(money);
updateWinnings(prize);
  updateMoney(money);
}

function play() {
  if (money >= 10) {
    randomSymbol(reel);
    checkWin();
  } else {
    console.log("You don't have enough money to play.");
  }
}
console.log(`You have $${money}.`);
document.getElementById("currentMoney").innerHTML = (`You have $${money}`);
document.getElementById("spinResults").innerHTML = "";