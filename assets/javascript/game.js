$(document).ready(function(){
  console.log(document);
var targetScore= "";
var losses = 0;
var wins = 0;
var score; 
var diamondBtn;
var emeraldBtn;
var sapphireBtn;
var amberBtn;
var diamondValue = ""; 
var emeraldValue = "";
var sapphireValue = "";
var amberValue = "";

// function to reset game  
function newgame() {
// reset scores
targetScore = Math.floor(Math.random()*101+19);
score=0;

// make crystal buutons
var crystal=[$(".amber"),$(".diamond"), $(".emerald"),
$(".sapphire")];
var button=[diamondBtn,emeraldBtn,amberBtn,sapphireBtn]

// for loop to give crystals value 
for (var i=0; i<crystal.length; i++){
  button[i]=crystal[i].attr("data-crystal", Math.floor(Math.random()*12)+2);
};
$("#targetScore").text(targetScore);
$("#wins").text(wins);
$("#losses").text(losses);
$("#score").text(score);
}
newgame();

$(".crystal").on("click", function(){
  console.log($(".click"))
  score += parseInt($(this).attr("data-crystal"));
  $("#score").html(score);
  if(score == targetScore) {
      wins++;
      newgame();
  }
  else if (score > targetScore) {
      losses++;
      newgame();
  }
});

});