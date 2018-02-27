var expectedScore;
var counterTotal = 0;

$("#counter-total").text(counterTotal);
$("#counter-total").empty();

var wins = 0;
$("#wins").text(wins);

var losses = 0;
$("#losses").text(losses);

var crystalOne = $("#crystal1");
var crystalTwo = $("#crystal2");
var crystalThree = $("#crystal3");
var crystalFour = $("#crystal4");
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var randomNumber = [];
expectedScore = Math.floor(Math.random() * (120 - 19)) + 19;

$(document).ready(function() {
  var forRandom = Math.floor(Math.random() * 300);

  $("#random-number").text(expectedScore);

  function reset() {
    counterTotal = 0;
    $("#counter-total").text(counterTotal);
    $("#counter-total").empty();
    $("#random-number").empty();
    expectedScore = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#random-number").text(expectedScore);
    randomNumber = [];
  }

  $(".crystal-image").on("click", function() {
    $(crystalOne).attr("data-crystalvalue", randomNumber[0]);
    $(crystalTwo).attr("data-crystalvalue", randomNumber[1]);
    $(crystalThree).attr("data-crystalvalue", randomNumber[2]);
    $(crystalFour).attr("data-crystalvalue", randomNumber[3]);

    var crystalValue = $(this).attr("data-crystalvalue");
    crystalValue = parseInt(crystalValue);
    console.log(crystalValue);
   
    counterTotal += crystalValue;
    $("#counter-total").text(counterTotal);

    if (counterTotal === expectedScore) {
      alert("You win!");
      wins++;
      $("#wins").text(wins);
      reset();
    } else if (counterTotal >= expectedScore) {
      alert("You lose!!");
      losses++;
      $("#losses").text(losses);
      reset();
    }
  });
});
