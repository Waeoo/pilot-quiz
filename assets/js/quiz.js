/* jshint esversion: 8 */

// constant variables declared
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const head2 = document.getElementById("head2");
const questionAreaElement = document.getElementById("question-area");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

// let variables declared
let startQuiz = document.getElementById("start-quiz");
let shuffledQuestions;
let currentQuestionIndex = 0;
let correctAnswer = 0;
let wrongAnswer = 0;
let canAnswer = false;

var username = localStorage.getItem("nameB");
document.getElementById("result").innerHTML = username; 

// Buttons to start and continue quiz
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNewQuestion();
});

// Function which start the game, shuffe questions, reset scoreboard and present first question
function startGame() {
    startButton.classList.add("hide");
    head2.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionAreaElement.classList.remove("hide");
    clearScoreBoard();
    scoreBoard();
    if (currentQuestionIndex === 0) {
        startQuiz.classList.add("hide");
    }
    setNewQuestion();
}

// Function to show the next question
function setNewQuestion() {
    resetQuestions(); 
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// Function to show and increase either correct or wrong answer on scoreboard
function scoreBoard() {
    console.log = function(message) {
        document.getElementById("correct").innerHTML = message;
    };
    console.log('correct answers: ' + correctAnswer);
    
    console.log = function(message) {
        document.getElementById("wrong").innerHTML = message;
    };
    console.log('wrong answers: ' + wrongAnswer);
}

// Function to get questions from the question.js and show them
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.choices.forEach(answer => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });  
}

// Function to reset questions
function resetQuestions() {
    canAnswer = true;
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Function to reset scoreboard in quiz
function clearScoreBoard() {
    if (currentQuestionIndex === 0) {
        wrongAnswer = 0;
        correctAnswer = 0;
    }
}

// Function to check correct answer
function selectAnswer(choice) {
    const correctButton = choice.target;
    const correct = correctButton.dataset.correct;
    setStatusClass(document.body, correct);
    // Reuseable array converted
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length-10 > currentQuestionIndex +1) {
        nextButton.classList.remove("hide");
    } else {
        startButton.innerText = "Restart";
        startButton.classList.remove("hide");
        if (currentQuestionIndex === 9) {
            startQuiz.classList.remove("hide");
        }
        
    }
    // Increase on scoreboard either correct or wrong
    if (correct && canAnswer) {
        correctAnswer++;
        canAnswer = false;
    } else if (canAnswer) {
        wrongAnswer++;
        canAnswer = false;
    }
    scoreBoard();
}


function setStatusClass(element, correct) {
    clearStatusClass(element);
    // Add status of the elemnt
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}
// Clear the set status of the element 
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}