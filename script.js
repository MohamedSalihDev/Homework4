const displayEl = document.getElementById("whatShows")
const timerEl = document.querySelector("#timer");
const scoreEl = document.querySelector("#score");
const quizEl = document.querySelector("#quizContent");
const startButtonEl = document.querySelector("#pressStart");
const resultAlertEl = document.querySelector("#answerResultAlert");
const allDoneEl = document.getElementById("allDone");
const highScoreEl = document.getElementById("highScore");
const startQuizButton = document.getElementById("startQuizButton");
const yourScoreEl = document.getElementById("yourScore");
let theScore = 0;
let currentQuestion = 0;
const submitInitialsButton = document.getElementById("submitInitials");
const goBackbutton = document.getElementById("goBack");
startQuizButton.addEventListener("click", showQuestion);
let secondsLeft = 60;
const answerAbutton = document.getElementById("answerA");
const answerBbutton = document.getElementById("answerB");
const answerCbutton = document.getElementById("answerC");
const initialsEl = document.getElementById("initials");
highScoreStorageEl = document.getElementById("highScoreStorage");
let intials = initialsEl.textContent;

goBackbutton.addEventListener("click", function () {
  startQuiz();
});


const questionArray = [
  {
    question: "What is the data type that returns a true or false?",
    choiceA: "A) A Boolean",
    choiceB: "B) A Number",
    choiceC: "C) A string",
    Correct: "A) A Boolean",
  },
  {
    question: "What is the index of the first item in an array?",
    choiceA: "A)1",
    choiceB: "B)0",
    choiceC: "C)-1",
    Correct: "B)0"
  },
  {
    question: "Moving declarations to the top is called?",
    choiceA: "A)Hoisting",
    choiceB: "B)Closure",
    choiceC: "C)Mutation",
    Correct: "A)Hoisting"
  },
  {
    question: "What does i++ mean in a loop?",
    choiceA: "A)multiply i by two",
    choiceB: "B)increment i by two each time",
    choiceC: "C)increment i by one each time",
    Correct: "C)increment i by one each time"
  },
];


function startQuiz() {
  startButtonEl.style.display = "block";

  displayEl.appendChild(startButtonEl);
  quizEl.style.display = "none";
  allDoneEl.style.display = "none";
  highScoreEl.style.display = "none";
}


function setCounterText() {
  scoreEl.textContent = theScore;

}

function showQuestion() {
  clearInterval(theScore = 0);
  let currentQuestion = 0;
  clearInterval(secondsLeft = 60)
  setTime();
  timerEl.style.display = "block";
  timerEl.textContent = "You have " + secondsLeft + "  seconds left.";
  quizEl.style.display = "block";
  displayEl.appendChild(quizEl);
  highScoreEl.style.display = "none";
  startButtonEl.style.display = "none";
  allDoneEl.style.display = "none";


  document.getElementById("theQuestion").textContent = questionArray[currentQuestion].question;
  document.getElementById("answerA").textContent = questionArray[currentQuestion].choiceA;
  document.getElementById("answerB").textContent = questionArray[currentQuestion].choiceB;
  document.getElementById("answerC").textContent = questionArray[currentQuestion].choiceC;
}
answerAbutton.addEventListener("click", clickFunction);
answerBbutton.addEventListener("click", clickFunction);
answerCbutton.addEventListener("click", clickFunction);

function shownextQuestion() {

  quizEl.style.display = "block";
  displayEl.appendChild(quizEl);
  highScoreEl.style.display = "none";
  startButtonEl.style.display = "none";
  allDoneEl.style.display = "none";


  document.getElementById("theQuestion").textContent = questionArray[currentQuestion].question;
  document.getElementById("answerA").textContent = questionArray[currentQuestion].choiceA;
  document.getElementById("answerB").textContent = questionArray[currentQuestion].choiceB;
  document.getElementById("answerC").textContent = questionArray[currentQuestion].choiceC;
  answerAbutton.addEventListener("click", clickFunction);
  answerBbutton.addEventListener("click", clickFunction);
  answerCbutton.addEventListener("click", clickFunction);

}

function clickFunction(event) {
  event.preventDefault();


  console.log("success");
  if (currentQuestion === questionArray.length) {

    allDone();
  } else {

    shownextQuestion();

  }


  if (event.target.textContent === questionArray[currentQuestion].Correct) {
    currentQuestion++;
    theScore++;
    console.log("correct answer");
    setCounterText();
    shownextQuestion();
  }

  else {
    currentQuestion++;
    secondsLeft = secondsLeft - 10;
    console.log("incorrect!");
    setCounterText();
    shownextQuestion();
  }


}

function allDone() {
  clearInterval(currentQuestion = 0);
  clearInterval(secondsLeft = 60)

  allDoneEl.style.display = "block";
  displayEl.appendChild(allDoneEl);
  scoreEl.style.display = "block";
  scoreEl.textContent = theScore;
  startButtonEl.style.display = "none";
  quizEl.style.display = "none";
  timerEl.style.display = "none";
  highScoreEl.style.display = "none";
  submitInitialsButton.addEventListener("click", function (e) {

    e.preventDefault();
    localStorage.setItem("finalScore", theScore);
    localStorage.setItem("initials", initials);
    yourScore();
  })


}

function yourScore() {

  highScoreEl.style.display = "block";
  displayEl.appendChild(highScoreEl);
  
  startButtonEl.style.display = "none";
  quizEl.style.display = "none";
  timerEl.style.display = "none";
  allDoneEl.style.display = "none"
  yourScoreEl.textContent = theScore;
  highScoreStorageEl.textContent = localStorage.getItem("initials")

}



function setTime() {

  const timerInterval = setInterval(function () {

    secondsLeft--;
    timerEl.textContent = "You have " + secondsLeft + "  seconds left.";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      allDone();
    }
    if (currentQuestion === questionArray.length) {
      clearInterval(timerInterval);
      allDone();
    }

  }
    , 1000);
}

startQuiz();


