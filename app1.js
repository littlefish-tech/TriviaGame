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
    question: "What is the Italian word for pie?",
    answers: ["Pizza", "Pasta", "Sausage", "Soup"],
    correct: "Pizza"
  },
  {
    question: "What is one quarter of 1,000?",
    answers: ["1500", "2000", "2500", "3000"],
    correct: "2500"
  },
  {
    question: "I have a cake and a table named after me, and I'm used all round the world. What am I?",
    answers: ["Tea", "Coffee", "Soup", "Water"],
    correct: "Coffee"
  },
  {
    question: "How many players are there in a baseball team?",
    answers: ["6", "7", "8", "9"],
    correct: "9"
  }
];
console.log(questionArr[0].answers);

$("#gameContainer").hide();

$("#startButton").on("click", function() {
  console.log("button clicked");
  $("#startButton").hide();
  $("#gameContainer").show();
  $("#timeRemaining").text(displayTime);
});

//setTimeout(function() {
//console.log("set time out ran after 3second");
//}, 3000);

setInterval(function() {
  console.log("set interval ran after 1 second");
  displayTime--;
  $("#timeRemaining").text(displayTime);
}, 1000);

var questionContainer = document.getElementById("#questionDisplay");
var resultsContainer = document.getElementById("#results");
var submitButton = document.getElementById("#submit");





for (var i = 0; i < questionArr.length; i++) {
var currentQuestion = questionArr[i].question;
$("#questionsDisplay").append(currentQuestion);
console.log(currentQuestion);
 
var currentAnswer = questionArr[i].answers;
console.log(currentAnswer);
if (currentQuestion == questionArr[i].correct)

var radios = document.getElementsByName('rbtn');

for (var i = 0, length = radios.length; i < length; i++) {
if (radios[i].checked) {
//         // do whatever you want with the checked radio
alert(radios[i].value);



  var radioBtn = $('<input type="radio" name="rbtnCount" />');
  radioBtn.appendTo("#questionDisplay");
  console.log(radioBtn);

  // $("#questionsDisplay").append(
  //   $('div/>')
  // );
  
}
}
}
