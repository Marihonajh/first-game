var playerOne = "";
var playerTwo = "";

var throwDice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.tose = 0;
  this.curScore = 0;
  this.totalScores = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollOne = function() {
  if (this.tose === 1) {
    curScore = 0;
    alert("failed" + this.playerName + " you tosed a 1; turn to the next player!")
  } else {
    this.curScore += this.tose;
  }
}

Player.prototype.hold = function() {
  this.totalScores += this.curScore;
  this.curScore = 0;

  alert(this.playerName + ", turn to the next player")
}

Player.prototype.winnerCheck = function() {
  if (this.totalScore >= 100) {
    alert(this.playerName + "you've won");
  }
}

$(document).ready(function() {
  $("#newGame").click(function() {
    playerOne = new Player(true);
    playerTwo = new Player(true);
    $("#gameSection").show();
    $(".jumbotron").hide();

    var player1Name = $(".player1Name").val();
    $("#player1Name").text(player1Name);
    var player2Name = $(".player2Name").val();
    $("#player2Name").text(player2Name);

    playerOne.playerName = player1Name;
    playerTwo.playerName = player2Name;
  })

  $("button#tose-1").click(function(event) {
    playerOne.tose = throwDice();
    $("#roll-1").text(playerOne.tose);
    playerOne.rollOne();
    $("#currentScore-1").text(playerOne.curScore);
  });

  $("button#tose-2").click(function(event) {
    playerTwo.tose = throwDice();
    $("#roll-2").text(playerTwo.tose);
    playerTwo.rollOne();
    $("#currentScore-2").text(playerTwo.curScore);
  });

  $("button#hold-1").click(function(event) {
    playerOne.hold();
    $("#totalScores-1").text(playerOne.totalScores);
    $("#currentScore-1").empty();
    $("#roll-1").empty();
    playerOne.winnerCheck();
  });
  $("button#hold-2").click(function(event) {
    playerTwo.hold();
    $("#totalScores-2").text(playerTwo.totalScores);
    $("#currentScore-2").empty();
    $("#roll-2").empty();
    playerTwo.winnerCheck();
  });
});