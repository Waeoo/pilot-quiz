/* jshint esversion: 8 */
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const head2 = document.getElementById("head2");
const questionAreaElement = document.getElementById("question-area");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let startQuiz = document.getElementById("start-quiz");
let shuffledQuestions;
let currentQuestionIndex = 0;
let correctAnswer = 0;
let wrongAnswer = 0;
let canAnswer = false;

function get () {
    var nameBox = localStorage.getItem("nameBox");
    //var nameBox = JSON.parse(nameBox);
    console.log(nameBox);
}
    

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNewQuestion();
});

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

function setNewQuestion() {
    resetQuestions(); 
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

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

function resetQuestions() {
    canAnswer = true;
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function clearScoreBoard() {
    if (currentQuestionIndex === 0) {
        wrongAnswer = 0;
        correctAnswer = 0;
    }
}

function selectAnswer(choice) {
    const correctButton = choice.target;
    const correct = correctButton.dataset.correct;
    setStatusClass(document.body, correct);
    // reuseable array converted
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
    //clear the set status of the element
    clearStatusClass(element);
    if (correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}