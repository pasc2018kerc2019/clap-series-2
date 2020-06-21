import { VALUES ,TYPES, compare } from "./allthegame.js"

$(document).ready(function() {
  $("#play").click(function(){
      startGame();
  }); 
});



function startGame(){
  //initgame
  let HeroCards = []
  let VilainCards = []
  let FloorCards =[]
  
let deck = VALUES.flatMap(v => TYPES.map(t => v+t)).shuffle();
      

FloorCards = deck.slice(0,5);
HeroCards = deck.slice(5,7);
VilainCards = deck.slice(7,9);



  
/*********************************dom********************** */

let HeroCards0 = document.getElementById('HeroCards0')
let HeroCards1 = document.getElementById('HeroCards1')
let VilainCards0 = document.getElementById('VilainCards0')
let VilainCards1 = document.getElementById('VilainCards1')
let FloorCards0 = document.getElementById('FloorCards0')
let FloorCards1 = document.getElementById('FloorCards1')
let FloorCards2 = document.getElementById('FloorCards2')
let FloorCards3 = document.getElementById('FloorCards3')
let FloorCards4 = document.getElementById('FloorCards4')

  HeroCards0.src = "assets/" + HeroCards[0] + ".png"
  HeroCards1.src = "assets/" + HeroCards[1] + ".png"
  VilainCards0.src = "assets/" + VilainCards[0] + ".png"
  VilainCards1.src = "assets/" + VilainCards[1] + ".png"
  FloorCards0.src = "assets/" + FloorCards[0] + ".png"
  FloorCards1.src = "assets/" + FloorCards[1] + ".png"
  FloorCards2.src = "assets/" + FloorCards[2] + ".png"
  FloorCards3.src = "assets/" + FloorCards[3] + ".png"
  FloorCards4.src = "assets/" + FloorCards[4] + ".png"
  
  let hand1 = [...FloorCards,...HeroCards];
  let hand2 = [...FloorCards,...VilainCards];

  let winner =  document.getElementById('result')


  winner.innerText= compare(hand1,hand2)







}
