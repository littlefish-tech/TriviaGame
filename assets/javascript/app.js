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

var questionContainer = document.getElementById("questionDisplay");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");

generateQuiz(questionArr, questionContainer, resultsContainer, submitButton);

function generateQuiz(questionArr, questionContainer, resultsContainer, submitButton){

    function showQuestions(questionArr, questionContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questionArr.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questionArr[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        // + letter + ': '
                        + questionArr[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questionArr[i].question + '</div>'
                + '<div class="answers">' + answers.join("") + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        questionContainer.innerHTML = output.join('');
    }


    function showResults(questionArr, questionContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = questionContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questionArr.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questionArr[i].correct){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questionArr, questionContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questionArr, questionContainer, resultsContainer);
    }




// for (var i = 0; i < questionArr.length; i++) {
//   var currentQuestion = questionArr[i].question;
//   $("#questionsDisplay").append(currentQuestion);
//   console.log(currentQuestion);
 
//   var currentAnswer = questionArr[i].answers;
//   console.log(currentAnswer);
//   if (currentQuestion == questionArr[i].correct)

// var radios = document.getElementsByName('rbtn');

// for (var i = 0, length = radios.length; i < length; i++) {
//     if (radios[i].checked) {
//         // do whatever you want with the checked radio
//         alert(radios[i].value);



  // var radioBtn = $('<input type="radio" name="rbtnCount" />');
  // radioBtn.appendTo("#questionDisplay");
  // console.log(radioBtn);

  // $("#questionsDisplay").append(
  //   $('div/>')
  // );
  

  
}