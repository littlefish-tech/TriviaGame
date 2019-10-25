// when user click the start button
// The timer starts to run
// user start to click the question
//when click the right answer, then win++
//when click the wrong answer, then loss++
// For not clicked answer, unclicked++
// when times up, finish and show the result

var displayTime = 60;
var questionArr = [
  {
    question: "What is the first letter of the alphabet?",
    answers: ["a", "b", "z", "e"],
    correct: "a"
  },
  {
    question: "What is the last letter of the alphabet?",
    answers: ["a", "b", "z", "e"],
    correct: "z"
  },
  {
    question: "What is the second letter of the alphabet?",
    answers: ["a", "b", "z", "e"],
    correct: "b"
  }
];

$("#gameContainer").hide();

$("#startButton").on("click", function() {
  console.log("button clicked");
  $("#startButton").hide();
  $("#gameContainer").show();
  $("#timeRemaining").text(displayTime);
});

// setTimeout(function() {
//   console.log("set time out ran after 3second");
// }, 3000);

setInterval(function() {
  console.log("set interval ran after 1 second");
  displayTime--;
  $("#timeRemaining").text(displayTime);
}, 1000);

for (var i = 0; i < questionArr.length; i++) {
  var currentQuestion = questionArr[i].question;
  $("#questionsDisplay").append(currentQuestion);

  var radioBtn = $('<input type="radio" name="rbtnCount" />');
  radioBtn.appendTo("#questionDisplay");
}