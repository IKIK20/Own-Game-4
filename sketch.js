var playerCount;
var gameState=0;
var database;
var allPlayers;
var ord1=[]

var form,game,player,check=false,check2=false;

function setup() {
  createCanvas(1300,800);
  database = firebase.database();
  var x= getSecondsToday()
  //console.log(x)

  game= new Game()
  game.getState()
  game.start()  
  game.order()
}

function draw() {
  background("pink"); 
  if(playerCount===2){
    game.update(1)
  }

  if(gameState===1){
    if(check===false){
      check=true
      startTimer=getSecondsToday()
      endTimer= startTimer+5
      console.log(startTimer,endTimer)
    }
    game.rules()
  
  }

  if(gameState===2){
    if(check2===false){
      check2=true
      startTimer2=getSecondsToday()
      endTimer2= startTimer2+300
      console.log(startTimer2,endTimer2)
    }
    game.play()
  }

  drawSprites();
}

function getSecondsToday() {
  let now = new Date();

  // create an object using the current day/month/year
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today; // ms difference
  return Math.round(diff / 1000); // make seconds
}

