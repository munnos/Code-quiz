var questions = [
  {
    qtitle: "What is a boolean?",
    choices: ["An Array", "An object", "True or false value"],
    answer: "True or false value",
  },

  {
    qtitle: "What would you want to use a 'for' loop?",
    choices: [
      "To repeat a section of code a number of times",
      "To style a page",
      "Iterate through an array",
    ],
    answer: "Iterate through an array",
  },

  {
    qtitle:
      "what kind of form does data need to take to be able to use browser local storage?",
    choices: ["Booleans", "Strings", "Numbers", "Condiitonal Statement"],
    answer: "Strings",
  },

  {
    qtitle: "What is an array composed of?",
    choices: ["Objects", "Strings", "Functions", "For loops"],
    answer: "Objects",
  },
];

var questionIndex = 0;
var startButton = document.querySelector("#start");
var questionElement = document.querySelector(".questions");
var choicesElement = document.querySelector("#choices");
var timerEl = document.querySelector("#timer");
var secondsLeft = 60;

function qClick(event) {
  console.log(event.target.innerHTML);
  var userChoice = event.target.innerHTML;
  if (userChoice === questions[questionIndex].answer) {
    questionIndex++;
    renderQuestion();
  }
}

function renderQuestion() {
  var currentQuestion = questions[questionIndex];
  var questionTitle = document.querySelector("#question-title");
  console.log(currentQuestion.qtitle);
  questionTitle.textContent = currentQuestion.qtitle;
  choicesElement.innerHTML = "";
  for (let i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var choiceLi = document.createElement("li");
    choiceLi.setAttribute("value", choice);
    choiceLi.textContent = choice;

    choicesElement.appendChild(choiceLi);
  }
}

function startQuiz() {
  var startScreen = document.querySelector("#start-screen");
  startScreen.setAttribute("class", "hide");
  questionElement.removeAttribute("class");
  renderQuestion();
}

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = "Time left: " + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("You ran out of time! Please try again");
    }
    return;
  }, 1000);
}
choicesElement.onclick = qClick;
(startButton.onclick = startQuiz), setTime();