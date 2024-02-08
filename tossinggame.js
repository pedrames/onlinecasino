//0=heads 1=tails

let odds = 0;
let number = 0;
let points = 0;
let guess = 0;
const btn = document.getElementById('btn');
const img = document.getElementById('img');
const heads = document.getElementById('heads');
const tails = document.getElementById('tails');
const pointsText = document.getElementById('pointsText');


heads.addEventListener('click', function() {
  heads.style.backgroundColor = 'black';
  tails.style.backgroundColor = 'white';
  guess = 0;
});

tails.addEventListener('click', function() {
  tails.style.backgroundColor = 'black';
  heads.style.backgroundColor = 'white';
  guess=1;
});

btn.addEventListener('click', function() {
  let number = Math.floor(Math.random() * 100);
  if(number < 50 ) {
    odds = 0;
    img.src = "toss1.JPG";
  } else {
    odds = 1;
    img.src = "toss2.JPG";
  }
  if(odds == guess) {
    points++;
    pointsText.innerHTML = 'POINTS = '+points;
  } else {
    
  }
  heads.style.backgroundColor = 'white';
  tails.style.backgroundColor = 'white';
  
});